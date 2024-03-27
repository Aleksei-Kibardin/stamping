<template>
  <h1 class="title">Крупносерийное производство металлических изделий</h1>
  <div class="bg"></div>
  <!-- <video class="video" autoplay muted loop :style="{ opacity: scrollCount }">
    <source src="../assets/Холодная штамповка металла.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video> -->
</template>

<script setup></script>

<style scoped lang="scss">
@import "../fluid.sass";
.bg {
  width: 100%;
  height: 100%;
  background-image: url(https://dynamicdiesupply.com/wp-content/uploads/2023/03/dyna6.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.video {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  object-fit: cover;
  filter: brightness(70%);
}
.title {
  color: #ffd400;
  position: absolute;
  @include fluid("margin-left", 170);
  font-size: 4em;
  z-index: 3;
  top: 30%;
  width: 50%;
}
</style>
