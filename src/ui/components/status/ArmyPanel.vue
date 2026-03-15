<template>
  <section class="tk-panel-card">
    <div class="tk-panel-card-title">军队</div>
    <div v-if="faction" class="tk-panel-inline-note">当前展示势力：{{ faction.名称 || '未命名势力' }}</div>
    <div class="tk-panel-detail-list">
      <details v-for="[名称, army] in armies" :key="名称" class="tk-panel-detail">
        <summary><span>{{ army.名称 || '未命名军队' }}</span><span>{{ army.兵种 }} / {{ army.等级 }}</span></summary>
        <div class="tk-panel-detail-body">
          <div class="tk-panel-bar-row"><div class="tk-panel-bar-label">士气</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-morale" :style="{ width: `${army.士气}%` }"></span></div><div class="tk-panel-bar-value">{{ army.士气 }} / 100</div></div>
          <div class="tk-panel-bar-row"><div class="tk-panel-bar-label">疲惫</div><div class="tk-panel-bar"><span class="tk-panel-bar-fill is-fatigue" :style="{ width: `${army.疲惫}%` }"></span></div><div class="tk-panel-bar-value">{{ army.疲惫 }} / 100</div></div>
          <div class="tk-panel-kv-grid compact">
            <div class="tk-panel-kv"><span class="tk-panel-k">兵力</span><span class="tk-panel-v">{{ army.兵力 }}</span></div>
            <div class="tk-panel-kv"><span class="tk-panel-k">将领</span><span class="tk-panel-v">{{ army.统属将领 || '无' }}</span></div>
            <div class="tk-panel-kv"><span class="tk-panel-k">驻扎地</span><span class="tk-panel-v">{{ army.驻扎地 || '无' }}</span></div>
            <div class="tk-panel-kv"><span class="tk-panel-k">战力</span><span class="tk-panel-v">{{ army._综合战力 ?? 0 }}</span></div>
            <div class="tk-panel-kv"><span class="tk-panel-k">兵种适性</span><span class="tk-panel-v">{{ resolveAptitude(army) }}</span></div>
            <div class="tk-panel-kv"><span class="tk-panel-k">阵型/攻/防</span><span class="tk-panel-v">{{ resolveFormation(army) }}</span></div>
          </div>
        </div>
      </details>
      <div v-if="armies.length === 0" class="tk-panel-empty">当前没有军队数据</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { 是否主角统军 } from '../../../commander';
import type { 状态总表 } from '../../../state';

const props = defineProps<{
  state: 状态总表;
  faction?: 状态总表['势力'][string] | null;
}>();

const armies = computed(() => Object.entries(props.faction?.军队 || {}));

const resolveAptitude = (army: 状态总表['势力'][string]['军队'][string]) => {
  const commanderName = String(army.统属将领 || '').trim();
  if (是否主角统军(commanderName)) {
    return props.state.主角?.兵种适性?.[army.兵种] ?? 40;
  }
  return commanderName
    ? props.state.NPC?.[commanderName]?.武将信息?.兵种适性?.[army.兵种] ?? 40
    : 40;
};

const resolveFormation = (army: 状态总表['势力'][string]['军队'][string]) => {
  return army.阵型
    ? `${army.阵型}/${army._阵型攻击修正 ?? 1}/${army._阵型防御修正 ?? 1}`
    : '无阵型';
};
</script>
