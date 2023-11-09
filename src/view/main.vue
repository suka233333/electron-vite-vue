<script setup lang="ts">
const goSecond = () => {
  window.open('/second');
};
</script>

<template>
<div>主窗口</div>
  <button @click="goSecond">点击打开第二个窗口</button>
</template>

<style scoped>

</style>
