const STORAGE_KEY = 'gev-language';

const TEXT = new Map(Object.entries({
  "MISSION CONTROL · FIRST LAUNCH": "任务控制 · 首次启动",
  "Choose your first view": "选择你的第一个视角",
  "It feels like a forbidden cockpit—then you realize the sources are public and the data is real.": "它看起来像一个不该被看到的情报驾驶舱——但你会发现，数据源都是公开的，而且数据是真实的。",
  "LIVE CONTACTS": "实时目标",
  "Aircraft, vessels and nearby intelligence": "查看附近的飞机、船舶与实时态势",
  "SPACE MISSIONS": "太空任务",
  "Launches, spacecraft and orbital context": "查看发射任务、航天器与轨道信息",
  "ENVIRONMENTAL": "环境态势",
  "Live earthquakes and active fires, from USGS and NASA": "来自 USGS 与 NASA 的实时地震和活跃火点",
  "EXPLORE MANUALLY": "自由探索",
  "Begin with a clean globe": "从干净的全球视图开始",
  "Don't show this again": "下次不再显示",
  "ESC to dismiss": "按 ESC 关闭",
  "Tip: the GEV MIC button in the dock lets you talk to the map.": "提示：底部工具栏里的 GEV 麦克风按钮可以让你直接用语音控制地图。",

  "DATA LAYERS": "数据图层",
  "SCENES": "场景",
  "DISPLAY": "显示",
  "CCTV": "监控",
  "CONTEXT": "态势",
  "LOCATION": "位置",
  "VISUAL PRESETS": "视觉预设",
  "ACTIVE STYLE": "当前风格",
  "NORMAL": "普通",
  "PARAMETERS": "参数",
  "SUMMARY": "摘要",
  "Ready": "就绪",

  "Layout": "布局",
  "Tactical": "战术",
  "Operator": "操作员",
  "Minimal": "精简",
  "Density": "密度",
  "Allocation": "分配",
  "Elastic": "自适应",
  "Weighted": "加权",
  "Fade": "渐隐",
  "Outside": "外部",
  "Models": "模型",
  "Proximity": "近距离",
  "All": "全部",
  "Scope": "视窗",
  "Feather": "柔化",
  "Draw": "绘制",
  "Shape": "形状",
  "Area": "区域",
  "Line": "线",
  "Pin": "标记",
  "Primary": "主色",
  "Amber": "琥珀",
  "Cyan": "青色",
  "Green": "绿色",
  "Red": "红色",
  "Clear": "清除",
  "Celestial": "天体",
  "Clean UI": "隐藏界面",
  "Bloom": "辉光",
  "Sharpen": "锐化",

  "DETECT": "检测",
  "SPARSE": "稀疏",
  "BALANCED": "均衡",
  "DENSE": "密集",
  "OFF": "关闭",
  "ON": "开启",

  "CCTV OFF": "监控关闭",
  "CCTV ON": "监控开启",
  "NEAREST": "最近",
  "PREV": "上一个",
  "NEXT": "下一个",
  "FOCUS": "聚焦",
  "COVERAGE OFF": "覆盖关闭",
  "COVERAGE ON": "覆盖开启",
  "AUTO HOP OFF": "自动跳转关闭",
  "AUTO HOP ON": "自动跳转开启",
  "PROJECTION ON": "投影开启",
  "PROJECTION OFF": "投影关闭",
  "CALIBRATION": "校准",
  "ADJUST": "调整",
  "SAVE CAL": "保存校准",
  "RESET CAL": "重置校准",
  "SCENE SUMMARY": "场景摘要",
  "Enable CCTV to load camera intersections": "开启监控后加载摄像头交汇点",
  "Enable CCTV to start camera-linked intelligence summaries.": "开启监控后显示与摄像头关联的态势摘要。",
  "SOURCE · UNKNOWN": "来源 · 未知",

  "NEW": "新建",
  "DEL": "删除",
  "CAPTURE SHOT": "捕获镜头",
  "UPDATE SHOT": "更新镜头",
  "START": "开始",
  "STOP": "停止",
  "EXPORT PRESETS": "导出预设",
  "IMPORT": "导入",
  "RUN LOG": "运行日志",
  "Scene action failed": "场景操作失败",
  "Stopped": "已停止",
  "Stopped (Esc)": "已停止（Esc）",

  "Location not found": "未找到该位置",
  "Search failed": "搜索失败",
  "Fly to a POI first": "请先飞到一个兴趣点",
  "No active landmark to orbit — fly to a landmark first": "当前没有可环绕的地标，请先飞到一个地标。",
  "Reset to full globe view": "重置为完整地球视图",
  "Reset cockpit to full globe view": "将驾驶舱重置为完整地球视图",
  "Resetting to full globe view": "正在重置为完整地球视图",
  "Resetting cockpit to full globe view": "正在将驾驶舱重置为完整地球视图",

  "LOAD COMPLETE": "加载完成",
  "LOAD CANCELLED": "加载已取消",
  "LOAD FAILED": "加载失败",
  "LIVE DATA OFF": "实时数据已关闭",
  "MAPPED SITES LOADED": "地图站点已加载",
  "TURNING OFF LIVE DATA": "正在关闭实时数据",
  "REFRESHING LIVE DATA": "正在刷新实时数据",
  "LOADING LIVE DATA": "正在加载实时数据",
  "RETRYING ALPR CAMERAS": "正在重试 ALPR 摄像头",
  "FETCHING ALPR CAMERAS": "正在获取 ALPR 摄像头",
  "RETRYING MAPPED SITES": "正在重试地图站点",
  "FETCHING MAPPED SITES": "正在获取地图站点",
  "Overpass temporarily unavailable": "Overpass 暂时不可用",
  "retry pending": "等待重试",
  "syncing road network": "正在同步道路网络",

  "TOP SECRET // SI-TK // NOFORN": "绝密 // SI-TK // NOFORN",
  "PAGE 1/1": "第 1/1 页",
  "Awaiting telemetry...": "等待遥测数据…",
  "BAND: PAN": "波段：PAN",
  "BITS: 11": "位深：11",
  "LVL: 1A": "级别：1A",

  "Link copied!": "链接已复制",
  "Copy failed": "复制失败",
  "No place left behind": "无处遗漏",

  "Flights": "民航航班",
  "Military Flights": "军用航空",
  "Military": "军用航空",
  "Satellites": "卫星",
  "Rocket Launches": "火箭发射",
  "Earthquakes": "地震",
  "Street Traffic": "道路交通",
  "Traffic": "道路交通",
  "AIS Live Vessels": "AIS 实时船舶",
  "Vessels": "船舶",
  "Military Installations": "军事设施",
  "Military Awareness": "军事态势",
  "ALPR Cameras": "ALPR 摄像头",
  "Bikeshare": "共享单车",
  "Transit": "公共交通",
  "Directions": "路线规划",
  "Radio": "广播电台",
  "Submarine Cables": "海底光缆",
  "FIRMS Active Fires": "FIRMS 活跃火点",
  "Datacenters": "数据中心",
  "Dams": "水坝"
}));

