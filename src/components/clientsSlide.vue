<template>
  <div class="clients__container">
    <div class="wrap-process">
      <h1>Особенности производства</h1>
      <div class="process">
        <div class="grid-process1 grid-txt">
          <h2>
            Проектирование и создание индивидуальной производственной линии
          </h2>
          <p>
            Нашими инженерами будут проведены работы по проектированию и
            созданию индивидуальной производственной линии на основании
            требований и особенностей выпускаемой продукции. Предлагаем
            реализацию полного комплекса задач – от разработки концепции и
            подбора рабочего алгоритма до настройки производственной выпускающей
            линии. Затраты на сырье для выпуска продукции, производство,
            обработку и упаковку рассчитываются на основании согласованной
            технологической карты. По результатам калькуляции составляется
            коммерческое предложение, где подробно указываются особенности
            технологических процессов, сроки и стоимость производства. На
            согласование всех деталей и запуска производства уходит от 1-го дня
            до нескольких недель, что зависит от сложности процессов.
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
          <h2>Построение производственной линии</h2>
          <p>
            После согласования всех деталей и подписания договора приступаем к
            проектированию линии, производству рабочей оснастки. С
            субподрядчиками согласовывает сроки поставки сырья, комплектующих и
            упаковки. С заказчиком согласовываем дизайн упаковки. Сроки запуска
            линии зависят от сложности производимых изделий. На полный запуск в
            среднем требуется 1-3 месяца. Это позволяет провести все работе от
            согласования чертежей до фасовки и отправки готовой продукции
            заказчику.
          </p>
        </div>
        <div class="grid-process3 grid-txt">
          <h2>Пусконаладочные работы</h2>
          <p>
            При создании рабочей оснастки создается автоматизированная
            производственная линия. При необходимости можно наладить выпуск
            опытных образов или серийной продукции, внести изменения. Необходимо
            предварительно все согласовать, после чего производственная линия
            запускается, стартует процесс выпуска изделий с требуемыми
            характеристиками. работа будет непрерывной, что позволяет получать
            продукцию в требуемом объема за короткие сроки. На полную наладку и
            запуск линии для производства партии продукции требуется до двух
            недель.
          </p>
        </div>
        <div class="grid-process4 grid-txt">
          <h2>Коммерческие поставки</h2>
          <p>
            Для проведения коммерческих поставок металлоизделий налажена
            автоматизированная линия. Работающая в штатном режиме. Все работы,
            которые связаны с поддержкой и обслуживанием линии, обновлением
            рабочей оснастки, ремонту и подбору штампов наши сотрудники
            выполняют самостоятельно. Вам надо просто разместить заказ на
            производство определенного типа изделий и через 5-7 дней забрать
            готовую партию с пакетом сопровождающей документации. Под заказ
            доступно формирование складского запаса с определенным объемом,
            проведение отгрузки в определенные даты.
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
  color: #ffffff;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
}
.wrap-process h1 {
  @include fluid("padding-bottom", 20);
}
.process {
  width: 92%;
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
  height: 77%;
  background-color: white;
  @include fluid("width", 2);
  z-index: 1;
}
.grid-txt {
  text-shadow: 1px 2px #000000;
  p {
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
    @include fluid("font-size", 20);
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
