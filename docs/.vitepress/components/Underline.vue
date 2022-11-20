<script lang='ts' setup>
defineProps<{
  text: string
}>()
</script>

<template>
  <span class="underline underline-[var(--vp-c-brand)]">{{ text }}</span>
</template>
