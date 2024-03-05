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
  },
  {
    title: "Ratusan Channel TV",
    desc: "Nikmati hiburan TV dan Film menarik dari dalam dan luar negeri",
    icon: "channel.png",
  },
  {
    title: "Support Terbaik",
    desc: "Didukung oleh Customer Support & Tim Teknisi yang berpengalaman",
    icon: "cs.png",
  },
];

const dataFeature = [
  "Wireless Home Network",
  "Stable Internet Connection",
  "High Definition TV Channels",
  "Combo Value Saving",
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
        color: "rgb(253 230 138)",
      },
      {
        title: "Star Pro",
        speed: "Up to 350 Mbps",
        price: 1996890,
        promo: "Free Access Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 2400000,
        color: "rgb(252 211 77)",
      },
      {
        title: "Star Premium",
        speed: "Up to 500 Mbps",
        price: 3452100,
        promo:
          "Free Access HBO GO, Catchplay, Cinema World, VIU, Lionsgate Play",
        cashback: 4800000,
        color: "rgb(251 191 36)",
      },
    ],
  },
];
</script>

<template>
  <main class="relative z-10 flex flex-col gap-10 mb-14">
    <section class="qualifications">
      <p class="text-lg font-bold mb-4">Qualifications</p>
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
    </section>
    <section class="feature">
      <p class="text-lg font-bold mb-4">Feature Internet TV</p>
      <Swiper
        :pagination="{
          type: 'bullets',
        }"
        :modules="modules"
        class="h-20"
      >
        <SwiperSlide v-for="data in dataFeature">{{ data }}</SwiperSlide>
      </Swiper>
    </section>
    <section class="berlangganan">
      <p class="text-lg font-bold mb-4">Berlangganan</p>
      <div class="flex flex-col gap-2">
        <BoxPaket
          v-for="data in dataPaket"
          :bg="data.background"
          :title="data.title"
        >
          <Swiper
            :pagination="{
              type: 'bullets',
            }"
            :modules="modules"
            style="padding-bottom: 10px !important"
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
        </BoxPaket>
      </div>
    </section>
    <!-- <Card color="#00f" title="Stream Value" textContent="Up to 50Mbps" /> -->
  </main>
</template>
