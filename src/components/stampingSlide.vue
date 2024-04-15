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
            <img :src="`/img/${t.url}.jpeg`" alt="" loading="lazy" />
            <div
              :style="{ 'background-image': `url(/img/${t.url}.jpeg)` }"
              class="bg"
            ></div>
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
    title: "Автоматические линии холодной листовой штамповки",
    txt: "Для производства крупных партий металлических изделий. Применяется для производства таких изделий как строительный крепеж, электрические зажимы и контакты, нестандартные и стандартные шайбы, уголки, колпачки, держатели, прижимы. Позволяет получить минимальную стоимость единицы продукции при крупносерийном производстве. Благодаря большому опыту наших инженеров и наладчиков, сложный процесс наладки линии происходит в минимально возможные сроки.",
    url: "172950595_xl_normal_none",
  },
  {
    title: "Ручная холодная листовая штамповка",
    txt: "Применяется для производства небольших партий продукции. Часто используется при операциях вытяжки и глубокой вытяжки, для изготовления деталей с резьбой, петлями или отбортовкой, и прочих операциях, требующих визуального контроля.",
    url: "140394721_xl_normal_none",
  },
  {
    title: "Холодная объемная штамповка",
    txt: "Применяется для производства сплошных и полых стержней различных сечений (цилиндрических, многогранных, зубчатых или шлицевых), цилиндрических стаканов с различной конфигурацией дна и стенок, а так же деталей большой толщины, деталей с утолщением, буртиком, пуклей, клеймом и рядом других элементов.",
    url: "60758243_xl_normal_none",
  },
  {
    title: "Серийная сварка изделий из черных и цветных металлов",
    txt: "Посты автоматической и ручной сварки обеспечивают серийный выпуск таких изделий как закладные детали, металлические опоры, массивные уголки, основания, сварные фланцы. Сварные изделия отличаются постоянным качеством швов и геометрической стабильностью за счёт серийного процесса выпуска. ",
    url: "123769407_xl_normal_none",
  },
  {
    title: "Контактная сварка изделий",
    txt: "Используется для формирования минимального сварного шва, при сварке тонколистовых изделий, или для изделий, требующих высокой скорости сварного соединения деталей. Сохраняет декоративный вид поверхности изделия после сварки.",
    url: "120325950_xl_normal_none",
  },
  {
    title: "Гибка, рубка, перфорирование тонколистовых габаритных изделий",
    txt: "Применяется при изготовлении отливов, рам, защитных экранов, кожухов, корпусов и прочих сходных изделий. Работаем как с окрашенными металлами, так и с нержавеющей сталью и цветными металлами.",
    url: "131415065_xl_normal_none",
  },
  {
    title: "Литье пластиковых изделий",
    txt: "Цех пластикового литья с термопластавтоматами с объемом впрыска до 400см3 обеспечивает как производство пластиковых изделий, так и комплектующих для сборки металлопластиковых изделий. ",
    url: "153298055_xl_normal_none",
  },
  {
    title:
      "Проектирование и моделирование изделий и станочных оснасток для ихпроизводства.",
    txt: "Для запуска серийного производства изделия необходим пакет чертежей на продукт и оснастку. Собственное конструкторское бюро завода осуществляет полный инжиниринговый цикл – от разработки и согласования с заказчиком параметров изделия, до моделирования техпроцесса изготовления продукции. Благодаря большому опыту инженеров мы можем подсказать наиболее перспективные модернизации изделия, предложим замену материала, рассчитаем изделие на допустимые нагрузки, посчитаем устойчивость к атмосферным воздействиям и проведем испытания.",
    url: "157407547_xl_normal_none",
  },
  {
    title: "Планово-экономическое обоснование запуска новых изделий",
    txt: "При равном количестве материала стоимость изделия может чувствительно отличатся, в зависимости от метода производства. Если Вам требуются изделия в небольшом количестве, нет смысла изготавливать сложную и дорогую оснастку, гораздо дешевле и проще будет произвести требуемую продукцию в ручных приспособлениях, обеспечивающих быстрый запуск производства и нулевую стоимость оснастки. Для крупносерийного производства постройка нескольких комплектов оснастки, хоть и отложит запуск производства, позволит быстро окупить свою цену за счёт низкой стоимости единицы продукции.",
    url: "50690842_xl_normal_none",
  },
  {
    title:
      "Инженерное сопровождение изделия (расчет усилий, допустимых нагрузок, модификаций)",
    txt: "С течением времени, по ряду причин может потребоваться внесение изменений в конструкцию изделия. Стоит отметить, что в подавляющем большинстве ситуаций внести небольшие модификации в изделие возможно без полной модернизации оснастки. Изготовить пару новых пуансонов, толкателей, модернизировать матрицу и выпускать обновлённую модель продукции.",
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
  margin-top: -100px !important;
}
.content {
  background: rgb(231, 231, 231);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @include fluid("max-height", 600);
  img {
    @include fluid("margin-left", 20);
    @include fluid("max-width", 700);
  }
}
.bg {
  display: none;
}
.text-xl {
  @include fluid("margin-bottom", 20);
  @include fluid("font-size", 26);
  color: rgb(250, 121, 15);;
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
  }
}
@media (min-width: 200px) and (max-width: 600px) {
  .swiper__container{
    background: none;
  }
  .content {
    height: 40%;
    max-height: none;
    .txt{
      margin: 0;
      padding: 40px;
    }
    img {
      @include fluid("margin-left", 20);
      @include fluid("max-width", 500);
      display: none;
    }
    .bg {
      filter: brightness(50%);
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-size: cover;
    }
    .text-xl {
      @include fluid("font-size", 40);
      color: rgb(250, 121, 15);;
      font-weight: bold;
    }
    .fz16 {
      @include fluid("font-size", 27);
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
