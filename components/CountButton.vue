<template>
  <div>
    <p>{{ clickCount }} clicks</p>
    <button @click="clickHandler">Click me</button>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  clickCount: number,
  clickHandler: () => void, 
}>();
</script>
