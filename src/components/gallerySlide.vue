<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide class="swiper__img" v-for="index in 22" :key="index"
      ><img class="img" :src="`/img/${index}.jpg`" alt=""
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
.swiper-button-next {
  color: #ffae00;
  user-select: none;
}
.swiper__img {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  img {
    @include fluid("max-width", 1200);
    @include fluid("height", 800);
  }
}
</style>
