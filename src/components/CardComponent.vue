<script setup>
import { computed } from "vue";
import money from "currency-formatter";
import { formatRupiah } from "../utils/money";
const props = defineProps({
  color: String,
  title: String,
  speed: String,
  price: Number,
  cashback: Number,
  promo: String,
});

const onClickPilih = () => {
  window.open("https://wa.me/082119242093", "_blank");
};
</script>

<template>
  <div
    :style="{
      backgroundColor: color,
    }"
    class="text-slate-50 p-5 rounded-3xl w-4/5 lg:w-[30%] xl:w-[25%] h-72 shadow-lg flex flex-col justify-between"
  >
    <div>
      <p class="text-2xl font-bold mb-5">{{ props.title }}</p>
      <p class="text-center font-bold mb-3 text-xl">
        {{ formatRupiah(props.price) }}/bln
      </p>
      <p class="text-center text-sm">{{ props.speed }}</p>
      <p class="text-center text-sm mb-3 tracking-tighter font-bold">
        {{ props.promo }}
      </p>
      <div>
        <p class="text-center text-xs">Total Cashback</p>
        <p class="text-center text-lg font-bold">
          {{ formatRupiah(props.cashback) }}
        </p>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="bg-slate-50 rounded-full px-4 py-1 font-bold"
        :style="{
          color: color,
        }"
        @click="onClickPilih"
      >
        Pilih Paket
      </button>
    </div>
  </div>
</template>
