<template>
  <div class="Wrap__window">
    <nav>
      <div class="head__nav">
        <div class="logo"><img src="./assets/logo.svg" alt="logo" /></div>
        <div class="nav-border__container">
          <div class="anchor">текст1</div>
          <div class="anchor">текст2</div>
          <div class="anchor">текст3</div>
          <div class="anchor">текст4</div>
          <div class="anchor">текст5</div>
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
        v-for="(t, i) in dotList"
        :key="t"
        :class="{ active: currentSlide === i }"
        @click="currentSlide = i"
      ></div>
    </div>
    <main>
      <div class="section" data-anchor="1">
        <homeSlide></homeSlide>
      </div>
      <div class="section" data-anchor="2">
        <homeSlide></homeSlide>
      </div>
      <div class="section" data-anchor="3">
        <homeSlide></homeSlide>
      </div>
      <div
        class="section"
        data-anchor="4"
      >
        <homeSlide></homeSlide>
      </div>
      <div id="is" class="section" data-anchor="5">
        <homeSlide></homeSlide>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import homeSlide from "./components/homeSlide.vue";

let i = false;

const dotList = ref([
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
const currentSlide = ref(0);

const scrollToSection = () => {
  const section = document.querySelector(`[data-anchor="1"]`);
  console.log(section);
};
onMounted(() => {
  let currentSection = 1;
  window.addEventListener("wheel", (event) => {
    // Обработка прокрутки вниз
    console.log(currentSection);
    if (event.deltaY > 0) {
      currentSection++;
      console.log("++");
    }
    // Обработка прокрутки вверх
    else if (event.deltaY < 0) {
      currentSection--;
      console.log("--");
    }

    // Прокручиваем к текущей секции
    const currentSectionElement = document.querySelector(
      `[data-anchor="${currentSection}"]`
    );
    if (currentSectionElement) {
      currentSectionElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
</script>

<style lang="scss">
@import "./fluid.sass";
* {
  font-family: "Roboto";
  color: #fff;
}
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100vw;
  @include fluid("height", 100);
}
.head__nav {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3d3d3d;
  @include fluid("width", 1564);
}
.nav-border__container {
  display: flex;
  gap: 40px;
}
.anchor {
  font-size: 18px;
}
.yellow-txt {
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
  top: 300px;
  gap: 30px;
}
.dot {
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
  height: 100vh;
}
</style>
