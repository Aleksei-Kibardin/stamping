<template>
  <div class="swiper__container">
    <swiper
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

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<style>
.swiper__container {
  display: flex;
  align-items: center;
  height: 100%;
  background: #000;
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
.swiper-pagination-bullet{
    background: #ffae00;
}
</style>
