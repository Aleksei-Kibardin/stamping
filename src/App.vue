<template>
  <div class="Wrap__window">
    <nav>
      <div class="head__nav">
        <div class="logo"><img src="./assets/logo.svg" alt="logo" /></div>
        <div class="nav-border__container">
          <div
            class="anchor"
            v-for="(t, i) in anchorList"
            :key="t"
            @click="currentSection = i"
          >{{ t.name }}</div>
        </div>
        <div class="nav__contact">
          <span>88005553535</span>
          <span class="yellow-txt">ЗАКАЗАТЬ ЗВОНОК</span>
        </div>
      </div>
    </nav>
    <div class="dot-right">
      <div
        class="dot"
        v-for="(t, i) in anchorList"
        :key="t"
        :class="{ active: currentSection === i }"
        @click="currentSection = i"
      ></div>
    </div>
    <main id="pagepiling">
      <div class="section" data-anchor="0">
        <homeSlide></homeSlide>
      </div>
      <div class="section" data-anchor="1">
        <homeSlide></homeSlide>
      </div>
      <div class="section" data-anchor="2">
        <homeSlide></homeSlide>
      </div>
      <div class="section" data-anchor="3">
        <homeSlide></homeSlide>
      </div>
      <div class="section" data-anchor="4">
        <homeSlide></homeSlide>
      </div>
    </main>
    <fixedForm></fixedForm>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import homeSlide from "./components/homeSlide.vue";
import fixedForm from "./components/fixedForm.vue";

let lastScrollTime = 0;
const delay = 350;
let currentSection = ref(0);

const anchorList = ref([
  {
    name: "txt1",
  },
  {
    name: "txt2",
  },
  {
    name: "txt3",
  },
  {
    name: "txt4",
  },
  {
    name: "txt5",
  },
]);

const scrollByEvent = (event) => {
  if (event > 0 && currentSection.value < 4) {
    currentSection.value++
  } else if (event < 0 && currentSection.value > 0) {
    currentSection.value--
  }
};

watch(currentSection, () => {
  const currentSectionElement = document.querySelector(
    `[data-anchor="${currentSection.value}"]`
  );
  if (currentSectionElement) {
    currentSectionElement.scrollIntoView({
      behavior: "smooth",
    });
  }
});

onMounted(() => {
  let startY;
  window.addEventListener("wheel", (event) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastScrollTime >= delay) {
      scrollByEvent(event.deltaY); // проверяем сколько прошло время между предыдущим событием чтобы ограничить частоту событий
      lastScrollTime = currentTime;
    }
  });

  window.addEventListener("keydown", function (event) {
    // обрабатываем нажатие стрелок
    event.key === "ArrowUp"
      ? scrollByEvent(-1)
      : event.key === "ArrowDown" && scrollByEvent(1);
  });

  window.addEventListener(
    "touchstart",
    function (event) {
      // Получаем начальные координаты касания
      startY = event.touches[0].clientY;
    },
    false
  );
  window.addEventListener(
    "touchend",
    function (event) {
      let endY = event.changedTouches[0].clientY; // Получаем координаты окончания касания
      let deltaY = endY - startY; // Рассчитываем разницу между начальной и конечной координатами

      scrollByEvent(deltaY > 0 ? -1 : 1);
    },
    false
  );
});
</script>

<style lang="scss">
@import "./fluid.sass";
* {
  font-family: "Roboto";
  color: #fff;
}
nav {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100vw;
  @include fluid("height", 100);
}
.head__nav {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  @include fluid("width", 1564);
  height: 100%;
}
.nav-border__container {
  display: flex;
  @include fluid("gap", 40);
}
.anchor {
  cursor: pointer;
  @include fluid("font-size", 18);
}
.yellow-txt {
  cursor: pointer;
  font-weight: bold;
  color: #ffd400;
}
.nav__contact {
  span {
    margin-right: 20px;
  }
}
.dot-right {
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 50px;
  top: 200px;
  gap: 30px;
  z-index: 99999;
}
.dot {
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 1s ease 0s;
  z-index: 10;
}
.dot.active {
  background-color: #ffd400;
}
main {
  scroll-behavior: smooth;
}
.section {
  position: relative;
  height: 100vh;
}
</style>
