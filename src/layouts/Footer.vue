<script setup>
const dataFeature = [
  "Wireless Home Network",
  "Stable Internet Connection",
  "High Definition TV Channels",
  "Combo Value Saving",
];
const onClickPilih = () => {
  window.open("https://wa.me/082119242093", "_blank");
};
</script>

<template>
  <footer>
    <div class="flex flex-wrap">
      <div class="mb-4 md:w-1/2">
        <p class="text-lg font-bold mb-4">Feature Internet TV</p>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="data in dataFeature"
            class="bg-slate-50/10 p-2 w-[45%] rounded-sm"
          >
            {{ data }}
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <p class="mb-4 font-bold text-lg">Hubungi Saya</p>
        <div class="bg-slate-50/5 rounded-sm p-2">
          <p>
            Pasang First Media, Informasi dan Pemasangan Silahkan Hubungi Saya :
          </p>
          <div class="flex gap-4">
            <p class="w-20">Telepon</p>
            <p>: 085945385745</p>
          </div>
          <div class="flex gap-4">
            <p class="w-20">Whatsapp</p>
            <p>: 085945385745</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="w-[10rem] h-[4rem] overflow-hidden flex items-center"
        @click="onClickPilih"
      >
        <img src="@/assets/icon/wa.png" alt="wa" class="w-[15rem]" />
      </button>
    </div>
  </footer>
</template>
