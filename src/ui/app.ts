import { createApp, type App as VueApp } from 'vue';
import { getHostDocument } from '../dom-host';
import SystemUiRoot from './SystemUiRoot.vue';

const ROOT_ID = 'tk-vue-root';
const STYLE_ID = 'tk-vue-root-style';
const STYLE_TEXT = `#tk-vue-root{position:fixed;inset:0;z-index:2147483200;font-family:"Microsoft YaHei",serif;pointer-events:none}#tk-vue-root *{box-sizing:border-box}#tk-vue-root .tk-vue-panel-shell{position:fixed;width:min(1080px,calc(100vw - 24px));border:1px solid rgba(196,154,92,.36);border-radius:18px;background:linear-gradient(180deg,rgba(41,25,17,.96),rgba(12,10,10,.98));box-shadow:0 16px 36px rgba(0,0,0,.35);overflow:hidden;color:#f3e3c3;pointer-events:auto}#tk-vue-root .tk-vue-floating-options{position:fixed;width:min(420px,calc(100vw - 24px));border:1px solid rgba(196,154,92,.36);border-radius:18px;background:linear-gradient(180deg,rgba(41,25,17,.96),rgba(12,10,10,.98));box-shadow:0 16px 36px rgba(0,0,0,.35);overflow:hidden;color:#f3e3c3;pointer-events:auto}#tk-vue-root .tk-vue-panel-shell.is-hidden,#tk-vue-root .tk-vue-floating-options.is-hidden{display:none}#tk-vue-root .tk-vue-panel-head,#tk-vue-root .tk-vue-floating-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(196,154,92,.22);background:rgba(255,255,255,.03);cursor:move}#tk-vue-root .tk-vue-panel-title{font-size:18px;font-weight:700;color:#f6d9a2;letter-spacing:1px}#tk-vue-root .tk-vue-panel-subtitle{margin-top:4px;font-size:12px;color:#cfb78d}#tk-vue-root .tk-vue-head-btn{appearance:none;border:1px solid rgba(220,181,119,.28);border-radius:999px;padding:6px 10px;background:rgba(255,255,255,.04);color:#dcc59c;cursor:pointer;font-size:12px}#tk-vue-root .tk-vue-panel-content{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;padding:14px}#tk-vue-root .tk-vue-panel-content.is-system-panel{grid-template-columns:minmax(0,1fr)}#tk-vue-root .tk-vue-card{border:1px solid rgba(196,154,92,.22);border-radius:14px;background:rgba(255,248,232,.03);padding:14px}#tk-vue-root .tk-vue-card-title{margin-bottom:10px;font-size:13px;font-weight:700;color:#f0c983;letter-spacing:1px}#tk-vue-root .tk-vue-options-list{display:flex;flex-direction:column;gap:10px}#tk-vue-root .tk-vue-option-btn{appearance:none;border:1px solid rgba(220,181,119,.34);border-radius:12px;padding:10px 12px;background:linear-gradient(180deg,rgba(123,77,38,.42),rgba(74,45,24,.36));color:#fff0d0;cursor:pointer;font-size:13px;line-height:1.45;text-align:left;transition:.18s box-shadow,.18s transform,.18s background,.18s border-color}#tk-vue-root .tk-vue-option-btn:hover{transform:translateY(-1px);background:linear-gradient(180deg,rgba(149,96,47,.56),rgba(88,53,28,.46));border-color:rgba(255,222,160,.68);box-shadow:0 8px 18px rgba(0,0,0,.18)}#tk-vue-root .tk-vue-empty{padding:14px;color:#bda681;font-size:12px;text-align:center}#tk-vue-root .tk-statusbar{margin-top:0;border:1px solid rgba(196,154,92,.45);border-radius:14px;overflow:hidden;background:linear-gradient(180deg,rgba(37,24,17,.96),rgba(15,12,10,.96));box-shadow:0 12px 32px rgba(0,0,0,.35);color:#f3e3c3;font-family:"Microsoft YaHei",serif}#tk-vue-root .tk-statusbar *{box-sizing:border-box}#tk-vue-root .tk-statusbar .tk-panel-shell{position:relative}#tk-vue-root .tk-statusbar .tk-panel-head{padding:14px 16px;border-bottom:1px solid rgba(196,154,92,.28);background:linear-gradient(180deg,rgba(122,63,30,.35),rgba(54,30,18,.15))}#tk-vue-root .tk-statusbar .tk-panel-title{font-size:18px;font-weight:700;letter-spacing:2px;color:#f6d9a2}#tk-vue-root .tk-statusbar .tk-panel-subtitle{margin-top:6px;font-size:12px;color:#d8bf93;display:flex;flex-wrap:wrap;gap:10px}#tk-vue-root .tk-statusbar .tk-panel-tabs{display:flex;flex-wrap:wrap;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(196,154,92,.22);background:rgba(255,255,255,.02)}#tk-vue-root .tk-statusbar .tk-panel-tab-label{padding:8px 14px;border:1px solid rgba(196,154,92,.28);border-radius:999px;background:rgba(255,255,255,.04);color:#dcc59c;cursor:pointer;transition:.2s;font-size:12px}#tk-vue-root .tk-statusbar .tk-panel-tab-label:hover,#tk-vue-root .tk-statusbar .tk-panel-tab-label.is-active{background:linear-gradient(180deg,#a76b2e,#7a4a1f);color:#fff5e6;border-color:rgba(255,216,158,.8);box-shadow:0 0 0 1px rgba(255,240,212,.12) inset}#tk-vue-root .tk-statusbar .tk-panel-pages{padding:14px}#tk-vue-root .tk-statusbar .tk-panel-page-grid{display:grid;gap:12px}#tk-vue-root .tk-statusbar .tk-panel-page-grid.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}#tk-vue-root .tk-statusbar .tk-subtabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}#tk-vue-root .tk-statusbar .tk-subtab-label{padding:6px 12px;border:1px solid rgba(196,154,92,.22);border-radius:999px;background:rgba(255,255,255,.03);color:#d6bb91;cursor:pointer;font-size:12px;transition:.2s}#tk-vue-root .tk-statusbar .tk-subtab-label:hover,#tk-vue-root .tk-statusbar .tk-subtab-label.is-active{background:linear-gradient(180deg,#8d5a27,#653717);color:#fff5e6;border-color:rgba(255,216,158,.72)}#tk-vue-root .tk-statusbar .cols-span-2{grid-column:span 2}#tk-vue-root .tk-statusbar .tk-panel-card{padding:14px;border:1px solid rgba(196,154,92,.22);border-radius:12px;background:rgba(255,248,232,.03)}#tk-vue-root .tk-statusbar .tk-panel-card-title{margin-bottom:10px;font-size:13px;font-weight:700;color:#f0c983;letter-spacing:1px}#tk-vue-root .tk-statusbar .tk-panel-kv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}#tk-vue-root .tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:repeat(3,minmax(0,1fr))}#tk-vue-root .tk-statusbar .tk-panel-kv{padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}#tk-vue-root .tk-statusbar .tk-panel-kv.is-accent{background:rgba(167,107,46,.18);border-color:rgba(240,201,131,.26)}#tk-vue-root .tk-statusbar .tk-panel-k{display:block;font-size:11px;color:#cba977}#tk-vue-root .tk-statusbar .tk-panel-v{display:block;margin-top:4px;font-size:13px;color:#fff1d0}#tk-vue-root .tk-statusbar .tk-panel-inline-note{margin-top:10px;font-size:12px;color:#d6c4a4}#tk-vue-root .tk-statusbar .tk-panel-list,#tk-vue-root .tk-statusbar .tk-panel-detail-list{display:flex;flex-direction:column;gap:8px}#tk-vue-root .tk-statusbar .tk-panel-list-item{padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}#tk-vue-root .tk-statusbar .tk-panel-list-title{font-size:13px;font-weight:700;color:#f6dfb5}#tk-vue-root .tk-statusbar .tk-panel-list-meta{margin-top:4px;font-size:11px;color:#d6bb91}#tk-vue-root .tk-statusbar .tk-panel-list-desc{margin-top:6px;font-size:12px;color:#f2eadc;opacity:.88;white-space:pre-line}#tk-vue-root .tk-statusbar .tk-panel-detail{border:1px solid rgba(255,255,255,.06);border-radius:10px;background:rgba(255,255,255,.03);overflow:hidden}#tk-vue-root .tk-statusbar .tk-panel-detail summary{display:flex;justify-content:space-between;gap:12px;cursor:pointer;list-style:none;padding:10px 12px;color:#f6dfb5;font-size:13px}#tk-vue-root .tk-statusbar .tk-panel-detail summary::-webkit-details-marker{display:none}#tk-vue-root .tk-statusbar .tk-panel-detail-body{padding:0 12px 12px}#tk-vue-root .tk-statusbar .tk-panel-empty{padding:18px 12px;text-align:center;color:#bda681;font-size:12px}#tk-vue-root .tk-statusbar .tk-radar-wrap{display:block;margin-bottom:12px}#tk-vue-root .tk-statusbar .tk-radar{width:220px;height:220px;display:block;margin:0 auto}#tk-vue-root .tk-statusbar .tk-radar-ring,#tk-vue-root .tk-statusbar .tk-radar-axis{fill:none;stroke:rgba(240,201,131,.18);stroke-width:1}#tk-vue-root .tk-statusbar .tk-radar-shape{fill:rgba(167,107,46,.28);stroke:#f0c983;stroke-width:2}#tk-vue-root .tk-statusbar .tk-radar-dot{fill:#f6dfb5}#tk-vue-root .tk-statusbar .tk-radar-label{fill:#d8bf93;font-size:11px}#tk-vue-root .tk-statusbar .tk-panel-bar-row{display:grid;grid-template-columns:56px 1fr auto;gap:8px;align-items:center;margin-bottom:8px}#tk-vue-root .tk-statusbar .tk-panel-bar-label,#tk-vue-root .tk-statusbar .tk-panel-bar-value{font-size:11px;color:#d8bf93}#tk-vue-root .tk-statusbar .tk-panel-bar{height:9px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}#tk-vue-root .tk-statusbar .tk-panel-bar-fill{display:block;height:100%}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-hp{background:linear-gradient(90deg,#7f1d1d,#dc2626)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-sp{background:linear-gradient(90deg,#0f3d73,#3b82f6)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-morale{background:linear-gradient(90deg,#7c5c12,#f59e0b)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-fatigue{background:linear-gradient(90deg,#3f3f46,#a1a1aa)}@media (max-width:900px){#tk-vue-root .tk-vue-panel-content{grid-template-columns:1fr}}@media (max-width:720px){#tk-vue-root .tk-statusbar .tk-panel-page-grid.cols-2,#tk-vue-root .tk-statusbar .tk-panel-kv-grid,#tk-vue-root .tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:1fr}#tk-vue-root .tk-statusbar .cols-span-2{grid-column:span 1}#tk-vue-root .tk-statusbar .tk-radar{width:180px;height:180px}}`;

