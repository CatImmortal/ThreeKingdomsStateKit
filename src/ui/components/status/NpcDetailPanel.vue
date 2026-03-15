<template>
  <section class="tk-npc-detail-scope">
    <div class="tk-panel-pages">
      <div class="tk-panel-page">
        <div class="tk-panel-page-grid cols-2">
          <section class="tk-panel-card">
            <div class="tk-panel-card-title">基础信息</div>
            <div class="tk-panel-kv-grid compact">
              <div v-for="item in baseItems" :key="item.label" class="tk-panel-kv">
                <span class="tk-panel-k">{{ item.label }}</span>
                <span class="tk-panel-v" :style="item.label === '品质' ? 品质文本样式(String(item.value)) : ''">{{ item.value }}</span>
              </div>
            </div>
            <div class="tk-panel-inline-note">{{ npc.简述 || '暂无描述' }}</div>
          </section>

          <section class="tk-panel-card">
            <div class="tk-panel-card-title">关系与羁绊</div>
            <div class="tk-panel-kv-grid">
              <div class="tk-panel-kv">
                <span class="tk-panel-k">关系</span>
                <span class="tk-panel-v">{{ relationText }}</span>
              </div>
              <div class="tk-panel-kv">
                <span class="tk-panel-k">羁绊数</span>
                <span class="tk-panel-v">{{ bondEntries.length }}</span>
              </div>
            </div>
            <div class="tk-panel-list" v-if="bondEntries.length > 0">
              <div v-for="[name, desc] in bondEntries" :key="name" class="tk-panel-list-item">
                <div class="tk-panel-list-title">{{ name }}</div>
                <div class="tk-panel-list-desc" style="margin-top: 10px; line-height: 1.6;">{{ desc || '无' }}</div>
              </div>
            </div>
            <div v-else class="tk-panel-empty">暂无羁绊信息</div>
          </section>

          <section v-if="npc.角色数据" class="tk-panel-card cols-span-2">
            <div class="tk-panel-card-title">角色数据</div>
            <div class="tk-panel-page-grid cols-2">
              <section class="tk-panel-card">
                <div class="tk-panel-card-title">角色面板</div>
                <div class="tk-panel-bar-row"><div class="tk-panel-bar-label">生命</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-hp" :style="{ width: ratio(npc.角色数据.当前生命值, npc.角色数据._生命值上限) }"></span></div><div class="tk-panel-bar-value">{{ npc.角色数据.当前生命值 }} / {{ npc.角色数据._生命值上限 ?? 0 }}</div></div>
                <div class="tk-panel-bar-row"><div class="tk-panel-bar-label">体力</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-sp" :style="{ width: ratio(npc.角色数据.当前体力值, npc.角色数据._体力值上限) }"></span></div><div class="tk-panel-bar-value">{{ npc.角色数据.当前体力值 }} / {{ npc.角色数据._体力值上限 ?? 0 }}</div></div>
                <div class="tk-panel-inline-note">伤势：<span :style="伤势文本样式(npc.角色数据._伤势)">{{ npc.角色数据._伤势 || '完好' }}</span>　减值：{{ npc.角色数据._伤势减值 ?? 0 }}</div>
                <div class="tk-panel-kv-grid compact" style="margin-top: 18px;">
                  <div v-for="item in battleItems" :key="item.label" class="tk-panel-kv">
                    <span class="tk-panel-k">{{ item.label }}</span>
                    <span class="tk-panel-v">{{ item.value }}</span>
                  </div>
                </div>
              </section>
              <section class="tk-panel-card">
                <div class="tk-panel-card-title">六维与战斗</div>
                <RadarChart :stats="npc.角色数据.六维" />
              </section>
            </div>
          </section>

          <section v-if="equipmentList.length > 0" class="tk-panel-card">
            <div class="tk-panel-card-title">装备</div>
            <div class="tk-panel-list">
              <div v-for="item in equipmentList" :key="item.title" class="tk-panel-list-item">
                <div class="tk-panel-list-title">{{ item.title }}</div>
                <div class="tk-panel-list-meta"><span :style="物品品质文本样式(item.quality)">{{ item.quality }}</span> / {{ item.type }}</div>
                <div class="tk-panel-list-desc">{{ item.desc }}</div>
              </div>
            </div>
          </section>

          <section v-if="skillList.length > 0" class="tk-panel-card">
            <div class="tk-panel-card-title">武技</div>
            <div class="tk-panel-list">
              <div v-for="item in skillList" :key="item.title" class="tk-panel-list-item">
                <div class="tk-panel-list-title">{{ item.title }}</div>
                <div class="tk-panel-list-meta"><span :style="武技等级文本样式(item.level)">{{ item.level }}</span> / {{ item.type }}</div>
                <div class="tk-panel-list-desc">{{ item.desc }}</div>
              </div>
            </div>
          </section>

          <section v-if="perkList.length > 0" class="tk-panel-card cols-span-2">
            <div class="tk-panel-card-title">专长</div>
            <div class="tk-panel-list">
              <div v-for="item in perkList" :key="item.title" class="tk-panel-list-item">
                <div class="tk-panel-list-title">{{ item.title }}</div>
                <div class="tk-panel-list-meta"><span :style="属性等级文本样式(item.meta)">{{ item.meta }}</span></div>
                <div class="tk-panel-list-desc">{{ item.desc }}</div>
              </div>
            </div>
          </section>

          <section v-if="statusList.length > 0" class="tk-panel-card cols-span-2">
            <div class="tk-panel-card-title">状态</div>
            <div class="tk-panel-list">
              <div v-for="item in statusList" :key="item.title" class="tk-panel-list-item">
                <div class="tk-panel-list-title">{{ item.title }}</div>
                <div class="tk-panel-list-meta">剩余：{{ item.meta }}</div>
                <div class="tk-panel-list-desc">{{ item.desc }}</div>
              </div>
            </div>
          </section>

          <section v-if="npc.武将信息" class="tk-panel-card cols-span-2">
            <div class="tk-panel-card-title">武将信息</div>
            <BoundedBar label="忠诚" :value="npc.武将信息.忠诚" :max="100" color-class="is-cyan" />
            <BoundedBar label="野心值" :value="npc.武将信息.野心值" :max="100" color-class="is-rose" />
            <AptitudeRadarChart :aptitude="npc.武将信息.兵种适性" />
            <div class="tk-panel-kv-grid compact">
              <div v-for="item in generalItems" :key="item.label" class="tk-panel-kv">
                <span class="tk-panel-k">{{ item.label }}</span>
                <span class="tk-panel-v">{{ item.value }}</span>
              </div>
            </div>
          </section>

          <section v-if="npc.美人属性" class="tk-panel-card">
            <div class="tk-panel-card-title">美人属性</div>
            <BoundedBar label="依赖度" :value="npc.美人属性.依赖度" :max="100" color-class="is-purple" />
            <BoundedBar label="敏感度" :value="npc.美人属性.敏感度" :max="100" color-class="is-rose" />
            <BoundedBar label="贞洁度" :value="npc.美人属性.贞洁度" :max="100" color-class="is-cyan" />
            <BoundedBar label="好感" :value="npc.好感" :max="100" color-class="is-gold" />
            <div class="tk-panel-kv-grid compact">
              <div v-for="item in consortItems" :key="item.label" class="tk-panel-kv">
                <span class="tk-panel-k">{{ item.label }}</span>
                <span class="tk-panel-v">{{ item.value }}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { NPC } from '../../../state';
