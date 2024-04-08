<template>
  <div class="title__container">
    <h1 class="title">
      <span>Первый завод</span>-Сложные штампы, простые решения.
    </h1>
    <h2 class="sub-title">
      До 800 изделий в минуту на одной линии От цветных металлов до дуплекса
      Сборка, фасовка, упаковка.
    </h2>
  </div>

  <!-- <div class="bg"></div> -->
  <video class="video" autoplay muted loop :class="{ videoOpacity: opacity }">
    <source src="../assets/Холодная штамповка металла.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
</template>

<script setup>
import { ref } from "vue";

let opacity = ref(false);

setTimeout(() => {
  opacity.value = true;
}, 2000);
</script>

<style scoped lang="scss">
@import "../fluid.sass";

.video {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  object-fit: cover;
  opacity: 0;
  filter: brightness(70%);
  transition: all 1s ease 0s;
}
.title__container {
  padding: 10px;
  background: #2e2e2e6c;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  @include fluid("margin-left", 100);
  @include fluid("border-radius", 20);
  width: 60%;
  top: 30%;
  z-index: 3;
  span {
    color: #fff;
  }
}
.title {
  color: #ffd400;
  @include fontFluid("font-size", 80);
}
.sub-title {
  @include fluid("margin-top", 40);
  color: #ffd400;
  @include fontFluid("font-size", 40);
}
.videoOpacity {
  opacity: 1;
}
</style>
