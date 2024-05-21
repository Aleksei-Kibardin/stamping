<template>
  <div class="map">
    <img :src="`${url}`" alt="" />
    <div class="ml">
      <h4>Первый завод © 2024</h4>
      <p>Адрес производства: г. Санкт-Петербург, Лиговский пр-т, 52К</p>
      <p>Телефон: +7(901)971-46-64</p>
      <p>Электронная почта: spb9714664@yandex.ru</p>
    </div>
  </div>
</template>

<script setup>
const url =
  "https://static-maps.yandex.ru/v1?ll=30.358134,59.925083&size=650,450&z=16&pt=30.358134,59.925083,pm2rdl&apikey=625b26d9-342a-4cd9-a91b-6af62e134a40";
</script>

<style scoped lang="scss">
@import "../fluid.sass";
.map {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(233, 233, 233);
  width: 100vw;
  height: 100vh;
  img {
    @include fluid("width", 650);
    @include fluid("height", 500);
  }
}
.ml {
  @include fluid("margin-left", 100);
  @include fluid("margin-top", 40);
  p {
    @include fluid("margin-top", 10);
  }
  h4{
    @include fluid("font-size", 18);
  }
}
@media (min-width: 200px) and (max-width: 600px) {
  .map {
    flex-direction: column;
  }
}
</style>