import AptitudeRadarChart from './AptitudeRadarChart.vue';
import BoundedBar from './BoundedBar.vue';
import RadarChart from './RadarChart.vue';
import { 品质文本样式, 属性等级文本样式, 伤势文本样式, 物品品质文本样式, 武技等级文本样式 } from './qualityStyles';

const props = defineProps<{ npc: NPC }>();
const npc = computed(() => props.npc);
const bondEntries = computed(() => Object.entries(npc.value.羁绊 || {}));
const relationText = computed(() => {
  if (npc.value.美人属性?._好感等级) {
    return npc.value.美人属性._好感等级;
  }
  if (npc.value._交情等级) {
    return npc.value._交情等级;
  }
  return String(npc.value.好感 ?? 0);
});
const baseItems = computed(() => [
  { label: '名称', value: npc.value.名称 || '未命名角色' },
  { label: '品质', value: npc.value.品质 || '无' },
  { label: '阵营', value: npc.value.阵营 || '无' },
  { label: '所在地', value: npc.value.所在地 || '未知地点' },
  { label: '定位', value: npc.value.定位 || '无' },
  { label: '关系', value: relationText.value },
]);
const battleItems = computed(() => {
  const data = npc.value.角色数据;
  if (!data) {
    return [];
  }
  return [
    { label: '先攻', value: data._先攻基础值 ?? 0 },
    { label: '攻击', value: data._攻击基础值 ?? 0 },
    { label: '伤害', value: data._伤害基础值 ?? 0 },
    { label: '防御DC', value: data._防御DC基础值 ?? 0 },
    { label: '伤害减免', value: data._伤害减免基础值 ?? 0 },
  ];
});
const equipmentList = computed(() => {
  const list: Array<{ title: string; quality: string; type: string; desc: string }> = [];
  for (const [slot, item] of Object.entries(npc.value.角色数据?.装备 || {})) {
    if (!item || item === '无') {
      continue;
    }
    list.push({
      title: `${slot} · ${item.名称}`,
      quality: item.品质,
      type: item.类型,
      desc: item.描述 || item.装备条目?.其他效果 || '无',
    });
  }
  return list;
});
const skillList = computed(() => Object.entries(npc.value.角色数据?.武技 || {})
  .map(([, skill]) => ({
    title: skill.名称 || '未命名武技',
    level: skill.等级,
    type: skill.类型,
    desc: `熟练度：${skill.熟练度 ?? 0}　体力消耗：${skill.体力消耗 ?? 0}${skill.效果 ? `\n${skill.效果}` : ''}`,
  })));
