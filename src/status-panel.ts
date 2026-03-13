import type { NPC, 状态总表 } from './state';

export const STATUS_BAR_START = '<StatusBar>';
export const STATUS_BAR_END = '</StatusBar>';

function 转义HTML(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function 数值条(label: string, current: unknown, max?: unknown, tone: 'hp' | 'sp' | 'morale' | 'fatigue' | 'gold' = 'hp'): string {
  const currentNumber = Number(current ?? 0);
  const maxNumber = Number(max ?? Math.max(currentNumber, 100));
  const safeMax = maxNumber > 0 ? maxNumber : 100;
  const percent = Math.max(0, Math.min(100, Math.round((currentNumber / safeMax) * 100)));
  return `<div class="tk-panel-bar-row"><div class="tk-panel-bar-label">${转义HTML(label)}</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-${tone}" style="width:${percent}%"></span></div><div class="tk-panel-bar-value">${转义HTML(currentNumber)}${max !== undefined ? ` / ${转义HTML(maxNumber)}` : ''}</div></div>`;
}

function 标签(label: string, value: unknown, accent = false): string {
  return `<div class="tk-panel-kv${accent ? ' is-accent' : ''}"><span class="tk-panel-k">${转义HTML(label)}</span><span class="tk-panel-v">${转义HTML(value || '无')}</span></div>`;
}

function 列表项(title: string, meta: string, desc?: string): string {
  return `<div class="tk-panel-list-item"><div class="tk-panel-list-title">${转义HTML(title)}</div><div class="tk-panel-list-meta">${转义HTML(meta)}</div>${desc ? `<div class="tk-panel-list-desc">${转义HTML(desc)}</div>` : ''}</div>`;
}

function 渲染主角页(state: 状态总表): string {
  const player = state.主角;
  const 资源标签 = [
    标签('官职', player.官职 || '无', true),
    标签('爵位', player.爵位 || '无', true),
    标签('声望称号', player._声望称号 || '无'),
    标签('和谐等级', player._和谐等级 || '无'),
    标签('金钱', player.金钱),
    标签('积分', player.积分),
    标签('声望', player.声望),
  ].join('');

  const 六维 = [
    标签('武力', `${player.六维.武力} / ${player.六维._武力加值 ?? 0}`),
    标签('智力', `${player.六维.智力} / ${player.六维._智力加值 ?? 0}`),
    标签('统率', `${player.六维.统率} / ${player.六维._统率加值 ?? 0}`),
    标签('政治', `${player.六维.政治} / ${player.六维._政治加值 ?? 0}`),
    标签('魅力', `${player.六维.魅力} / ${player.六维._魅力加值 ?? 0}`),
    标签('体质', `${player.六维.体质} / ${player.六维._体质加值 ?? 0}`),
  ].join('');

  const 装备列表 = Object.entries(player.装备 || {})
    .map(([slot, item]) => {
      if (!item || item === '无') {
        return 列表项(slot, '未装备');
      }
      return 列表项(`${slot} · ${item.名称}`, `${item.品质} / ${item.类型}`, item.描述 || item.其他效果 || '无');
    })
    .join('');

  return `
    <div class="tk-panel-page-grid cols-2">
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">主角面板</div>
        ${数值条('生命', player.当前生命值, player._生命值上限, 'hp')}
        ${数值条('体力', player.当前体力值, player._体力值上限, 'sp')}
        <div class="tk-panel-inline-note">伤势：${转义HTML(player._伤势 || '完好')}　减值：${转义HTML(player._战斗减值 ?? 0)}</div>
        <div class="tk-panel-kv-grid">${资源标签}</div>
      </section>
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">六维与战斗</div>
        <div class="tk-panel-kv-grid">${六维}</div>
        <div class="tk-panel-kv-grid compact">
          ${标签('先攻', player._先攻值 ?? 0)}
          ${标签('攻击', player._攻击基础值 ?? 0)}
          ${标签('伤害', player._伤害基础值 ?? 0)}
          ${标签('防御DC', player._防御DC ?? 0)}
          ${标签('伤害减免', player._伤害减免 ?? 0)}
        </div>
      </section>
      <section class="tk-panel-card cols-span-2">
        <div class="tk-panel-card-title">装备栏</div>
        <div class="tk-panel-list">${装备列表 || '<div class="tk-panel-empty">暂无装备</div>'}</div>
      </section>
    </div>`;
}

function 渲染NPC详情(id: string, npc: NPC): string {
  const details = [
    标签('阵营', npc.阵营 || '无'),
    标签('定位', npc.定位 || '无'),
    标签('关系', npc._忠诚等级 || npc._好感等级 || npc._交情等级 || npc.好感),
  ].join('');
  return `
    <details class="tk-panel-detail">
      <summary><span>${转义HTML(npc.名称 || id)}</span><span>${转义HTML(npc.品质)} / ${转义HTML(npc.定位 || '未知')}</span></summary>
      <div class="tk-panel-detail-body">
        <div class="tk-panel-kv-grid compact">${details}</div>
        <div class="tk-panel-inline-note">${转义HTML(npc.简述 || '暂无描述')}</div>
      </div>
    </details>`;
}

function 渲染NPC页(state: 状态总表): string {
  const entries = Object.entries(state.NPC || {});
  const list = entries.length > 0 ? entries.map(([id, npc]) => 渲染NPC详情(id, npc)).join('') : '<div class="tk-panel-empty">当前地点暂无关键 NPC</div>';
  return `<section class="tk-panel-card"><div class="tk-panel-card-title">当前地点 NPC</div><div class="tk-panel-detail-list">${list}</div></section>`;
}

function 渲染任务页(state: 状态总表): string {
  const tasks = Object.entries(state.任务 || {});
  const content = tasks.length
    ? tasks.map(([id, task]) => {
        const targets = Object.values(task.目标 || {}).map(target => `${target.类型}:${target.状态}`).join(' / ') || '无目标';
        return 列表项(task.名称 || id, `${task.类型} / ${task.状态}`, `${task.时限 || '无时限'} · ${targets}`);
      }).join('')
    : '<div class="tk-panel-empty">当前没有活跃任务</div>';
  return `<section class="tk-panel-card"><div class="tk-panel-card-title">任务列表</div><div class="tk-panel-list">${content}</div></section>`;
}

function 渲染商城页(state: 状态总表): string {
  const items = Object.entries(state.商城 || {});
  const content = items.length
    ? items.map(([id, item]) => 列表项(item.名称 || id, `${item.分类} / ${item.价格} 积分`, item.描述 || '')).join('')
    : '<div class="tk-panel-empty">当前没有可见商品</div>';
  return `<section class="tk-panel-card"><div class="tk-panel-card-title">商城</div><div class="tk-panel-list">${content}</div></section>`;
}

function 渲染军队页(state: 状态总表): string {
  const armies = Object.entries(state.势力?.军队 || {});
  const content = armies.length
    ? armies.map(([id, army]) => `
      <details class="tk-panel-detail">
        <summary><span>${转义HTML(id)}</span><span>${转义HTML(army.兵种)} / ${转义HTML(army.等级)}</span></summary>
        <div class="tk-panel-detail-body">
          ${数值条('士气', army.士气, 100, 'morale')}
          ${数值条('疲惫', army.疲惫, 100, 'fatigue')}
          <div class="tk-panel-kv-grid compact">
            ${标签('兵力', army.兵力)}
            ${标签('将领', army.统属将领 || '无')}
            ${标签('驻扎地', army.驻扎地 || '无')}
            ${标签('战力', army._综合战力 ?? 0)}
            ${标签('攻击战力', army._攻击战力 ?? 0)}
            ${标签('防御战力', army._防御战力 ?? 0)}
          </div>
        </div>
      </details>`).join('')
    : '<div class="tk-panel-empty">当前没有军队数据</div>';
  return `<section class="tk-panel-card"><div class="tk-panel-card-title">军队</div><div class="tk-panel-detail-list">${content}</div></section>`;
}

function 渲染势力页(state: 状态总表): string {
  const faction = state.势力;
  const diplomacy = Object.entries(faction.外交 || {}).slice(0, 8).map(([name, value]) => 标签(name, `${value} / ${faction._外交等级?.[name] || '未知'}`)).join('');
  const cities = Object.entries(faction.城池 || {}).slice(0, 8).map(([name, city]) => 列表项(name, `${city.等级} / 太守:${city.太守 || '无'}`, `税收:${city._月税收 ?? 0} · 产粮:${city._月产粮 ?? 0}`)).join('');
  return `
    <div class="tk-panel-page-grid cols-2">
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">势力总览</div>
        <div class="tk-panel-kv-grid">
          ${标签('名称', faction.名称 || '无', true)}
          ${标签('规模', faction.规模 || '无', true)}
          ${标签('正统性', faction.正统性)}
          ${标签('情报网', faction.情报网)}
          ${标签('金钱', faction.金钱)}
          ${标签('粮草', faction.粮草)}
          ${标签('总兵力', faction._总兵力 ?? 0)}
          ${标签('总战力', faction._总战力 ?? 0)}
          ${标签('月税收', faction._月总税收 ?? 0)}
          ${标签('月产粮', faction._月总产粮 ?? 0)}
          ${标签('月军饷', faction._月军饷估算 ?? 0)}
          ${标签('月耗粮', faction._月粮草消耗估算 ?? 0)}
        </div>
      </section>
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">外交态势</div>
        <div class="tk-panel-kv-grid compact">${diplomacy || '<div class="tk-panel-empty">暂无外交数据</div>'}</div>
      </section>
      <section class="tk-panel-card cols-span-2">
        <div class="tk-panel-card-title">城池摘要</div>
        <div class="tk-panel-list">${cities || '<div class="tk-panel-empty">暂无城池数据</div>'}</div>
      </section>
    </div>`;
}

function 样式(ids: Record<string, string>): string {
  return `<style>
.tk-statusbar{margin-top:14px;border:1px solid rgba(196,154,92,.45);border-radius:14px;overflow:hidden;background:linear-gradient(180deg,rgba(37,24,17,.96),rgba(15,12,10,.96));box-shadow:0 12px 32px rgba(0,0,0,.35);color:#f3e3c3;font-family:"Microsoft YaHei",serif}
.tk-statusbar *{box-sizing:border-box}
.tk-statusbar .tk-panel-shell{position:relative}
.tk-statusbar .tk-panel-head{padding:14px 16px;border-bottom:1px solid rgba(196,154,92,.28);background:linear-gradient(180deg,rgba(122,63,30,.35),rgba(54,30,18,.15))}
.tk-statusbar .tk-panel-title{font-size:18px;font-weight:700;letter-spacing:2px;color:#f6d9a2}
.tk-statusbar .tk-panel-subtitle{margin-top:6px;font-size:12px;color:#d8bf93;display:flex;flex-wrap:wrap;gap:10px}
.tk-statusbar .tk-panel-tabs{display:flex;flex-wrap:wrap;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(196,154,92,.22);background:rgba(255,255,255,.02)}
.tk-statusbar .tk-panel-tab-input{display:none}
.tk-statusbar .tk-panel-tab-label{padding:8px 14px;border:1px solid rgba(196,154,92,.28);border-radius:999px;background:rgba(255,255,255,.04);color:#dcc59c;cursor:pointer;transition:.2s;font-size:12px}
.tk-statusbar .tk-panel-tab-label:hover{background:rgba(196,154,92,.12);color:#fff1d0}
.tk-statusbar .tk-panel-pages{padding:14px}
.tk-statusbar .tk-panel-page{display:none}
.tk-statusbar #${ids.hero}:checked~.tk-panel-tabs label[for="${ids.hero}"],.tk-statusbar #${ids.npc}:checked~.tk-panel-tabs label[for="${ids.npc}"],.tk-statusbar #${ids.quest}:checked~.tk-panel-tabs label[for="${ids.quest}"],.tk-statusbar #${ids.shop}:checked~.tk-panel-tabs label[for="${ids.shop}"],.tk-statusbar #${ids.army}:checked~.tk-panel-tabs label[for="${ids.army}"],.tk-statusbar #${ids.faction}:checked~.tk-panel-tabs label[for="${ids.faction}"]{background:linear-gradient(180deg,#a76b2e,#7a4a1f);color:#fff5e6;border-color:rgba(255,216,158,.8);box-shadow:0 0 0 1px rgba(255,240,212,.12) inset}
.tk-statusbar #${ids.hero}:checked~.tk-panel-pages .is-hero,.tk-statusbar #${ids.npc}:checked~.tk-panel-pages .is-npc,.tk-statusbar #${ids.quest}:checked~.tk-panel-pages .is-quest,.tk-statusbar #${ids.shop}:checked~.tk-panel-pages .is-shop,.tk-statusbar #${ids.army}:checked~.tk-panel-pages .is-army,.tk-statusbar #${ids.faction}:checked~.tk-panel-pages .is-faction{display:block}
.tk-statusbar .tk-panel-page-grid{display:grid;gap:12px}.tk-statusbar .tk-panel-page-grid.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.tk-statusbar .cols-span-2{grid-column:span 2}
.tk-statusbar .tk-panel-card{padding:14px;border:1px solid rgba(196,154,92,.22);border-radius:12px;background:rgba(255,248,232,.03)}
.tk-statusbar .tk-panel-card-title{margin-bottom:10px;font-size:13px;font-weight:700;color:#f0c983;letter-spacing:1px}
.tk-statusbar .tk-panel-kv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:repeat(3,minmax(0,1fr))}
.tk-statusbar .tk-panel-kv{padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}
.tk-statusbar .tk-panel-kv.is-accent{background:rgba(167,107,46,.18);border-color:rgba(240,201,131,.26)}
.tk-statusbar .tk-panel-k{display:block;font-size:11px;color:#cba977}.tk-statusbar .tk-panel-v{display:block;margin-top:4px;font-size:13px;color:#fff1d0}
.tk-statusbar .tk-panel-inline-note{margin-top:10px;font-size:12px;color:#d6c4a4}
.tk-statusbar .tk-panel-list,.tk-statusbar .tk-panel-detail-list{display:flex;flex-direction:column;gap:8px}
.tk-statusbar .tk-panel-list-item{padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}
.tk-statusbar .tk-panel-list-title{font-size:13px;font-weight:700;color:#f6dfb5}.tk-statusbar .tk-panel-list-meta{margin-top:4px;font-size:11px;color:#d6bb91}.tk-statusbar .tk-panel-list-desc{margin-top:6px;font-size:12px;color:#f2eadc;opacity:.88}
.tk-statusbar .tk-panel-detail{border:1px solid rgba(255,255,255,.06);border-radius:10px;background:rgba(255,255,255,.03);overflow:hidden}
.tk-statusbar .tk-panel-detail summary{display:flex;justify-content:space-between;gap:12px;cursor:pointer;list-style:none;padding:10px 12px;color:#f6dfb5;font-size:13px}.tk-statusbar .tk-panel-detail summary::-webkit-details-marker{display:none}
.tk-statusbar .tk-panel-detail-body{padding:0 12px 12px}
.tk-statusbar .tk-panel-empty{padding:18px 12px;text-align:center;color:#bda681;font-size:12px}
.tk-statusbar .tk-panel-bar-row{display:grid;grid-template-columns:56px 1fr auto;gap:8px;align-items:center;margin-bottom:8px}
.tk-statusbar .tk-panel-bar-label,.tk-statusbar .tk-panel-bar-value{font-size:11px;color:#d8bf93}.tk-statusbar .tk-panel-bar{height:9px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}
.tk-statusbar .tk-panel-bar-fill{display:block;height:100%}.tk-statusbar .tk-panel-bar-fill.is-hp{background:linear-gradient(90deg,#7f1d1d,#dc2626)}.tk-statusbar .tk-panel-bar-fill.is-sp{background:linear-gradient(90deg,#0f3d73,#3b82f6)}.tk-statusbar .tk-panel-bar-fill.is-morale{background:linear-gradient(90deg,#7c5c12,#f59e0b)}.tk-statusbar .tk-panel-bar-fill.is-fatigue{background:linear-gradient(90deg,#3f3f46,#a1a1aa)}.tk-statusbar .tk-panel-bar-fill.is-gold{background:linear-gradient(90deg,#8b5e00,#facc15)}
@media (max-width:720px){.tk-statusbar .tk-panel-page-grid.cols-2,.tk-statusbar .tk-panel-kv-grid,.tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:1fr}.tk-statusbar .cols-span-2{grid-column:span 1}}
</style>`;
}

export function stripStatusBar(content: string): string {
  return String(content || '').replace(/\s*<StatusBar>[\s\S]*?<\/StatusBar>\s*$/i, '').trim();
}

export function buildStatusBar(state: 状态总表, messageId?: number): string {
  const header = `${转义HTML(state.世界.当前时间 || '未知时刻')} · ${转义HTML(state.世界.当前地点 || '未知地点')} · ${转义HTML(state.世界.天气 || '未知天气')} · ${转义HTML(state.世界.当前剧本 || '未知剧本')}`;
  const suffix = String(messageId ?? 'latest');
  const group = `tk-panel-tab-${suffix}`;
  const ids = {
    hero: `tk-tab-hero-${suffix}`,
    npc: `tk-tab-npc-${suffix}`,
    quest: `tk-tab-quest-${suffix}`,
    shop: `tk-tab-shop-${suffix}`,
    army: `tk-tab-army-${suffix}`,
    faction: `tk-tab-faction-${suffix}`,
  };
  return `${STATUS_BAR_START}<div class="tk-statusbar"><div class="tk-panel-shell">${样式(ids)}<input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.hero}" checked><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.npc}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.quest}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.shop}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.army}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.faction}"><div class="tk-panel-head"><div class="tk-panel-title">三国霸主 · 系统面板</div><div class="tk-panel-subtitle"><span>${header}</span></div></div><div class="tk-panel-tabs"><label class="tk-panel-tab-label" for="${ids.hero}">主角</label><label class="tk-panel-tab-label" for="${ids.npc}">当前地点NPC</label><label class="tk-panel-tab-label" for="${ids.quest}">任务</label><label class="tk-panel-tab-label" for="${ids.shop}">商城</label><label class="tk-panel-tab-label" for="${ids.army}">军队</label><label class="tk-panel-tab-label" for="${ids.faction}">势力</label></div><div class="tk-panel-pages"><div class="tk-panel-page is-hero">${渲染主角页(state)}</div><div class="tk-panel-page is-npc">${渲染NPC页(state)}</div><div class="tk-panel-page is-quest">${渲染任务页(state)}</div><div class="tk-panel-page is-shop">${渲染商城页(state)}</div><div class="tk-panel-page is-army">${渲染军队页(state)}</div><div class="tk-panel-page is-faction">${渲染势力页(state)}</div></div></div></div>${STATUS_BAR_END}`;
}

export function appendStatusBar(content: string, state: 状态总表, messageId?: number): string {
  const cleaned = stripStatusBar(content);
  return `${cleaned}\n\n${buildStatusBar(state, messageId)}`.trim();
}
