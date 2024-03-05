<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  desc: String,
  icon: String,
});

const urlIcon = computed(() => `@/assets/icons/${props.icon}`);
</script>

<template>
  <div class="bg-cyan-600 rounded-lg p-4">
    <div class="flex justify-center">
      <img :src="urlIcon" :alt="props.icon" class="w-1/5" />
    </div>
    <div>
      <p class="text-center font-bold">{{ props.title }}</p>
      <p class="text-center text-sm mb-2">
        {{ props.desc }}
      </p>
    </div>
  </div>
</template>
