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
          >
            {{ t.name }}
          </div>
        </div>
        <div class="nav__contact">
          <span>88005553535</span>
          <span @click="formActive = !formActive" class="yellow-txt">ЗАКАЗАТЬ ЗВОНОК</span>
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
    <main id="pagepiling" @click="formActive = false">
      <div class="section" data-anchor="0">
        <homeSlide></homeSlide>
      </div>
      <div class="section" data-anchor="1">
        <aboutSlide></aboutSlide>
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

    <div class="fixed-form" :class="{ show: formActive }">
      <fixedForm></fixedForm>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import homeSlide from "./components/homeSlide.vue";
import fixedForm from "./components/fixedForm.vue";
import aboutSlide from "./components/aboutSlide.vue";

let lastScrollTime = 0;
const delay = 350;
const currentSection = ref(0);
const formActive = ref(true);

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
    currentSection.value++;
  } else if (event < 0 && currentSection.value > 0) {
    currentSection.value--;
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
  @include fluid("font-size", 20);
  justify-content: center;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100vw;
  @include fluid("height", 100);
}
.head__nav {
  @include fluid("padding", 10);
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
    @include fluid("margin-right", 20);
  }
}
.dot-right {
  position: fixed;
  display: flex;
  flex-direction: column;
  @include fluid("right", 50);
  @include fluid("top", 200);
  @include fluid("gap", 30);
  z-index: 99999;
}
.logo {
  img {
    @include fluid("height", 50);
  }
}
.dot {
  cursor: pointer;
  @include fluid("width", 10);
  @include fluid("height", 10);
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
.fixed-form {
  @include fluid("height", 300);
  z-index: 100;
  width: 0px;
  bottom: 0px;
  right: 0px;
  opacity: 0;
  position: fixed;
  transition: all 1s ease 0s;
}
.fixed-form.show {
  @include fluid("width", 500);
  opacity: 1;
}
</style>
