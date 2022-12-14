<script lang='ts' setup>
import { computed, ref } from 'vue'
import Confetti from './Confetti.vue'
</script>

<script lang="ts">
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import Step4 from './Step4.vue'
import Step5 from './Step5.vue'
import Step6 from './Step6.vue'
import Step7 from './Step7.vue'

const showModal = ref(false)
const currentIndex = ref(0)
const currentTabContent = computed(() => `step${currentIndex.value + 1}`)
const passed = ref(false)

const tabs = [
  '打开设置',
  '申请 JS 权限',
  '设置默认皮肤',
  '设置 loading',
  '禁用默认样式',
  '安装皮肤',
  '点击保存',
]

function handleTabChange(v) {
  currentIndex.value = v
  if (v === tabs.length - 1) {
    passed.value = true
  } else if (passed.value) {
    passed.value = false
  }
}

export default {
  name: 'Guide',
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
  },
}
</script>

<template>
  <div>
    <a
      class="inline-flex justify-center gap-2 items-center px-6 py-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer"
      rel="noopener noreferrer"
      @click="showModal = true"
    >
      <span class="i-carbon:page-last inline-block text-lg text-white" />
      <span class="text-white">开始</span>
    </a>
    <Transition name="fade" appear>
      <div
        v-if="showModal"
        class="fixed top-0 left-0 right-0 bottom-0 z-21 bg-black/70 cursor-pointer"
        @click="() => showModal = false"
      />
    </Transition>
    <Transition name="pop">
      <div
        v-if="showModal"
        class="fixed top-0 left-0 right-0 bottom-0 z-22 flex items-center justify-center m-auto w-[fit-content] h-[fit-content]"
      >
        <div class="flex flex-row bg-[var(--vp-c-bg-soft)] p-8 rounded-lg shadow-2xl h-140">
          <div class="flex flex-col justify-between">
            <div
              v-for="(item, index) in tabs"
              :key="item"
              class="relative flex items-center px-4 py-4 rounded-lg border-solid cursor-pointer shadow-md"
              :class="[
                `${index <= currentIndex ? 'text-blue-400 border-blue-400' : 'border-[var(--vp-c-bg-mute)] text-[var(--vp-c-text-1)]'}`,
                (index < currentIndex || currentIndex === tabs.length - 1) && 'bg-blue-200/10',
              ]"
              @click="handleTabChange(index)"
            >
              <span
                class="inline-block text-lg"
                :class="`${index <= currentIndex ? 'i-carbon:checkmark-filled' : 'i-carbon:circle-dash'} `"
              />
              <span class="ml-2">{{ `${index + 1}.` + ` ${item}` }}</span>
              <span v-if="currentIndex === index && currentIndex !== tabs.length - 1" class="absolute -top-1 -right-1 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
                <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500" />
              </span>
            </div>
          </div>
          <div class="w-[600px] overflow-auto flex-1 px-8 pb-8">
            <!-- <keep-alive> -->
            <Transition name="in">
              <component :is="currentTabContent" />
            </Transition>
            <!-- </keep-alive> -->
          </div>
        </div>
        <div
          class="flex items-center ml-16 p-4 rounded-full bg-[var(--vp-c-bg-soft)] shadow-lg cursor-pointer"
          rel="noopener noreferrer"
          @click="showModal = false"
        >
          <span class="i-carbon:close inline-block text-2xl" />
        </div>
      </div>
    </Transition>
    <Confetti :passed="passed" />
  </div>
</template>