const ATTRIBUTE_TEXT = new Map(Object.entries({
  "Collapse panel": "收起面板",
  "CCTV feed frame": "监控画面",
  "CCTV camera": "监控摄像头",
  "Scene recipe": "场景方案",
  "HUD layout": "HUD 布局",
  "Detection overlay": "目标检测叠加",
  "Detection label density": "检测标签密度",
  "Detection label allocation": "检测标签分配",
  "Detection fade distance": "检测渐隐距离",
  "Detection opacity outside the keyhole": "视窗外检测透明度",
  "3D model coverage": "3D 模型覆盖范围",
  "Scope edge feather": "视窗边缘柔化",
  "Shape to draw": "绘制形状",
  "Label for the drawn shape": "绘制内容的标签",
  "Colour of the drawn shape": "绘制内容的颜色",
  "Bloom intensity": "辉光强度",
  "Hide UI chrome": "隐藏界面元素",
  "Reset to full globe view": "重置为完整地球视图",
  "Reset cockpit to full globe view": "将驾驶舱重置为完整地球视图",
  "Resetting to full globe view": "正在重置为完整地球视图",
  "Resetting cockpit to full globe view": "正在将驾驶舱重置为完整地球视图",
  "Go to expanded Radio section": "跳转到已展开的广播区域",
  "Expand Radio section in Context": "在态势面板中展开广播区域",
  "Open compact Radio controls": "打开精简广播控制",
  "Close compact Radio controls": "关闭精简广播控制"
}));

