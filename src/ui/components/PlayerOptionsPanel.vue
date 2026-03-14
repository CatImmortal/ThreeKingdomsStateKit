<template>
  <section class="tk-vue-card tk-vue-options">
    <div class="tk-vue-card-title">可选行动</div>
    <div v-if="options.length > 0" class="tk-vue-options-list">
      <button
        v-for="(option, index) in options"
        :key="`${option.text}-${index}`"
        type="button"
        class="tk-vue-option-btn"
        @click="handleOptionClick(option.text)"
      >
        {{ option.text }}
      </button>
    </div>
    <div v-else class="tk-vue-empty">当前没有可选行动</div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { handlePlayerOptionClick } from '../../runtime';
import { unifiedPanelState } from '../store';

const options = computed(() => unifiedPanelState.playerOptionsPanel.options);

const handleOptionClick = (text: string) => {
  if (unifiedPanelState.playerOptionsPanel.latestMessageId == null) {
    return;
  }
  void handlePlayerOptionClick(unifiedPanelState.playerOptionsPanel.latestMessageId, text);
};
</script>
