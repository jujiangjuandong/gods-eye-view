import { localProviderPlugins } from '../server/providers/local.js';

const routes = [];

const middlewares = {
  use(path, handler) {
    if (typeof path === 'function') {
      handler = path;
      path = '/';
    }
    routes.push({ path, handler });
  },
};

const fakeServer = {
  middlewares,
  restart: async () => {},
};

for (const plugin of localProviderPlugins()) {
  // Provider Settings writes local .env files and restarts Vite. That is a
  // local-development feature and is intentionally disabled on Vercel.
  if (plugin?.name === 'gev-key-setup') continue;
  if (typeof plugin?.configureServer === 'function') {
    plugin.configureServer(fakeServer);
  }
}

function pathMatches(mountPath, pathname) {
  if (mountPath === '/' || mountPath === '') return true;
  if (pathname === mountPath) return true;
  return pathname.startsWith(mountPath.endsWith('/') ? mountPath : mountPath + '/');
}

function mountedUrl(originalUrl, mountPath) {
  if (mountPath === '/' || mountPath === '') return originalUrl;
  const url = new URL(originalUrl || '/', 'http://vercel.internal');
  const pathname = url.pathname.slice(mountPath.length) || '/';
  return pathname + url.search;
}

async function runMiddleware(handler, req, res) {
  let nextCalled = false;
  let nextError;

  let finishResolve;
  const finished = new Promise((resolve) => {
    finishResolve = resolve;
    res.once('finish', resolve);
    res.once('close', resolve);
  });

  const next = (error) => {
    nextCalled = true;
    nextError = error;
    finishResolve();
  };

  const returned = handler(req, res, next);
  if (returned && typeof returned.then === 'function') {
    await returned;
  }

  if (res.writableEnded || res.finished || nextCalled) {
    return { nextCalled, nextError };
  }

  await finished;
  return { nextCalled, nextError };
}

export default async function handler(req, res) {
  const originalUrl = req.url || '/';
  const pathname = new URL(originalUrl, 'http://vercel.internal').pathname;

  try {
    for (const route of routes) {
      if (!pathMatches(route.path, pathname)) continue;

      req.url = mountedUrl(originalUrl, route.path);
      const { nextCalled, nextError } = await runMiddleware(
        route.handler,
        req,
        res,
      );

      if (nextError) throw nextError;
      if (res.writableEnded || res.finished) return;
      if (!nextCalled) return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify({ error: 'Unknown API route' }));
  } catch (error) {
    console.error('[vercel-api-adapter]', error?.stack || error?.message || error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-store');
    }
    if (!res.writableEnded) {
      res.end(JSON.stringify({ error: 'Internal API error' }));
    }
  } finally {
    req.url = originalUrl;
  }
}
