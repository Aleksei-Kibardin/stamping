<template>
  <div class="clients__container">
    <div class="wrap-process">
      <h1>4 шага к поставкам</h1>
      <div class="process">
        <div class="grid-process1 grid-txt">
          <h2>Проектирование производственной линии</h2>
          <p>
            На основании Ваших требований к продукту и особенностей
            производственного процесса мы разрабатываем оптимальный алгоритм
            работы. По созданной технологической карте производства определим
            затраты на сырье, производство и упаковку. Результатом калькуляций
            станет коммерческое предложение с подробным разъяснением всего
            технологического процесса и сроков производства. В зависимости от
            сложности изделия, срок согласования деталей занимает от одного дня
            до двух недель.
          </p>
        </div>
        <div class="midle-line">
          <div class="line-item">
            <p>1</p>
          </div>
          <div class="line-item">
            <p>2</p>
          </div>
          <div class="line-item">
            <p>3</p>
          </div>
          <div class="line-item">
            <p>4</p>
          </div>
        </div>
        <div class="grid-process2 grid-txt">
          <h2>Постройка производственной линии</h2>
          <p>
            После заключения договора мы приступаем к проектированию и
            производству оснастки, согласовываем сроки поставки сырья, упаковки
            и комплектующих с субподрядчиками. На этом же этапе производим
            согласование дизайна упаковки. От сложности изделия и процесса его
            производства зависят запуска линии. В среднем, полный цикл запуска
            производства от чертежа до фасовки готовой продукции занимает от
            одного до трёх месяцев.
          </p>
        </div>
        <div class="grid-process3 grid-txt">
          <h2>Пусконаладочные работы</h2>
          <p>
            После создания оснастки собирается производственная линия и
            производятся опытные образцы серийной продукции. После согласования
            образцов, линия запускается в непрерывную работу. Средний срок
            производства установочной партии – две недели.
          </p>
        </div>
        <div class="grid-process4 grid-txt">
          <h2>Коммерческие поставки</h2>
          <p>
            На этом этапе производственная линия налажена и работает в штатном
            режиме. Все работы по поддержанию работоспособности линии,
            обновлению оснастки и ремонту штампов мы выполняем самостоятельно.
            Вы просто размещаете заказы на производство и по истечении 5-7
            рабочих дней забираете готовую партию. По согласованию с Вами мы
            можем формировать складской запас, и отгружать день-в-день.
          </p>
        </div>
      </div>
    </div>
    <video class="video" autoplay muted loop :class="{ videoOpacity: opacity }">
      <source src="../assets/video.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../fluid.sass";

.video {
  filter: brightness(40%);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  object-fit: cover;
}
.clients__container {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.wrap-process {
  position: relative;
  z-index: 1;
  @include fluid("margin-top", 120);
  height: 80vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrap-process h1 {
  @include fluid("padding-bottom", 20);
}
.process {
  width: 80%;
  display: grid;
  @include fluid("font-size", 17);
  grid-template-areas:
    "a a a m . . ."
    ". . . m b b b"
    "c c c m . . ."
    ". . . m d d d";
}
.midle-line {
  display: grid;
  align-self: stretch;
  grid-area: m;
  position: relative;
  @include fluid("margin-right", 20);
  @include fluid(" margin-left", 20);
}
.midle-line::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 80%;
  background-color: white;
  @include fluid("width", 2);
  z-index: 1;
}
.grid-txt {
  text-shadow: 1px 2px #000000;
  p{
    @include fluid("margin-top", 10);
  }
}
.grid-process1 {
  grid-area: a;
}
.grid-process2 {
  grid-area: b;
}
.grid-process3 {
  grid-area: c;
}
.grid-process4 {
  grid-area: d;
}
.line-item p {
  text-align: center;
  color: #000;
  background-color: #fff;
  @include fluid("width", 40);
  @include fluid("height", 40);
  @include fluid("font-size", 26);
  border-radius: 50%;
}
.line-item {
  z-index: 3;
}
@media (min-width: 451px) and (max-width: 1000px) {
  .process {
    @include fluid("font-size", 20);
    height: 100%;
  }
  .wrap-process {
    align-self: center;
    @include fluid("margin-top", 150);
    height: 80%;
  }
}
@media (min-width: 200px) and (max-width: 450px) {
  .wrap-process {
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
  .wrap-process h1 {
    @include fluid("font-size", 50);
    @include fluid("margin-top", 60);
    @include fluid("padding-bottom", 20);
  }
  .process {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    @include fluid("font-size", 25);
  }
  .process h2 {
    @include fluid("font-size", 30);
    padding-bottom: 10px;
  }
  .midle-line {
    display: none;
  }
}
</style>
