import type { NPC, 势力, 状态总表 } from './state';

export const STATUS_BAR_START = '<StatusBar>';
export const STATUS_BAR_END = '</StatusBar>';

const 商城分类标签 = ['装备', '技能书', '消耗品', '资源', '限时稀有'] as const;

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

function 折叠栏(title: string, count: number, content: string): string {
  return `<section class="tk-panel-card cols-span-2"><details class="tk-panel-detail tk-panel-equip-detail"><summary><span>${转义HTML(title)}</span><span>${转义HTML(count)} 项</span></summary><div class="tk-panel-detail-body"><div class="tk-panel-list">${content}</div></div></details></section>`;
}

function 渲染二级分页(group: string, tabs: Array<{ key: string; label: string; content: string }>): string {
  if (tabs.length === 0) {
    return '<div class="tk-panel-empty">暂无内容</div>';
  }
  const ids = tabs.map(tab => ({
    ...tab,
    inputId: `${group}-${tab.key}`,
    pageClass: `is-${group}-${tab.key}`,
  }));
  const activeRules = ids.map(tab => `#${tab.inputId}:checked~.tk-subtabs label[for="${tab.inputId}"]{background:linear-gradient(180deg,#8d5a27,#653717);color:#fff5e6;border-color:rgba(255,216,158,.72)}#${tab.inputId}:checked~.tk-subpages .${tab.pageClass}{display:block}`).join('');
  return `<div class="tk-subtab-shell"><style>${activeRules}</style>${ids.map((tab, index) => `<input class="tk-subtab-input" type="radio" name="${group}" id="${tab.inputId}"${index === 0 ? ' checked' : ''}>`).join('')}<div class="tk-subtabs">${ids.map(tab => `<label class="tk-subtab-label" for="${tab.inputId}">${转义HTML(tab.label)}</label>`).join('')}</div><div class="tk-subpages">${ids.map(tab => `<div class="tk-subpage ${tab.pageClass}">${tab.content}</div>`).join('')}</div></div>`;
}

