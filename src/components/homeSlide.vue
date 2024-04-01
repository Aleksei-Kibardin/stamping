<template>
  <div class="title__container">
    <h1 class="title"> <span>Штамповка.рф</span>-Сложные штампы, простые решения.</h1>
    <h2 class="sub-title">
      До 800 изделий в минуту на одной линии От цветных металлов до дуплекса
      Сборка, фасовка, упаковка.
    </h2>
  </div>

  <!-- <div class="bg"></div> -->
  <video class="video" autoplay muted loop :style="{ opacity: scrollCount }">
    <source src="../assets/Холодная штамповка металла.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
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
  filter: brightness(70%);
}
.video {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  object-fit: cover;
  filter: brightness(70%);
}
.title__container{
  position: absolute;
  @include fluid("margin-left", 170);
  top: 30%;
  width: 50%;
  z-index: 3;
  span{
    color: #ff7b00;
  }
}
.title {
  color: #ffd400;
  font-size: 4em;
}
.sub-title{
  @include fluid("margin-top", 40);
  color: #ffd400;
}
</style>
