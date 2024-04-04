<template>
  <div class="swiper__container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="t in contentList" :key="t">
        <div class="wrap-content">
          <div class="content">
            <div class="txt">
              <h1 class="text-xl">
                {{ t.title }}
              </h1>
              <p class="fz16">
                {{ t.txt }}
              </p>
            </div>
            <img :src="`/img/${t.url}.jpg`" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Navigation, Pagination, Scrollbar, A11y];
const contentList = [
  {
    title: "Автоматическая холодная листовая штамповка",
    txt: "Строительные крепления, монтажные кляймеры, клипсы, электрические зажимы и контакты, нестандартные и стандартные шайбы, уголки, колпачки, держатели, прижимы и прочее прочее. Наша основная работа. Автоматической штамповкой изготавливаются детали крупных партий. Этот метод обработки металлов дешевле, быстрее и удобнее иных видов обработки металлов.",
    url: "172950595_xl_normal_none",
  },
  {
    title: "Ручная холодная листовая штамповка",
    txt: "Всё, что невозможно или неудобно изготавливать автоматической штамповкой. Сюда входит работа небольшими партиями, вытяжка и глубокая вытяжка, изготовление деталей с резьбой, петлёй или отбортовкой.",
    url: "60758243_xl_normal_none",
  },
  {
    title: "Холодная объемная штамповка",
    txt: "Нечастый вид штамповки, который мы освоили и успешно применяем. Сюда относятся изделия большой толщины, детали с утонением/утолщением, формированием буртиков, пуклей, клеймом и прочими техническими элементами, требующими подобной работы.",
    url: "60758243_xl_normal_none",
  },
  {
    title: "Серийная сварка изделий из черных и цветных металлов",
    txt: "Для нужд строительства сварочный цех нашего завода серийно изготавливает закладные детали, металлические опоры, массивные уголки, основания, сварные фланцы и прочие изделия с требуемым повторяющимся качеством, в большом объеме, недоступном для «гражданских» сварочных работ.",
    url: "123769407_xl_normal_none",
  },
  {
    title: "Контактная сварка изделий",
    txt: "При сварке тонколистовых изделий недопустим объемный сварной шов или требуется более высокая скорость сварного соединения деталей. В таких случаях применяется контактная сварка, сохраняющая декоративный вид изделий и ускоряющая процесс сварки в несколько раз.",
    url: "120325950_xl_normal_none",
  },
  {
    title: "Гибка, рубка, перфорирование тонколистовых габаритных изделий",
    txt: "Изготовление отливов, рам, защитных экранов и кожухов, корпусов и прочих подобных изделий.",
    url: "131415065_xl_normal_none",
  },
  {
    title: "Литье пластиковых изделий",
    txt: "Цех пластикового литья с термопластавтоматами с объемом впрыска до 400см3",
    url: "153298055_xl_normal_none",
  },
  {
    title:
      "Проектирование и моделирование изделий и станочных оснасток для ихпроизводства.",
    txt: "Для создания изделия необходим пакет чертежей на деталь и оснастку. Это работа конструкторского отдела завода. Полный инжиниринговый цикл – от разработки изделия, до проектирования техпроцесса изготовления продукции. При необходимости, внесем изменения в изделие, спроектируем новое, предложим замену материала, рассчитаем крепеж на допустимые нагрузки, посчитаем устойчивость к атмосферным воздействиям и проведем испытания.",
    url: "157407547_xl_normal_none",
  },
  {
    title: "Планово-экономическое обоснование запуска новых изделий",
    txt: "Несмотря на одинаковое количество материалов, использованных в производстве, в зависимости от поставленной задачи, крепеж может стоить по-разному. Если Вам требуются изделия в небольшом количестве, нет смысла изготавливать сложную и дорогую оснастку, гораздо дешевле и проще будет произвести заданное в ручных приспособлениях – так и сроки меньше, и есть место для экономии. Если у Вас потребность в массовой продукции, имеет смысл готовиться к большой работе, тут потребуется штамп-дублёр, а, может, и два. Всё это, со сроками и ценами Вам предоставит наш менеджер.",
    url: "50690842_xl_normal_none",
  },
  {
    title:
      "Инженерное сопровождение изделия (расчет усилий, допустимых нагрузок, модификаций)",
    txt: "В нашей практике, мы иногда сталкиваемся с необходимостью внесения небольших изменений в конструкцию изделия. Скорее всего, для этого не придётся изменять всю оснастку. Достаточно изменить лишь некоторые части. Мы всегда открыты новому, это – залог эволюционного развития.",
    url: "80331336_xl_normal_none",
  },
];
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.swiper__container {
  display: flex;
  align-items: center;
  height: 100%;
  background: #000;
  background-image: linear-gradient(#000000b3, #000000b3),
    url(https://1zd.netlify.app/assets/Stamping-header-LdjVYYQr.jpg);
  background-size: cover;
}
.wrap-content {
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.video {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  object-fit: cover;
  filter: brightness(70%);
}
.swiper-button-next {
  color: #ffae00;
  user-select: none;
}
.swiper-button-prev {
  color: #ffae00;
  user-select: none;
}
.swiper-pagination-bullet {
  background: #ffae00;
}
.content {
  background: rgb(250, 121, 15);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @include fluid("max-height", 600);
  img {
    filter: blur(10px);
    @include fluid("margin-left", 20);
    @include fluid("max-width", 700);
  }
}
.text-xl {
  @include fluid("margin-bottom", 20);
  @include fluid("font-size", 26);
  color: #002f6c;
  font-weight: 600;
}
.txt {
  z-index: 2;
  @include fluid("margin-left", 150);
  .fz16 {
    @include fluid("font-size", 16);
  }

  p {
    @include fluid("margin-top", 30);
    @include fluid("font-size", 24);
  }
}
@media (min-width: 200px) and (max-width: 461px) {
  .txt {
    z-index: 2;
    @include fluid("margin-left", 50);
    .fz16 {
      @include fluid("font-size", 15);
    }

    p {
      @include fluid("margin-top", 30);
      @include fluid("font-size", 22);
    }
  }
}
@media (min-width: 200px) and (max-width: 600px) {
  .content {
  img {
    @include fluid("margin-left", 20);
    @include fluid("max-width", 500);
  }
}
}
</style>
