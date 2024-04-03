<template>
  <div class="clients__container">
    <div class="wrap-process">
      <h1>Этапы работы</h1>
      <div class="process">
        <div class="grid-process1">
          <h2>Коммерческое обоснование</h2>
          <p>
            На основании Ваших требований к продукту, мы выработаем оптимальный
            алгоритм работы. На его основании определим затраты на материалы,
            производство и упаковку продукции. После чего мы составим
            коммерческое предложение с подробным разъяснением всего
            технологического процесса и сроков производства.
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
        <div class="grid-process2">
          <h2>Старт</h2>
          <p>
            После заключения договора мы приступаем к проектированию оснастки,
            согласовываем сроки поставки сырья, упаковки и комплектующих с
            субподрядчиками. От сложности изделия и процесса его производства
            зависят сроки проектирования, изготовления оснастки, и
            подготовительных работ. Обычно полный процесс производства от
            чертежа до упаковки занимает от одного до трёх месяцев.
          </p>
        </div>
        <div class="grid-process3">
          <h2>Процесс работы</h2>
          <p>
            После создания оснастки, и утверждения опытного образца мы
            приступаем к работе. Средний срок производства установочной партии –
            две недели. Документальное оформление не займет много времени, в
            комплекте с документами мы можем вложить сертификаты на
            использованные материалы и другие необходимые справки и лицензии.
          </p>
        </div>
        <div class="grid-process4">
          <h2>Поставки крупносерийных партий</h2>
          <p>
            Начиная с этого этапа Вы просто заказываете очередную партию товаров
            по мере необходимости. По согласованию с Вами мы можем формировать
            складской запас, и отгружать день-в-день, либо же производить
            продукцию по мере поступления заказов на неё. Все вопросы по
            поддержанию и обновлению оснастки, заказу упаковки, соответствию
            маркировок мы берём на себя.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../fluid.sass";
.clients__container {
  background-color: #6b00ff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.wrap-process {
  height: 50vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrap-process h1 {
  @include fluid("padding-bottom", 20);
}
.process {
  width: 60%;
  height: 30vw;
  display: grid;
  @include fluid("font-size", 16);
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
  height: 100%;
  background-color: white;
  @include fluid("width", 2);
  z-index: 1;
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
  @include fluid("font-size", 25);
  border-radius: 50%;
}
.line-item {
  z-index: 3;
}


@media (min-width: 200px) and (max-width: 800px) {
  .wrap-process {
    position: relative;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrap-process h1 {
    font-size: 19px;
    padding-bottom: 40px;
  }
  .process {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    font-size: 14px;
  }
  .process h2 {
    padding-bottom: 10px;
  }
  .midle-line {
    display: none;
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  .wrap-process h1 {
    font-size: 14px;
  }
  .process {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    font-size: 10px;
  }
}
</style>
