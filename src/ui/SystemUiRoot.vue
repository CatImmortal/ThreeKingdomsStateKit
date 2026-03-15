<template>
  <div class="tk-vue-root-shell">
    <UnifiedPanel />
    <PlayerOptionsFloatingPanel />
    <NpcDetailWindows />
  </div>
</template>

<script setup lang="ts">
import UnifiedPanel from './views/UnifiedPanel.vue';
import PlayerOptionsFloatingPanel from './views/PlayerOptionsFloatingPanel.vue';
import NpcDetailWindows from './views/NpcDetailWindows.vue';
</script>
