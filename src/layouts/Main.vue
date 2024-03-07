<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { computed } from "vue";
import Card from "../components/CardComponent.vue";
import CardQualification from "../components/CardQualification.vue";
import BoxPaket from "../components/BoxPaket.vue";
const modules = computed(() => [Pagination]);

const dataQualification = [
  {
    title: "Internet Unlimited",
    desc: "Internet Wifi kencang dengan kuota tak terbatas untuk semua paket",
    icon: "internet_unlimited.png",
    license:
      "https://www.freepik.com/icon/bandwidth_1779289#fromView=search&page=1&position=18&uuid=18f0c165-24fe-4b56-ab31-11722ce47387",
  },
  {
    title: "Ratusan Channel TV",
    desc: "Nikmati hiburan TV dan Film menarik dari dalam dan luar negeri",
    icon: "channel.png",
    license:
      "https://www.freepik.com/icon/client_1779362#fromView=resource_detail&position=11",
  },
  {
    title: "Support Terbaik",
    desc: "Didukung oleh Customer Support & Tim Teknisi yang berpengalaman",
    icon: "cs.png",
    license:
      "https://www.freepik.com/icon/avatar_1779287#fromView=resource_detail&position=43",
  },
];

const dataPaket = [
  {
    title: "INTERNET + OTT",
    background: "bg-stream",
    data: [
      {
        title: "Stream Value",
        speed: "Up to 50 Mbps",
        price: 276945,
        promo: "Free Access Catchplay",
        cashback: 180000,
        color: "rgb(251 191 36)",
      },
      {
        title: "Stream Pro",
        speed: "Up to 175 Mbps",
        price: 587745,
        promo: "Free Access Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 600000,
        color: "rgb(245 158 11)",
      },
      {
        title: "Stream Premium",
        speed: "Up to 250 Mbps",
        price: 776445,
        promo:
          "Free Access HBO GO, Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 840000,
        color: "rgb(217 119 6)",
      },
    ],
  },
  {
    title: "INTERNET + TV CHANNEL",
    background: "bg-joy",
    data: [
      {
        title: "Joy Value",
        speed: "Up to 100 Mbps",
        price: 332445,
        promo: "Free Access Catchplay",
        cashback: 0,
        color: "rgb(6 182 211)",
      },
      {
        title: "Joy Pro",
        speed: "Up to 125 Mbps",
        price: 465645,
        promo: "Free Access Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 600000,
        color: "rgb(8 145 178)",
      },
      {
        title: "Joy Premium",
        speed: "Up to 175 Mbps",
        price: 743145,
        promo:
          "Free Access HBO GO, Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 840000,
        color: "rgb(14 116 144)",
      },
    ],
  },
  {
    title: "INTERNET ULTRA + TV CHANNEL",
    background: "bg-star",
    data: [
      {
        title: "Star Value",
        speed: "Up to 250 Mbps",
        price: 1087245,
        promo: "Free Access Catchplay",
        cashback: 1200000,
        color: "rgb(250 204 21)",
      },
      {
        title: "Star Pro",
        speed: "Up to 350 Mbps",
        price: 1996890,
        promo: "Free Access Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 2400000,
        color: "rgb(234 179 8)",
      },
      {
        title: "Star Premium",
        speed: "Up to 500 Mbps",
        price: 3452100,
        promo:
          "Free Access HBO GO, Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 4800000,
        color: "rgb(202 138 4)",
      },
    ],
  },
];

const media = computed(() => {
  const device = window.innerWidth;
  if (device < 768) return "sm";
  else if (device < 1024) return "md";
  else if (device < 1280) return "lg";
  else if (device < 1536) return "xl";
  else if (device < 1920) return "2xl";
  else if (device >= 1920) return "3xl";
});

const responsiveSlider = computed(() => {
  return media.value === "md" ? 2 : 1;
});
</script>

<template>
  <main class="relative z-10 flex flex-col gap-10 mb-14 md:gap-24">
    <section class="qualifications">
      <p class="text-lg 2xl:text-2xl 3xl:text-3xl font-bold mb-4">
        Qualifications
      </p>
      <div class="md:hidden">
        <Swiper
          :pagination="{
            type: 'bullets',
          }"
          :modules="modules"
          :space-between="10"
        >
          <SwiperSlide
            class="bg-slate-100 p-1 rounded"
            v-for="data in dataQualification"
            :key="data"
          >
            <CardQualification
              :title="data.title"
              :icon="data.icon"
              :desc="data.desc"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="hidden md:flex md:gap-5 lg:justify-around">
        <CardQualification
          v-for="data in dataQualification"
          :title="data.title"
          :icon="data.icon"
          :desc="data.desc"
          :license="data.license"
        />
      </div>
    </section>
    <!-- <section class="feature">
      <p class="text-lg font-bold mb-4">Feature Internet TV</p>
      <div class="md:hidden">
        <Swiper
          :pagination="{
            type: 'bullets',
          }"
          :modules="modules"
          class="h-20"
        >
          <SwiperSlide v-for="data in dataFeature">{{ data }}</SwiperSlide>
        </Swiper>
      </div>
      <div class="hidden md:flex md:justify-around">
        <p
          v-for="data in dataFeature"
          class="md:text-sm md:w-1/5 xl:text-center xl:text-base 3xl:text-lg"
        >
          {{ data }}
        </p>
      </div>
    </section> -->
    <section
      class="w-[95%] lg:w-[80%] 3xl:w-[65%] my-4 flex flex-col items-center m-auto"
    >
      <p
        class="mb-3 text-xl sm:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-center leading-relaxed"
      >
        Internet Rumah Bebas Kuota & Hiburan Terlengkap
      </p>
      <p class="text-sm sm:text-base lg:text-lg 2xl:text-xl text-center">
        Pilih paket internet #BebasFUP sesuai kebutuhanmu!
      </p>
      <p
        class="text-sm sm:text-base lg:text-lg 2xl:text-xl font-bold text-center"
      >
        #LebihKencangLebihBebas
      </p>
    </section>
    <section class="berlangganan">
      <p class="text-lg 2xl:text-2xl 3xl:text-3xl font-bold mb-4">
        Berlangganan
      </p>
      <div class="flex flex-col gap-6 lg:gap-10">
        <BoxPaket
          v-for="data in dataPaket"
          :bg="data.background"
          :title="data.title"
        >
          <div class="lg:hidden">
            <Swiper
              :pagination="{
                type: 'bullets',
              }"
              :modules="modules"
              style="padding-bottom: 10px !important"
              :slides-per-view="responsiveSlider"
            >
              <SwiperSlide v-for="data in data.data">
                <Card
                  :color="data.color"
                  :title="data.title"
                  :speed="data.speed"
                  :promo="data.promo"
                  :price="data.price"
                  :cashback="data.cashback"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="hidden lg:flex lg:justify-evenly">
            <Card
              v-for="data in data.data"
              :color="data.color"
              :title="data.title"
              :speed="data.speed"
              :promo="data.promo"
              :price="data.price"
              :cashback="data.cashback"
            />
          </div>
        </BoxPaket>
      </div>
    </section>
    <!-- <Card color="#00f" title="Stream Value" textContent="Up to 50Mbps" /> -->
  </main>
</template>