const sourceText = new WeakMap();
const renderedText = new WeakMap();
const sourceAttrs = new WeakMap();
const renderedAttrs = new WeakMap();

function replaceRule(trimmed, pattern, replacement) {
  const match = trimmed.match(pattern);
  if (!match) return null;
  return typeof replacement === 'function'
    ? replacement(...match)
    : trimmed.replace(pattern, replacement);
}

function translateString(value) {
  const raw = String(value ?? '');
  const trimmed = raw.trim();
  if (!trimmed) return raw;

  if (TEXT.has(trimmed)) {
    const start = raw.indexOf(trimmed);
    return raw.slice(0, start) + TEXT.get(trimmed) + raw.slice(start + trimmed.length);
  }

  const rules = [
    [/^Expand (.+)$/i, (_all, label) => `展开 ${translateString(label)}`],
    [/^Collapse (.+)$/i, (_all, label) => `收起 ${translateString(label)}`],
    [/^Error:\s*(.+)$/i, (_all, detail) => `错误：${detail}`],
    [/^Loading\s+(.+)$/i, (_all, detail) => `正在加载 ${translateString(detail)}`],
    [/^Searching\s+(.+)$/i, (_all, detail) => `正在搜索 ${detail}`],
    [/^retrying in (\d+)s$/i, (_all, seconds) => `${seconds} 秒后重试`],
    [/^ALPR cameras · retrying in (\d+)s$/i, (_all, seconds) => `ALPR 摄像头 · ${seconds} 秒后重试`],
    [/^ALPR cameras · retry pending$/i, 'ALPR 摄像头 · 等待重试'],
    [/^Scene (\d+)$/i, (_all, number) => `场景 ${number}`],
    [/^Delete scene "(.+)" and all shots\?$/i, (_all, name) => `删除场景“${name}”以及其中全部镜头？`],
    [/^Delete shot "(.+)"\?$/i, (_all, name) => `删除镜头“${name}”？`],
    [/^Detection overlay:\s*(.+)$/i, (_all, mode) => `目标检测叠加：${translateString(String(mode).toUpperCase())}`],
    [/^Unknown map stack:\s*(.+)$/i, (_all, id) => `未知地图组合：${id}`],
    [/^(.+) requires a Cesium ion token$/i, (_all, name) => `${name} 需要 Cesium ion Token`],
    [/^(.+) · (\d+)%$/i, (_all, name, pct) => `${translateString(name)} · ${pct}%`],
    [/^SOURCE · (.+)$/i, (_all, source) => `来源 · ${source}`],
    [/^([A-Z][A-Z0-9 _-]+) OFF$/i, (_all, label) => `${translateString(label)} 关闭`],
    [/^([A-Z][A-Z0-9 _-]+) ON$/i, (_all, label) => `${translateString(label)} 开启`]
  ];

  for (const [pattern, replacement] of rules) {
    const translated = replaceRule(trimmed, pattern, replacement);
    if (translated !== null) return translated;
  }

  return raw;
}

function shouldSkip(node) {
  const parent = node?.parentElement;
  return !parent ||
    parent.closest('script,style,code,pre') ||
    parent.classList.contains('material-symbols-outlined');
}

function translateTextNode(node, lang) {
  if (shouldSkip(node)) return;

  const current = node.nodeValue;
  const lastRendered = renderedText.get(node);
  if (!sourceText.has(node) || (lastRendered !== undefined && current !== lastRendered)) {
    sourceText.set(node, current);
  }

  const source = sourceText.get(node);
  const next = lang === 'zh-CN' ? translateString(source) : source;
  renderedText.set(node, next);
  if (current !== next) node.nodeValue = next;
}

