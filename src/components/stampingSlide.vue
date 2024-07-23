<template>
  <div class="swiper__container">
    <div class="wrap-content">
      <div class="content">
        <div class="tab-container">
          <div class="tab--list">
            <div
              class="tab-btn"
              v-for="t in contentList"
              :key="t"
              :class="{ activeTab: currentTab.title === t.title }"
              @click="currentTab = t"
            >
              {{ t.title }}
              <div class="ancor-line"></div>
            </div>
          </div>
        </div>
        <div class="current-desc">
        <h4>О услуге:</h4>
        <p>{{ currentTab.txt }}</p>
      </div>
        <img :src="`/img/${currentTab.url}.jpeg`" alt="" />
      </div>
      <!-- <div class="current-desc">
        <h4>О услуге:</h4>
        <p>{{ currentTab.txt }}</p>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contentList = [
  {
    title: "Автоматическая холодная листовая штамповка ",
    txt: "Строительные крепления, монтажные кляймеры, клипсы, электрические зажимы и контакты, нестандартные и стандартные шайбы, уголки, колпачки, держатели, прижимы и прочее прочее. Наша основная работа. Автоматической штамповкой изготавливаются детали крупных партий. Этот метод обработки металлов дешевле, быстрее и удобнее иных видов обработки металлов.",
    url: "Холодная листовая штамповка",
  },
  {
    title: "Ручная холодная листовая штамповка",
    txt: "Для небольших партий продукции рекомендуется ручная штамповка. Листовая холодная штамповка применяется для операций глубокой и обычной вытяжки, производства деталей с петлями, резьбой, отбортовкой. Для изготовления также могут применяться и другие операции, которые требуют ручного труда оператора и строгого визуального контроля.",
    url: "Ручная",
  },
  {
    title: "Нанесение защитных покрытий",
    txt: "Наши услуги по нанесению защитных покрытий обеспечивают долговечность и надежность вашей продукции, защищая её от повреждений и обеспечивая сохранность в эксплуатации.",
    url: "Покраска",
  },
  {
    title: "Серийная сварка изделий из черных и цветных металлов",
    txt: "Для серийного выпуска металлических опор, закладных, уголков, сварных фланцев, деталей основания используются автоматизированные посты ручной и автоматизированной сварки. Такие изделия отличаются высокой геометрической стабильностью, постоянным качеством стыков и швов. Для выпуска используется серийная сварка, что сокращает время на выпуск продукции с сохранением качества.  ",
    url: "Сварка",
  },
  {
    title: "Фасовка",
    txt: "Мы гарантируем точное соблюдение всех стандартов качества и безопасности, обеспечивая надежную защиту вашей продукции во время транспортировки и хранения.",
    url: "фасовка",
  },
  {
    title:
      "Проектирование Автоматизированных Линий Штамповки",
    txt: "Мы предлагаем инновационные решения по созданию и изготовлению автоматизированных линий штамповки, обеспечивая высокую эффективность и надежность в производстве деталей. ",
    url: "проект",
  },
  {
    title:
      "Производство Штампов для Холодной Листовой Штамповки ",
    txt: "Мы производим высококачественные штампы, для холодной листовой штамповки. Наши штампы обеспечивают точность и эффективность производства деталей в различных отраслях промышленности. ",
    url: "60758243_xl_normal_none",
  },
  {
    title:
      "Прототипирование и реверс-инжиниринг",
    txt: "Предоставляем предварительные прототипы с использованием различных технологий внутри завода. Мы создаем прототипы, используя лазерную резку, механическую обработку или штамповку деталей в соответствии с вашими потребностями.",
    url: "реверс",
  },
];
const currentTab = ref(contentList[0]);
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.swiper__container {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  background: #000;
  background-image: linear-gradient(#000000b3, #000000b3),
    url(../assets/3page.jpg);
  background-size: cover;
}
.wrap-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 85px;
  width: 100vw;
  height: 100vh;
}
.content {
  background: rgba(31, 31, 31, 0.596);
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  img {
    @include fluid("margin-left", 20);
    @include fluid("max-width", 700);
  }
}
.bg {
  display: none;
}
.current-desc {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  @include fluid("font-size", 18);
  @include fluid("padding", 20);
  @include fluid("gap", 20);
  color: #fff;
}
.tab--list {
  display: flex;
  flex-direction: column;
  @include fluid("gap", 20);
  position: relative;
  @include fluid("margin-top", 50);
  @include fluid("margin-left", 20);
}
.tab-btn {
  text-align: left;
  @include fluid("font-size", 18);
  @include fluid("width", 400);
  cursor: pointer;
  transition: all 0.2s ease 0.01s;
  border-left: 3px #ffd400 solid;
  padding-left: 10px;
}
.activeTab {
  color: #ffd400;
  font-weight: 500;
  .ancor-line {
    opacity: 1;
    width: 100%;
  }
}
.tab-btn:hover {
  color: #ffd400;
}
@media (min-width: 200px) and (max-width: 461px) {
  .txt {
    z-index: 2;
    @include fluid("margin-left", 50);
  }
  .current-desc {
    @include fluid("padding-top", 150);
    justify-content: flex-start;
  }
}
@media (min-width: 200px) and (max-width: 600px) {
  .content {
    flex-direction: column;
    @include fluid("gap", 70);
    max-height: none;
    .txt {
      margin: 0;
      padding: 40px;
    }
    img {
      @include fluid("margin-left", 20);
      @include fluid("max-width", 500);
    }
    .text-xl {
      @include fluid("font-size", 40);
      color: rgb(250, 121, 15);
      font-weight: bold;
    }
    .fz16 {
      @include fluid("font-size", 27);
      color: #fff;
      font-weight: bold;
    }
  }
  .current-desc {
    @include fluid("padding-top", 150);
    justify-content: flex-start;
  }
}
</style>
