<template>
  <div class="container">
    <div class="content">
      <div class="title--wrap">
        <h1 class="title">
          Производственно-обрабатывающее предприятие «Первый Завод» – это:
        </h1>
        <p class="title-desc">
          обособленное подразделение
          <a class="link" href="">Соржинского инструментального завода</a>
          специализирующееся на автоматической листовой и ручной объёмной
          штамповке
        </p>
      </div>

      <div class="list">
        <ul>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/8486/8486609.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Объём:</span
            >
            <p>Крупносерийное производство металлических изделий</p>
          </li>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/12225/12225137.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Гибкость:</span
            >
            <p>Производство изделий малыми и средними партиями</p>
          </li>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/13665/13665693.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />
              Исследования:</span
            >
            <p>
              Опытное производство изделий, проектирование, прототипирование,
              инжиниринг
            </p>
          </li>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/4258/4258545.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Технологии:</span
            >
            <p>
              Компонентное производство - мехобработка изделий, закалка объёмная
              и индукционная, гальваника
            </p>
          </li>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/15570/15570022.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Контроль качества:</span
            >
            <p>
              Сквозной контроль контролируемых размеров калибрами и
              измерительным инструментом. Документирование. Опытные и
              контрольные образцы..
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg"></div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../fluid.sass";
.link{
  color: #fff;
  text-decoration-line:underline;
}
.container {
  display: flex;
  align-items: center;
  position: absolute;
  color: #fff;
  flex-direction: column;
  height: 80%;
  width: 100%;
  @include fluid("font-size", 18);
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
      @include fluid("font-size", 35);
      z-index: 3;
    }
    .txt {
      @include fluid("margin-top", 70);
      @include fluid("font-size", 28);
      text-align: justify;
      bottom: 30%;
      width: 60%;
    }
    .list {
      @include fluid("margin-top", 70);
      
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
  @include fluid("width", 1100);
  @include fluid("font-size", 29);
  font-weight: 700;
}
li {
    list-style-type: none;
    @include fluid("margin-top", 20);
    @include fluid("font-size", 18);
    p {
      @include fluid("margin-left", 50);
    }
  }
  .t {
    display: flex;
    width: 50%;
    @include fluid("gap", 5);
    font-weight: 700;
  }
  img {
    @include fluid("height", 35);
    @include fluid("width", 35);
    filter: contrast(0%) sepia(50%) hue-rotate(14deg) brightness(1) saturate(1019%);
  }
@media (max-width: 350px) {
  .title-desc {
    @include fluid("width", 660);
  }
}
</style>
