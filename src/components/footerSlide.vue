<template>
  <div class="map">
    <img :src="`${url}`" alt="" />
    <div class="ml">
      <p>Адрес: Лиговский проспект, 52литО</p>
      <p>Почта: xxxxxxxx@mail.com</p>
      <p>Почта: xxxxxxxx@mail.com</p>
      <p>Почта: xxxxxxxx@mail.com</p>
      <p>Телефон: 8800553535</p>
      <p>Телефон: 8800553535</p>
      <p>Телефон: 8800553535</p>
    </div>
  </div>
</template>

<script setup>
const url =
  "https://static-maps.yandex.ru/v1?ll=30.360425,59.923946&size=650,450&z=16&pt=30.360425,59.92394,pm2rdl&apikey=625b26d9-342a-4cd9-a91b-6af62e134a40";
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
}
@media (min-width: 200px) and (max-width: 600px) {
  .map{
    flex-direction: column;
  }
}
</style>
