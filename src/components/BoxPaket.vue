<script setup>
const props = defineProps({
  bg: String,
  title: String,
});
</script>

<template>
  <div class="bg-cover p-2 rounded-md font-bold" :class="`${props.bg}`">
    <div class="flex justify-between mb-2">
      <p class="w-1/2">{{ props.title }}</p>
      <div class="w-1/2">
        <p class="text-[10px] text-right">Harga Promo Sudah Ppn</p>
        <p class="text-[10px] text-right">Cashback Selama 12 Bulan</p>
      </div>
    </div>
    <slot />
  </div>
</template>