const perkList = computed(() => Object.entries(npc.value.角色数据?.专长 || {})
  .map(([, perk]) => ({
    title: perk.名称 || '未命名专长',
    meta: perk.等级 || '未定级',
    desc: perk.效果 || '无',
  })));
const statusList = computed(() => Object.entries(npc.value.角色数据?.状态 || {})
  .map(([name, status]) => ({
    title: name,
    meta: status.剩余 || '未知',
    desc: status.效果 || '无',
  })));
const generalItems = computed(() => {
  const general = npc.value.武将信息;
  if (!general) {
    return [];
  }
  return [
    { label: '效忠势力', value: `${general.势力 || '无'}/${general._忠诚等级 || '未知'}` },
    { label: '官职', value: general.官职 || '无' },
    { label: '性格', value: general.性格 || '无' },
    { label: '当前状态', value: general.当前状态 || '无' },
    { label: '是否已招募', value: general.是否已招募 ? '是' : '否' },
    { label: '状态描述', value: general.状态描述 || '无' },
    { label: '特技', value: Object.entries(general.特技 || {}).map(([name, desc]) => `${name}:${desc}`).join(' / ') || '无' },
  ];
});
const consortItems = computed(() => {
  const consort = npc.value.美人属性;
  if (!consort) {
    return [];
  }
  return [
    { label: '是否已攻略', value: consort.是否已攻略 ? '是' : '否' },
    ...(consort.是否已攻略 ? [{ label: '位份', value: consort.位份 || '未纳入' }] : []),
    { label: '性格', value: consort.性格 || '无' },
    { label: '当前状态', value: consort.当前状态 || '无' },
    { label: '依赖等级', value: consort._依赖等级 || '无' },
    { label: '敏感等级', value: consort._敏感等级 || '无' },
    { label: '贞洁等级', value: consort._贞洁等级 || '无' },
    { label: '好感等级', value: consort._好感等级 || String(npc.value.好感 ?? 0) },
  ];
});

const ratio = (current: number, max?: number) => `${Math.max(0, Math.min(100, Math.round((current / Math.max(max || 100, 1)) * 100)))}%`;
</script>
