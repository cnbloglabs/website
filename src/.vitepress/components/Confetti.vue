<script setup lang="ts">
import { watch } from 'vue'
import confetti from 'canvas-confetti'
import type { Options } from 'canvas-confetti'

const props = defineProps<{
  passed: boolean
}>()

const options: Options = {
  colors: [
    '#A3DE45',
    '#FFD942',
    '#EC9281',
    '#28B5FF',
    '#2E7ACC',
  ],
}

function run() {
  confetti({
    ...options,
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
    shapes: ['star', 'circle', 'square'],
  })

  // confetti({
  //   ...options,
  //   particleCount: 50,
  //   angle: 60,
  //   spread: 80,
  //   origin: { x: 0 },
  //   shapes: ['square'],
  //   ticks: 500,
  // })

  // setTimeout(() => {
  //   confetti({
  //     ...options,
  //     particleCount: 50,
  //     angle: 120,
  //     spread: 80,
  //     origin: { x: 1 },
  //     shapes: ['square'],
  //     ticks: 500,
  //   })
  // }, 400)

  // confetti({
  //   ...options,
  //   particleCount: 80,
  //   spread: 100,
  //   origin: { y: 0 },
  //   shapes: ['square'],
  //   ticks: 500,
  // })
}

function congrats() {
  const end = Date.now() + 200;
  (function frame() {
    run()
    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }())
}

watch(
  () => props.passed,
  (v) => {
    if (v) {
      setTimeout(congrats, 300)
    }
  },
  { flush: 'post' },
)
</script>

<template>
  <div />
</template>