function 雷达点(cx: number, cy: number, radius: number, angle: number): string {
  const x = cx + Math.cos(angle) * radius;
  const y = cy + Math.sin(angle) * radius;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

function 渲染六维雷达图(stats: 状态总表['主角']['六维']): string {
  const labels = [
    { key: '武力', value: stats.武力, bonus: stats._武力加值 ?? 0 },
    { key: '智力', value: stats.智力, bonus: stats._智力加值 ?? 0 },
    { key: '统率', value: stats.统率, bonus: stats._统率加值 ?? 0 },
    { key: '政治', value: stats.政治, bonus: stats._政治加值 ?? 0 },
    { key: '魅力', value: stats.魅力, bonus: stats._魅力加值 ?? 0 },
    { key: '体质', value: stats.体质, bonus: stats._体质加值 ?? 0 },
  ];
  const cx = 110;
  const cy = 110;
  const maxRadius = 72;
  const maxValue = 120;
  const angles = labels.map((_, index) => (-Math.PI / 2) + (Math.PI * 2 * index) / labels.length);
  const rings = [0.25, 0.5, 0.75, 1].map(scale => `<polygon class="tk-radar-ring" points="${angles.map(angle => 雷达点(cx, cy, maxRadius * scale, angle)).join(' ')}"></polygon>`).join('');
  const axes = angles.map(angle => `<line class="tk-radar-axis" x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(angle) * maxRadius).toFixed(1)}" y2="${(cy + Math.sin(angle) * maxRadius).toFixed(1)}"></line>`).join('');
  const polygon = `<polygon class="tk-radar-shape" points="${labels.map((item, index) => 雷达点(cx, cy, maxRadius * Math.max(0, Math.min(1, item.value / maxValue)), angles[index])).join(' ')}"></polygon>`;
  const dots = labels.map((item, index) => {
    const [x, y] = 雷达点(cx, cy, maxRadius * Math.max(0, Math.min(1, item.value / maxValue)), angles[index]).split(',');
    return `<circle class="tk-radar-dot" cx="${x}" cy="${y}" r="3"></circle>`;
  }).join('');
  const axisLabels = labels.map((item, index) => {
    const [x, y] = 雷达点(cx, cy, maxRadius + 28, angles[index]).split(',');
    return `<text class="tk-radar-label" x="${x}" y="${y}" text-anchor="middle"><tspan x="${x}" dy="0">${转义HTML(item.key)}</tspan><tspan x="${x}" dy="13">${转义HTML(`${item.value}/${item.bonus}`)}</tspan></text>`;
  }).join('');
  return `<div class="tk-radar-wrap"><svg class="tk-radar" viewBox="0 0 220 220" role="img" aria-label="主角六维雷达图">${rings}${axes}${polygon}${dots}${axisLabels}</svg></div>`;
}

function 渲染主角页(state: 状态总表, suffix: string): string {
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
  const 六维雷达图 = 渲染六维雷达图(player.六维);
  const 装备项列表 = Object.entries(player.装备 || {});
  const 武技项列表 = Object.entries(player.武技 || {});
  const 专长项列表 = Object.entries(player.专长 || {});
  const 背包项列表 = Object.entries(player.物品栏 || {});
  const 后宫项列表 = Object.entries(state.NPC || {}).filter(([, npc]) => Boolean(npc.美人属性));
  const 武将项列表 = Object.entries(state.NPC || {}).filter(([, npc]) => Boolean(npc.武将信息));

  return 渲染二级分页(`hero-sub-${suffix}`, [
    {
      key: 'attrs',
      label: '属性',
      content: `<div class="tk-panel-page-grid cols-2"><section class="tk-panel-card"><div class="tk-panel-card-title">主角面板</div>${数值条('生命', player.当前生命值, player._生命值上限, 'hp')}${数值条('体力', player.当前体力值, player._体力值上限, 'sp')}<div class="tk-panel-inline-note">伤势：${转义HTML(player._伤势 || '完好')}　减值：${转义HTML(player._战斗减值 ?? 0)}</div><div class="tk-panel-kv-grid">${资源标签}</div></section><section class="tk-panel-card"><div class="tk-panel-card-title">六维与战斗</div>${六维雷达图}<div class="tk-panel-kv-grid compact">${标签('先攻', player._先攻值 ?? 0)}${标签('攻击', player._攻击基础值 ?? 0)}${标签('伤害', player._伤害基础值 ?? 0)}${标签('防御DC', player._防御DC ?? 0)}${标签('伤害减免', player._伤害减免 ?? 0)}</div></section></div>`,
    },
    {
      key: 'equip',
      label: '装备',
      content: `<section class="tk-panel-card"><div class="tk-panel-card-title">装备栏</div><div class="tk-panel-list">${装备项列表.map(([slot, item]) => !item || item === '无' ? 列表项(slot, '未装备') : 列表项(`${slot} · ${item.名称}`, `${item.品质} / ${item.类型}`, item.描述 || item.其他效果 || '无')).join('') || '<div class="tk-panel-empty">暂无装备</div>'}</div></section>`,
    },
    {
      key: 'bag',
      label: '背包',
      content: `<section class="tk-panel-card"><div class="tk-panel-card-title">背包</div><div class="tk-panel-list">${背包项列表.map(([id, item]) => 列表项(id, `${item.品质} / 数量:${item.数量}`, item.描述 || '无')).join('') || '<div class="tk-panel-empty">暂无物品</div>'}</div></section>`,
    },
    {
      key: 'skills',
      label: '武技',
      content: `<section class="tk-panel-card"><div class="tk-panel-card-title">武技栏</div><div class="tk-panel-list">${武技项列表.map(([id, skill]) => 列表项(skill.名称 || id, `${skill.等级} / ${skill.类型}`, `熟练度：${skill.熟练度 ?? 0}　体力消耗：${skill.体力消耗 ?? 0}${skill.效果 ? `\n${skill.效果}` : ''}`)).join('') || '<div class="tk-panel-empty">暂无武技</div>'}</div></section>`,
    },
    {
      key: 'perks',
      label: '专长',
      content: `<section class="tk-panel-card"><div class="tk-panel-card-title">专长栏</div><div class="tk-panel-list">${专长项列表.map(([id, perk]) => 列表项(perk.名称 || id, perk.等级 || '未定级', perk.效果 || '无')).join('') || '<div class="tk-panel-empty">暂无专长</div>'}</div></section>`,
    },
    {
      key: 'consorts',
      label: '后宫',
      content: `<section class="tk-panel-card"><div class="tk-panel-card-title">后宫列表</div><div class="tk-panel-list">${后宫项列表.map(([id, npc]) => 列表项(npc.名称 || id, `${npc.美人属性?.位份 || '未纳入'} / ${npc.美人属性?._依赖等级 || npc.美人属性?.依赖度 || 0}`, `${npc.美人属性?.当前状态 || '正常'} · ${npc.简述 || '无'}`)).join('') || '<div class="tk-panel-empty">暂无后宫成员</div>'}</div></section>`,
    },
    {
      key: 'generals',
      label: '武将',
      content: `<section class="tk-panel-card"><div class="tk-panel-card-title">已招募武将</div><div class="tk-panel-list">${武将项列表.map(([id, npc]) => 列表项(npc.名称 || id, `${npc.武将信息?.官职 || '无官职'} / ${npc.武将信息?.当前状态 || '待命'}`, `${npc.武将信息?.驻扎地 || '无驻地'} · ${npc.简述 || '无'}`)).join('') || '<div class="tk-panel-empty">暂无已招募武将</div>'}</div></section>`,
    },
  ]);
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

function 渲染任务页(state: 状态总表, suffix: string): string {
  const tasks = Object.entries(state.任务 || {});
  const typeTabs = [...new Set(tasks.map(([, task]) => task.类型))];
  if (typeTabs.length === 0) {
    return `<section class="tk-panel-card"><div class="tk-panel-card-title">任务列表</div><div class="tk-panel-empty">当前没有活跃任务</div></section>`;
  }
  return 渲染二级分页(`quest-sub-${suffix}`, typeTabs.map(type => ({
    key: type,
    label: type,
    content: `<section class="tk-panel-card"><div class="tk-panel-card-title">${转义HTML(type)}任务</div><div class="tk-panel-detail-list">${tasks.filter(([, task]) => task.类型 === type).map(([id, task]) => {
      const targets = Object.entries(task.目标 || {});
      const targetContent = targets.length
        ? targets.map(([targetId, target]) => `<div class="tk-panel-list-item"><div class="tk-panel-list-title">${转义HTML(target.描述 || targetId)}</div><div class="tk-panel-list-meta">${转义HTML(target.类型)} / ${转义HTML(target.状态)}</div><div class="tk-panel-list-desc">${转义HTML(`积分：${target.积分 ?? 0}　其他奖励：${target.其他奖励 || '无'}`)}</div></div>`).join('')
        : '<div class="tk-panel-empty">暂无任务目标</div>';
      return `<details class="tk-panel-detail"><summary><span>${转义HTML(task.名称 || id)}</span><span>${转义HTML(task.类型)} / ${转义HTML(task.状态)}</span></summary><div class="tk-panel-detail-body"><div class="tk-panel-inline-note">时限：${转义HTML(task.时限 || '无时限')}</div><div class="tk-panel-list">${targetContent}</div></div></details>`;
    }).join('')}</div></section>`,
  })));
}

function 渲染商城页(state: 状态总表, suffix: string): string {
  const items = Object.entries(state.商城 || {});
  const typeTabs = [...new Set(items.map(([, item]) => item.分类))];
  if (typeTabs.length === 0) {
    return `<section class="tk-panel-card"><div class="tk-panel-card-title">商城</div><div class="tk-panel-empty">当前没有可见商品</div></section>`;
  }
  return 渲染二级分页(`shop-sub-${suffix}`, typeTabs.map(type => ({
    key: type,
    label: type,
    content: `<section class="tk-panel-card"><div class="tk-panel-card-title">${转义HTML(type)}</div><div class="tk-panel-list">${items.filter(([, item]) => item.分类 === type).map(([id, item]) => 列表项(item.名称 || id, `${item.分类} / ${item.价格} 积分`, item.描述 || '')).join('') || '<div class="tk-panel-empty">当前分类暂无商品</div>'}</div></section>`,
  })));
}

function 选择展示势力(state: 状态总表): { id: string; faction: 势力 } | null {
  const entries = Object.entries(state.势力 || {});
  if (entries.length === 0) {
    return null;
  }
  const [id, faction] = entries[0];
  return { id, faction };
}

function 渲染军队页(state: 状态总表): string {
  const current = 选择展示势力(state);
  if (!current) {
    return `<section class="tk-panel-card"><div class="tk-panel-card-title">军队</div><div class="tk-panel-empty">当前没有势力数据</div></section>`;
  }
  const armies = Object.entries(current.faction.军队 || {});
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
  return `<section class="tk-panel-card"><div class="tk-panel-card-title">军队</div><div class="tk-panel-inline-note">当前展示势力：${转义HTML(current.faction.名称 || current.id)}（${转义HTML(current.id)}）</div><div class="tk-panel-detail-list">${content}</div></section>`;
}

function 渲染势力页(state: 状态总表): string {
  const current = 选择展示势力(state);
  if (!current) {
    return `<section class="tk-panel-card"><div class="tk-panel-card-title">势力</div><div class="tk-panel-empty">当前没有势力数据</div></section>`;
  }
  const { id, faction } = current;
  const diplomacy = Object.entries(faction.外交 || {}).slice(0, 8).map(([name, value]) => 标签(name, `${value} / ${faction._外交等级?.[name] || '未知'}`)).join('');
  const cities = Object.entries(faction.城池 || {}).slice(0, 8).map(([name, city]) => 列表项(name, `${city.等级} / 太守:${city.太守 || '无'}`, `税收:${city._月税收 ?? 0} · 产粮:${city._月产粮 ?? 0}`)).join('');
  return `
    <div class="tk-panel-page-grid cols-2">
      <section class="tk-panel-card">
        <div class="tk-panel-card-title">势力总览</div>
        <div class="tk-panel-inline-note">当前展示势力：${转义HTML(faction.名称 || id)}（${转义HTML(id)}）</div>
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
.tk-statusbar .tk-subtab-input{display:none}
.tk-statusbar .tk-subtabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
.tk-statusbar .tk-subtab-label{padding:6px 12px;border:1px solid rgba(196,154,92,.22);border-radius:999px;background:rgba(255,255,255,.03);color:#d6bb91;cursor:pointer;font-size:12px;transition:.2s}
.tk-statusbar .tk-subtab-label:hover{background:rgba(196,154,92,.1);color:#fff1d0}
.tk-statusbar .tk-subpage{display:none}
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
.tk-statusbar .tk-panel-equip-detail summary{padding:12px 14px;background:rgba(167,107,46,.12)}
.tk-statusbar .tk-panel-equip-detail .tk-panel-detail-body{padding:0 0 4px}
.tk-statusbar .tk-panel-empty{padding:18px 12px;text-align:center;color:#bda681;font-size:12px}
.tk-statusbar .tk-radar-wrap{display:block;margin-bottom:12px}
.tk-statusbar .tk-radar{width:220px;height:220px;display:block;margin:0 auto}
.tk-statusbar .tk-radar-ring,.tk-statusbar .tk-radar-axis{fill:none;stroke:rgba(240,201,131,.18);stroke-width:1}
.tk-statusbar .tk-radar-shape{fill:rgba(167,107,46,.28);stroke:#f0c983;stroke-width:2}
.tk-statusbar .tk-radar-dot{fill:#f6dfb5}
.tk-statusbar .tk-radar-label{fill:#d8bf93;font-size:11px}
.tk-statusbar .tk-panel-bar-row{display:grid;grid-template-columns:56px 1fr auto;gap:8px;align-items:center;margin-bottom:8px}
.tk-statusbar .tk-panel-bar-label,.tk-statusbar .tk-panel-bar-value{font-size:11px;color:#d8bf93}.tk-statusbar .tk-panel-bar{height:9px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}
.tk-statusbar .tk-panel-bar-fill{display:block;height:100%}.tk-statusbar .tk-panel-bar-fill.is-hp{background:linear-gradient(90deg,#7f1d1d,#dc2626)}.tk-statusbar .tk-panel-bar-fill.is-sp{background:linear-gradient(90deg,#0f3d73,#3b82f6)}.tk-statusbar .tk-panel-bar-fill.is-morale{background:linear-gradient(90deg,#7c5c12,#f59e0b)}.tk-statusbar .tk-panel-bar-fill.is-fatigue{background:linear-gradient(90deg,#3f3f46,#a1a1aa)}.tk-statusbar .tk-panel-bar-fill.is-gold{background:linear-gradient(90deg,#8b5e00,#facc15)}
@media (max-width:720px){.tk-statusbar .tk-panel-page-grid.cols-2,.tk-statusbar .tk-panel-kv-grid,.tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:1fr}.tk-statusbar .cols-span-2{grid-column:span 1}.tk-statusbar .tk-radar{width:180px;height:180px}}
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
  return `${STATUS_BAR_START}<div class="tk-statusbar"><div class="tk-panel-shell">${样式(ids)}<input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.hero}" checked><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.npc}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.quest}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.shop}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.army}"><input class="tk-panel-tab-input" type="radio" name="${group}" id="${ids.faction}"><div class="tk-panel-head"><div class="tk-panel-title">三国霸主 · 系统面板</div><div class="tk-panel-subtitle"><span>${header}</span></div></div><div class="tk-panel-tabs"><label class="tk-panel-tab-label" for="${ids.hero}">主角</label><label class="tk-panel-tab-label" for="${ids.npc}">当前地点NPC</label><label class="tk-panel-tab-label" for="${ids.quest}">任务</label><label class="tk-panel-tab-label" for="${ids.shop}">商城</label><label class="tk-panel-tab-label" for="${ids.army}">军队</label><label class="tk-panel-tab-label" for="${ids.faction}">势力</label></div><div class="tk-panel-pages"><div class="tk-panel-page is-hero">${渲染主角页(state, suffix)}</div><div class="tk-panel-page is-npc">${渲染NPC页(state)}</div><div class="tk-panel-page is-quest">${渲染任务页(state, suffix)}</div><div class="tk-panel-page is-shop">${渲染商城页(state, suffix)}</div><div class="tk-panel-page is-army">${渲染军队页(state)}</div><div class="tk-panel-page is-faction">${渲染势力页(state)}</div></div></div></div>${STATUS_BAR_END}`;
}

export function appendStatusBar(content: string, state: 状态总表, messageId?: number): string {
  const cleaned = stripStatusBar(content);
  return `${cleaned}\n\n${buildStatusBar(state, messageId)}`.trim();
}
