<script setup>
const dataFeature = [
  "Wireless Home Network",
  "Stable Internet Connection",
  "High Definition TV Channels",
  "Combo Value Saving",
];
const onClickPilih = () => {
  window.open(
    "https://wa.me/6282119242093?text=Halo%2C%20Saya%20ingin%20menanyakan%20informasi%20tentang%20Paket%20Berlangganan%20Firstmedia.",
    "_blank"
  );
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
            <p>: +6282119242093</p>
          </div>
          <div class="flex gap-4">
            <p class="w-20">Whatsapp</p>
            <p>: +6282119242093</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="w-[10rem] h-[4rem] overflow-hidden flex items-center"
        @click="onClickPilih"
      >
        <img
          src="@/assets/icon/wa.png"
          alt="https://www.pngwing.com/en/free-png-vcxpp"
          title="https://www.pngwing.com/en/free-png-vcxpp"
          class="w-[15rem]"
          loading="lazy"
        />
      </button>
    </div>
  </footer>
</template>
