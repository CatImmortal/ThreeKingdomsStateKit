<template>
  <section class="tk-panel-card">
    <div class="tk-panel-card-title">当前地点 NPC</div>
    <div class="tk-panel-detail-list">
      <details v-for="[id, npc] in entries" :key="id" class="tk-panel-detail">
        <summary><span>{{ npc.名称 || id }}</span><span>{{ npc.品质 }} / {{ npc.定位 || '未知' }}</span></summary>
        <div class="tk-panel-detail-body">
          <div class="tk-panel-kv-grid compact">
            <div class="tk-panel-kv"><span class="tk-panel-k">阵营</span><span class="tk-panel-v">{{ npc.阵营 || '无' }}</span></div>
            <div class="tk-panel-kv"><span class="tk-panel-k">定位</span><span class="tk-panel-v">{{ npc.定位 || '无' }}</span></div>
            <div class="tk-panel-kv"><span class="tk-panel-k">关系</span><span class="tk-panel-v">{{ npc._忠诚等级 || npc._好感等级 || npc._交情等级 || npc.好感 }}</span></div>
          </div>
          <div class="tk-panel-inline-note">{{ npc.简述 || '暂无描述' }}</div>
        </div>
      </details>
      <div v-if="entries.length === 0" class="tk-panel-empty">当前地点暂无关键 NPC</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { 状态总表 } from '../../../state';
const props = defineProps<{ state: 状态总表 }>();
const entries = computed(() => Object.entries(props.state.NPC || {}));
</script>
