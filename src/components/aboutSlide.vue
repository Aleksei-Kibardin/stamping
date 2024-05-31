<template>
  <div class="container">
    <div class="content">
      <div class="title--wrap">
        <h1 class="title">
          Производственно-обрабатывающее предприятие «Первый Завод» – это:
        </h1>
        <p class="title-desc">
          Филиал Соржинского инструментального завода, занимающийся
          автоматической листовой и ручной объемной штамповке.
        </p>
      </div>

      <div class="list">
        <ol>
          <li>
            <span>Объём:</span> Крупносерийное производство металлоизделий,
            деталей и комплектующих по чертежа или образцам заказчика.
          </li>
          <li>
            <span>Скорость:</span> Массовая штамповка на высокопроизводительных
            прессах и современных станках.
          </li>
          <li>
            <span>Гибкость:</span> Выпуск малыми и средними партиями сложных
            деталей, привлечение к работам квалифицированных мастеров и
            инженеров.
          </li>
          <li>
            <span>Комплексные задачи:</span> штамповка, мехобработка изделий,
            закалка объёмная и индукционная, гальваника
          </li>
          <li>
            <span>Опыт:</span> Реализация программ реинжиниринга,
            проектирование, прототипирование, и импортозамещения.
          </li>
        </ol>
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
  @include fluid("gap", 50);
  top: 13%;
  .content {
    position: relative;
    text-shadow: 2px 1px #000000;
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
        span {
          font-weight: 700;
          color: #ffd400;
        }
      }
    }
  }
}
.title--wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-desc {
  @include fluid("width", 880);
  @include fluid("font-size", 29);
  font-weight: 700;
}
@media (max-width: 350px) {
  .title-desc {
    @include fluid("width", 660);
  }
}
</style>
