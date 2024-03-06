<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  desc: String,
  icon: String,
});

const urlIcon = computed(
  () => new URL(`/src/assets/icon/${props.icon}`, import.meta.url)
);
</script>

<template>
  <div
    class="bg-cyan-600 rounded-lg p-4 lg:w-[16rem] lg:h-[16rem] xl:w-[25%] lg:flex lg:flex-col lg:justify-center lg:gap-3"
  >
    <div class="flex justify-center">
      <img
        :src="urlIcon"
        :alt="props.icon"
        class="w-1/5 lg:w-[30%] xl:w-[20%]"
      />
    </div>
    <div>
      <p class="text-center font-bold">{{ props.title }}</p>
      <p class="text-center text-sm mb-2 md:text-xs 3xl:text-base">
        {{ props.desc }}
      </p>
    </div>
  </div>
</template>
