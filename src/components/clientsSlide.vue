<template>
  <div class="clients__container">
    <div class="client__content">
      <div class="logo__container">
        <h1>Наши клиенты</h1>
        <div class="logos">
          <img src="/img/google-128x128.png" alt="" />
          <img src="/img/pngegg.png" alt="" />
          <img src="/img/apple.png" alt="" />
          <img src="/img/mit.png" alt="" />
          <img src="/img/google-128x128.png" alt="" />
          <img src="/img/pngegg.png" alt="" />
          <img src="/img/apple.png" alt="" />
          <img src="/img/mit.png" alt="" />
          <img src="/img/pngegg.png" alt="" />
        </div>
      </div>
      <div class="desc__container">
        <h1>Отзывы о нас</h1>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
        >
          <swiper-slide class="desc"
            ><h2>Текст</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p></swiper-slide
          >
        </swiper>
      </div>
    </div>
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

<style lang="scss" scoped>
@import "../fluid.sass";
.clients__container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.client__content {
  @include fluid("padding", 10);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 70vw;
  height: 50vh;
  display: flex;
}
.logo__container {
  width: 50%;
  .logos {
    display: flex;
    flex-wrap: wrap;
    @include fluid("gap", 50);
  }
  img {
    @include fluid("width", 100);
    @include fluid("height", 100);
  }
}
.desc__container {
  display: flex;
  @include fluid("gap", 30);
  flex-direction: column;
  width: 50%;
}
.desc {
  display: flex;
  @include fluid("gap", 30);
  flex-direction: column;
}
</style>
