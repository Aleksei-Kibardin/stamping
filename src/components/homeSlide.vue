<template>
  <div class="title__container">
    <h1 class="title">
      <span>Первый завод-</span>Сложные штампы, простые решения.
    </h1>
    <h2 class="sub-title">
      <span>
        До 800 изделий в минуту на одной линии <br /><br />
        От цветных металлов до нержавеющей стали <br /><br />
        Сборка, фасовка, упаковка.
      </span>
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
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  @include fluid("margin-left", 100);
  @include fluid("border-radius", 20);
  width: 50%;
  z-index: 3;
  span {
    color: #fff;
  }
}
.title {
  color: #ffd400;
  font-weight: 800;
  @include fontFluid("font-size", 80);
  text-shadow: 2px 1px #000000;
}
.sub-title {
  @include fluid("margin-top", 40);
  color: #ffd400;
  font-weight: 500;
  text-shadow: 2px 1px #000000;
  @include fontFluid("font-size", 40);
}
@media (min-width: 200px) and (max-width: 1000px) {
  .title__container {
    width: 80%;
    margin-left: 0;
  }
  .title{
    @include fontFluid("font-size", 50);
  }
  .sub-title {
  @include fontFluid("font-size", 30);
}
}
.videoOpacity {
  opacity: 1;
}
</style>
