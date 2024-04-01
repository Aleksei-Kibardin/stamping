<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide>
      <div class="swiper__container">
        <div class="finger"></div>
        <div><h1>Делаем не только качественно, но и красиво</h1></div>
      </div>
    </swiper-slide>
    <swiper-slide class="swiper__img" v-for="index in 16" :key="index"
      ><img class="img" :src="`/img/${index}.png`" alt=""
    /></swiper-slide>
  </swiper>
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

<style lang="scss" scoped>
@import "../fluid.sass";
img {
  pointer-events: none;
}
.swiper__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #fec401;
}
.finger {
  position: absolute;
  background-image: url(https://alvarotrigo.com/fullPage/imgs/touch-responsive.jpg);
  align-self: flex-start;
  transform: rotate(90deg);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  z-index: 10;
  height: 500px;
  width: 500px;
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
.swiper__img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fec401;
  img{
    max-width: 800px;
    max-height: 800px;
  }
}
</style>