let app: VueApp<Element> | null = null;

function ensureStyle(hostDocument: Document): void {
  let style = hostDocument.getElementById(STYLE_ID);
  if (!(style instanceof HTMLStyleElement)) {
    style = hostDocument.createElement('style');
    style.id = STYLE_ID;
    hostDocument.head.appendChild(style);
  }
  if (style.textContent !== STYLE_TEXT) {
    style.textContent = STYLE_TEXT;
  }
}

function ensureRoot(): HTMLElement | null {
  let hostDocument: Document;
  try {
    hostDocument = getHostDocument();
  } catch {
    return null;
  }
  ensureStyle(hostDocument);
  let root = hostDocument.getElementById(ROOT_ID);
  if (root instanceof HTMLElement) {
    return root;
  }
  root = hostDocument.createElement('div');
  root.id = ROOT_ID;
  hostDocument.body.appendChild(root);
  return root;
}

export function mountUnifiedPanelApp(): boolean {
  if (app) {
    return true;
  }
  const root = ensureRoot();
  if (!root) {
    return false;
  }
  app = createApp(SystemUiRoot);
  app.mount(root);
  return true;
}

export function unmountUnifiedPanelApp(): void {
  if (!app) {
    return;
  }
  app.unmount();
  app = null;
  try {
    const hostDocument = getHostDocument();
    hostDocument.getElementById(ROOT_ID)?.remove();
    hostDocument.getElementById(STYLE_ID)?.remove();
  } catch {}
}
