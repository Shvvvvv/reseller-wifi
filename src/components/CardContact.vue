<script setup>
const props = defineProps({
  contact: String,
});
</script>

<template>
  <div
    class="w-56 bg-cyan-800 h-40 rounded-lg shadow-lg p-4 box-border border border-slate-50 flex flex-col justify-center gap-10"
  >
    <div>
      <p class="font-bold">Call to Us</p>
      <p class="font-thin text-sm">For more information</p>
    </div>
    <div>
      <p>{{ props.contact }}</p>
    </div>
  </div>
</template>
