<template>
  <marquee class="marquee" behavior="scroll" direction="left"
    >«Бесшовное» производство, Инженерное сопровождение, Работаем с любыми
    видами металла</marquee
  >
  <div class="container">
    <div class="content">
      <h1 class="title">Предприятие штамповка РФ это:</h1>
      <div class="list">
        <ul>
          <li>Производство деталей согласно образцам и чертежам;</li>
          <li>Массовая штамповка на современных станках и пресах.</li>
          <li>Малые партии сложных деталей благодаря опыту инженеров, творческому подходу и мастерству</li>
          <li>Решение комплексных задач: штамповка, обработка, гальваника, термообработка.</li>
          <li>Программы импортозамещения и реинжиниринга.</li>
        </ul>
      </div>
      <div class="list">
        <h2>3 шага до начала производства:</h2>
        <ul>
          <li>Направление чертежа\образца продукции</li>
          <li>Согласование требуемых характеристик готового продукта</li>
          <li>Заключение договора и старт производства</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg"></div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../fluid.sass";
.container {
  display: flex;
  align-items: center;
  position: absolute;
  color: #fff;
  flex-direction: column;
  font-size: 20px;
  height: 80%;
  width: 100%;
  gap: 50px;
  top: 13%;
  .content {
    position: relative;
    text-shadow: 1px 1px #000000;
    width: 73%;
    height: 100%;
    align-self: center;
    .title {
      color: #ffd400;
      text-align: center;
      font-size: 5rem;
      @include fluid("font-size", 60);
      z-index: 3;
      align-self: flex-end;
    }
    .txt {
      @include fluid("margin-top", 70);
      @include fluid("font-size", 28);
      text-align: justify;
      bottom: 30%;
      width: 60%;
    }
    .list {
      @include fluid("margin-top", 100);
      h2 {
        @include fluid("font-size", 30);
      }
      li {
        @include fluid("margin-left", -15);
        @include fluid("font-size", 24);
      }
    }
  }
}
.marquee {
  color: #fff;
  position: absolute;
  @include fluid("left", -500);
  top: 51%;
  @include fluid("font-size", 20);
  transform: rotate(-90deg);
  @include fluid("letter-spacing", 5);
  @include fluid("width", 1080);
}
</style>
