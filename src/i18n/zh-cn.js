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
  "Ready": "就绪",
  "Link copied!": "链接已复制",
  "Copy failed": "复制失败",
  "No place left behind": "无处遗漏",
  "SUMMARY": "摘要"
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
  "Hide UI chrome": "隐藏界面元素"
}));

const originalText = new WeakMap();
const originalAttrs = new WeakMap();

function translateString(value) {
  const raw = String(value ?? '');
  const trimmed = raw.trim();
  if (!trimmed) return raw;
  if (TEXT.has(trimmed)) {
    const prefix = raw.slice(0, raw.indexOf(trimmed));
    const suffix = raw.slice(raw.indexOf(trimmed) + trimmed.length);
    return prefix + TEXT.get(trimmed) + suffix;
  }

  const rules = [
    [/^Expand (.+)$/i, '展开 $1'],
    [/^Collapse (.+)$/i, '收起 $1'],
    [/^Error:\s*(.+)$/i, '错误：$1'],
    [/^Loading\s*(.*)$/i, '正在加载 $1'],
    [/^Searching\s*(.*)$/i, '正在搜索 $1']
  ];
  for (const [pattern, replacement] of rules) {
    if (pattern.test(trimmed)) return trimmed.replace(pattern, replacement);
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
  if (!originalText.has(node)) originalText.set(node, node.nodeValue);
  const source = originalText.get(node);
  const next = lang === 'zh-CN' ? translateString(source) : source;
  if (node.nodeValue !== next) node.nodeValue = next;
}

function translateElementAttributes(el, lang) {
  if (!(el instanceof Element)) return;
  const attrs = ['title', 'aria-label', 'placeholder'];
  let stored = originalAttrs.get(el);
  if (!stored) {
    stored = {};
    originalAttrs.set(el, stored);
  }
  for (const name of attrs) {
    if (!el.hasAttribute(name)) continue;
    if (!(name in stored)) stored[name] = el.getAttribute(name);
    const source = stored[name];
    const next = lang === 'zh-CN'
      ? (ATTRIBUTE_TEXT.get(source) || translateString(source))
      : source;
    if (next !== null && el.getAttribute(name) !== next) el.setAttribute(name, next);
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
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
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
      font: 600 11px/1.1 "JetBrains Mono", monospace;
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
  setLanguage(language);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') {
        translateTextNode(mutation.target, language);
        continue;
      }
      for (const node of mutation.addedNodes) walk(node, language);
    }
  });
  observer.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: false
  });

  return () => observer.disconnect();
}
