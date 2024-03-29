<template>
  <div class="swiper__container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Штамповка деталей из листового металла</h1>
            <p>
              Штамповка листового металла — распространенная технология,
              благодаря которой производят детали практически для любой
              промышленной отрасли. В статье мы опишем суть штамповки, а также
              рассмотрим основные виды штамповочных операций.
            </p>
            <p>
              Штамповка — это процесс, в результате которого заготовки плоского
              проката — листы, ленты и полосы — изменяют свой размер и
              геометрическую форму. Операция позволяет получать как простые и
              миниатюрные детали, так и габаритные изделия сложной
              геометрической формы.
            </p>
          </div>
          <img
            src="https://keyprod.ru/wp-content/uploads/2018/01/%D0%A8%D1%82%D0%B0%D0%BC%D0%BF%D1%8B-3D-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8-%D1%87%D0%B5%D1%80%D1%82%D0%B5%D0%B6%D0%B8-%D0%B8-%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Принцип работы</h1>
            <p>
              Для штамповки листов необходимы пресс и рабочий орган, оказывающий
              давление на металл — штамп. В качестве штампа выступают два
              элемента — матрица и пуансон.
              <br /><br />
              Матрица — это полость с углублениями, в которой и формируется
              нужная геометрия заготовки. Устанавливается матрица на неподвижную
              часть станка.
              <br /><br />
              Пуансон — это подвижная половина штампа с выступающими частями,
              которые вдавливают металл в матрицу, тем самым формируя нужную
              форму заготовки. Пуансон располагается в верхней части штампа на
              ползуне пресса.
            </p>
          </div>
          <video
            class="video"
            autoplay
            muted
            loop
            :style="{ opacity: scrollCount }"
          >
            <source
              src="../assets/Холодная штамповка металла.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Какое оборудование используется</h1>
            <p>Сами станки различаются по типу привода.</p>
            <p class="fz16">
              Кривошипно-шатунные прессы — работа станка основана на
              преобразовании крутящего момента кривошипно-шатунным механизмом.
              Это старейший вид прессового оборудования, работающего за счет
              возвратно-поступательного движения.
              <br /><br />
              Гидравлические прессы — движение пуансона осуществляется за счет
              жидкости, которая толкает соответствующие приводы. Это наиболее
              мощное оборудование, давление которого достигает 75 000 тонн в
              зависимости от модели.
              <br /><br />
              Радиально-ковочные прессы — используются для горячей формовки
              деталей цилиндрической формы. Этот массивный станок, оборудованный
              индукционной печой для разогрева заготовки, позволяет обрабатывать
              заготовки длиной до 18 метров.
              <br /><br />
              Электромагнитные прессы — относительно новое оборудование,
              работающее за счет электромагнитного поля, которое давит на
              сердечник с проволочной обмоткой. Сердечник перемещает ползун с
              установленным пуансоном к матрице. Возврат происходит за счет
              пружин. Оборудование способно оказывать давление до 2,5 тонн, при
              этом ползун имеет небольшой запас хода — всего 10 мм.
            </p>
          </div>
          <img
            src="https://elektroautomatika.ru/layout_bs4/images/product_catalog/shtamp01_mod-min.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Какие виды штамповки бывают</h1>
            <p>
              Существует два вида штамповки — холодная и горячая. При горячей
              штамповке используют термическое воздействие, при холодной —
              металл не нагревают.
            </p>
            <p class="fz16">
              Холодная штамповка деталей из листового металла может
              производиться в непрерывном потоке — то есть за одной штамповочной
              операцией сразу следует другая. Поэтому ее используют на
              производствах конвейерного типа — автомобильное производство,
              приборостроительная отрасль, заводы бытовой техники.
              <br /><br />
              К холодной штамповке деталей из листового металла относят свыше
              восемнадцати способов пластической деформации. Мы перечислим
              наиболее распространенные из них.
            </p>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Обрезка</h1>
            <p class="fz16">
              Суть операции в том, что листовая заготовка разрезается по прямой
              или фигурной линии. Штамповочная резка отличается от иных способов
              резки тем, что в результате получаются готовые к эксплуатации
              изделия, не требующие дополнительной обработки другими методами.
              <br /><br />
              Штамповочная резка производится на различных станках, которые
              делятся на 4 основные группы.
            </p>
          </div>
          <img
            src="../assets/ks6qtzbodx2xuqcuzonhpko9hz6g1j16.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Пробивка</h1>
            <p class="fz16">
              Пробивку используют для создания отверстий в листовой заготовке. В
              зависимости от типа штампа отверстия могут быть — круглыми,
              квадратными, треугольными, овальными или декоративными. Этот метод
              широко применяется для производства перфорированных листов.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/c75/xcgfxzy8g00ac3sl11ixuwpqyq52fv3n.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Вырубка</h1>
            <p class="fz16">
              Вырубку применяют для создания замкнутых углублений в листовой
              заготовке без сквозного пробития. При этом вырубленная часть чаще
              всего является функциональным элементом, а не отходом
              производства.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/05c/g1obp7gysxmq93lpx3y2xtafiy9mzwjy.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Отбортовка</h1>
            <p class="fz16">
              Операция применяется для создания бортиков вокруг отверстий, а
              также по контуру заготовки.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/87d/tm9shelqozwjku2ujdi0nx7782s1lter.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Формовка</h1>
            <p class="fz16">
              Позволяет изменять локальные участки плоской заготовки, оставляя
              внешний контур без изменений.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/0eb/ujulbjcu9wo1u6q3hetydfm1a43abgco.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Гибка</h1>
            <p class="fz16">
              Операция позволяет изменять угол между частями плоской заготовки,
              либо придавать ей криволинейные формы. Существует одноугловая,
              двухугловая и многоугловая гибка. На современных станках гибка
              часто сочетается с другими операциями — отрезкой, вырубкой и
              пробивкой.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/f0b/f94du6a141as58x4yi6zc1omvpyx33ej.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Фланцовка</h1>
            <p class="fz16">
              При фланцовке изменение геометрии происходит с трех сторон — по
              двум противоположным боковым и передней части. Операция позволяет
              фланцевать детали по сложному контуру. Чаще всего применяется на
              автомобильных заводах при изготовлении панелей капота, багажника,
              дверей и других элементов кузова автомобиля.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/8f5/usxtp4kucv3wzr5zn7k9rqlas0f96ers.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Вытяжка</h1>
            <p class="fz16">
              Если предыдущие виды штамповочных операций сохраняли лист
              относительно плоским, то вытяжка создает полые пространственные
              изделия. Операция позволяет изготавливать предмета цилиндрической,
              конической, полусферической и иной формы.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/e0e/g7sqw9x38ssmk3yz0x040r23qushjb7j.png"
            alt=""
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="content">
          <div class="txt">
            <h1 class="text-xl">Обжим</h1>
            <p class="fz16">
              Когда необходимо сжать торцы полой детали, применяют обжим в
              конической матрице. Технология позволяет уменьшить размеры детали
              с торцов. Широко применяется при производстве различных
              боеприпасов.
            </p>
          </div>
          <img
            src="https://market.severstal.com/upload/medialibrary/1b7/rfdm6j6kd2lm3do5e8h6fyfdj1wnwit0.png"
            alt=""
          /></div
      ></swiper-slide>
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
</script>

<style lang="scss" scoped>
.swiper__container {
  display: flex;
  align-items: center;
  height: 100%;
  background: #000;
}
.content {
  background: rgb(238, 107, 0);
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
  position: relative;
  display: flex;
  align-items: center;
  img {
    margin-left: 20px;
    max-width: 600px;
    max-height: 600px;
  }
}
.text-xl {
  margin-bottom: 20px;
  font-size: 46px;
  color: #002f6c;
  font-weight: 600;
}
.txt {
  z-index: 2;
  margin-left: 150px;
  width: 50%;
  .fz16 {
    font-size: 16px;
  }
  p {
    margin-top: 30px;
    font-size: 24px;
  }
}
</style>
