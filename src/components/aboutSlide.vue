<template>
  <marquee class="marquee" behavior="scroll" direction="left"
    >«Бесшовное» производство, Инженерное сопровождение, Работаем с любыми
    видами металла</marquee
  >
  <div class="container">
    <div class="content">
      <h1 class="title">О заводе</h1>
      <p class="txt">
        Первый завод – предприятие полного цикла штамповочных работ. Если Вы
        ищете подрядчика для изготовления изделий методом холодной листовой
        штамповки – Вы пришли по адресу! Работаем с 1994 года, находимся в
        Санкт-Петербурге. Просто позвоните нам и пришлите
        рисунок/эскиз/чертеж/фотографию изделия. Мы проведём прочностные
        расчёты, подумаем о технологичности, о рабочих характеристиках,
        рассчитаем стоимость запуска и производства данного изделия. При
        необходимости, организуем фасовку продукции в фирменную упаковку с Вашим
        логотипом и дизайном. Помимо холодной листовой штамповки, мы
        осуществляем прокат тонких профилей, холодную объемную штамповку, сварку
        больших партий из черных и нержавеющих сталей, контактную сварку, сборку
        изделий, литье пластмасс.
      </p>
    </div>
  </div>
  <div class="bg"></div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../fluid.sass";
.bg {
  width: 100%;
  height: 100%;
  background: #0798ec;
}
.container {
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  font-size: 20px;
  height: 80%;
  width: 100%;
  gap: 50px;
  top: 13%;
  .content {
    position: relative;
    width: 73%;
    height: 100%;
    align-self: center;
    .title {
      color: #ffd400;
      text-align: end;
      font-size: 5rem;
      @include fluid("font-size", 60);
      z-index: 3;
      align-self: flex-end;
    }
    .txt {
      @include fluid("font-size", 24);
      font-size: 20px;
      position: absolute;
      bottom: 30%;
      width: 60%;
    }
  }
}
.marquee {
  position: absolute;
  left: -20%;
  top: 50%;
  @include fluid("font-size", 20);
  transform: rotate(-90deg);
  @include fluid("letter-spacing", 5);
  width: 50%;
}
</style>
