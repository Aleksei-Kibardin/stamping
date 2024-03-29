<template>
  <div class="swiper__container">
    <div @click="(show = true), console.log(show)">Открыть Галерею</div>
    <swiper
      class="swip"
      :class="{ show: show }"
      :modules="modules"
      :slides-per-view="1"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="https://tltartel.ru/wp-content/uploads/2022/03/chto-takoe-shtampovka-metalla-osobennosti-preimushhestva-i-harakteristiki-protsessa-1024x683.jpg"
          alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ref } from "vue";

const modules = [Navigation, Pagination, Scrollbar, A11y];
const show = ref(false);
</script>

<style>
.swip {
  height: 0vh;
  transition: all 1s ease 0s;
}
.show {
  height: 100vh;
}
.swiper__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fec401;
  background-image: url(https://alvarotrigo.com/fullPage/imgs/touch-responsive.jpg);
  background-position: 50% 100%;
  background-repeat: no-repeat;
}
.img {
  width: 100vw;
  height: 100vh;
}
.swiper-button-next {
  color: #ffae00;
  user-select: none;
}
.swiper-button-prev {
  color: #ffae00;
  user-select: none;
}
.swiper-pagination-bullet {
  background: #ffae00;
}
</style>