function translateElementAttributes(el, lang) {
  if (!(el instanceof Element)) return;
  const attrs = ['title', 'aria-label', 'placeholder'];

  let stored = sourceAttrs.get(el);
  if (!stored) {
    stored = {};
    sourceAttrs.set(el, stored);
  }
  let rendered = renderedAttrs.get(el);
  if (!rendered) {
    rendered = {};
    renderedAttrs.set(el, rendered);
  }

  for (const name of attrs) {
    if (!el.hasAttribute(name)) continue;
    const current = el.getAttribute(name);
    if (!(name in stored) || (name in rendered && current !== rendered[name])) {
      stored[name] = current;
    }
    const source = stored[name];
    const next = lang === 'zh-CN'
      ? (ATTRIBUTE_TEXT.get(source) || translateString(source))
      : source;
    rendered[name] = next;
    if (next !== null && current !== next) el.setAttribute(name, next);
  }
}

function walk(root, lang) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, lang);
    return;
  }
  if (!(root instanceof Element) && root !== document) return;
  if (root instanceof Element) translateElementAttributes(root, lang);
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  );
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, lang);
    else translateElementAttributes(node, lang);
  }
}

function installLanguageButton(getLanguage, setLanguage) {
  if (document.getElementById('gev-language-toggle')) return;
  const button = document.createElement('button');
  button.id = 'gev-language-toggle';
  button.type = 'button';
  button.addEventListener('click', () => {
    setLanguage(getLanguage() === 'zh-CN' ? 'en' : 'zh-CN');
  });
  document.body.appendChild(button);

  const style = document.createElement('style');
  style.textContent = `
    html[lang="zh-CN"] body,
    html[lang="zh-CN"] button,
    html[lang="zh-CN"] input,
    html[lang="zh-CN"] select,
    html[lang="zh-CN"] textarea {
      font-family: "JetBrains Mono", "Microsoft YaHei UI", "Microsoft YaHei",
        "PingFang SC", "Noto Sans CJK SC", "Noto Sans SC", sans-serif;
    }

    #gev-language-toggle {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 100000;
      border: 1px solid rgba(0, 220, 255, .55);
      background: rgba(2, 17, 25, .88);
      color: #7eeeff;
      border-radius: 8px;
      padding: 8px 11px;
      font: 600 11px/1.1 "JetBrains Mono", "Microsoft YaHei UI", sans-serif;
      letter-spacing: .08em;
      cursor: pointer;
      box-shadow: 0 0 16px rgba(0, 220, 255, .12);
      backdrop-filter: blur(8px);
    }

    #gev-language-toggle:hover {
      border-color: rgba(0, 220, 255, .9);
      background: rgba(3, 27, 38, .96);
    }
  `;
  document.head.appendChild(style);
}

function installDialogTranslations(getLanguage) {
  const nativePrompt = window.prompt.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  const nativeAlert = window.alert.bind(window);

  window.prompt = (message, defaultValue) =>
    nativePrompt(
      getLanguage() === 'zh-CN' ? translateString(message) : message,
      getLanguage() === 'zh-CN' ? translateString(defaultValue) : defaultValue,
    );

  window.confirm = (message) =>
    nativeConfirm(getLanguage() === 'zh-CN' ? translateString(message) : message);

  window.alert = (message) =>
    nativeAlert(getLanguage() === 'zh-CN' ? translateString(message) : message);

  return () => {
    window.prompt = nativePrompt;
    window.confirm = nativeConfirm;
    window.alert = nativeAlert;
  };
}

export function installChineseUi() {
  let language = localStorage.getItem(STORAGE_KEY) || 'zh-CN';
  if (!['zh-CN', 'en'].includes(language)) language = 'zh-CN';

  const setLanguage = (next) => {
    language = next;
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === 'zh-CN' ? 'zh-CN' : 'en';
    walk(document.body, next);
    const button = document.getElementById('gev-language-toggle');
    if (button) {
      button.textContent = next === 'zh-CN' ? 'EN' : '中文';
      button.title = next === 'zh-CN' ? 'Switch to English' : '切换为中文';
      button.setAttribute('aria-label', button.title);
    }
  };

  installLanguageButton(() => language, setLanguage);
  const restoreDialogs = installDialogTranslations(() => language);
  setLanguage(language);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') {
        translateTextNode(mutation.target, language);
        continue;
      }
      if (mutation.type === 'attributes') {
        translateElementAttributes(mutation.target, language);
        continue;
      }
      for (const node of mutation.addedNodes) walk(node, language);
    }
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['title', 'aria-label', 'placeholder'],
  });

  return () => {
    observer.disconnect();
    restoreDialogs();
  };
}
