<template>
  <h1 class="viedo__title">
    Крупносерийное производство металлических изделий
  </h1>
  <video class="video" autoplay muted loop :style="{ opacity: scrollCount }">
    <source src="../assets/Холодная штамповка металла.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
</template>

<script setup></script>

<style scoped lang="scss">
.video {
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    object-fit: cover;
    filter: brightness(70%);
}
.viedo__title {
  color: #ffd400;
  position: absolute;
  margin-left: 100px;
  font-size: 4em;
  z-index: 3;
  top: 30%;
  width: 50%;
}
</style>
