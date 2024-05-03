<template>
  <div class="Wrap__window">
    <preLoader></preLoader>
    <nav>
      <div class="head__nav">
        <div class="logo"><img src="./assets/logo.svg" alt="logo" /></div>
        <div
          class="menu-btn"
          :class="{ active: isActive }"
          @click="isActive = !isActive"
        >
          <span></span>
        </div>
        <div class="nav-border__container" :class="{ active: isActive }">
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
          <span>+7-901-971-46-64</span>
          <span @click="formActive = !formActive" class="yellow-txt"
            >ЗАКАЗАТЬ ЗВОНОК</span
          >
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
    <main @click="(formActive = false), (isActive = false)">
      <div id="start" class="section" data-anchor="0">
        <home-slide></home-slide>
      </div>
      <div class="section about" data-anchor="1">
        <about-slide></about-slide>
      </div>
      <div class="section" data-anchor="2">
        <stamping-slide></stamping-slide>
      </div>
      <div class="section" data-anchor="3">
        <gallery-slide></gallery-slide>
      </div>
      <div class="section" data-anchor="4">
        <clients-slide></clients-slide>
      </div>
      <div class="section" data-anchor="5">
        <footer-slide></footer-slide>
      </div>
    </main>

    <div class="fixed-form" :class="{ show: formActive }">
      <fixed-form></fixed-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { currentSection } from "./services/eventScroll.js";
import preLoader from "./components/preLoader.vue";
import homeSlide from "./components/homeSlide.vue";
import fixedForm from "./components/fixedForm.vue";
import aboutSlide from "./components/aboutSlide.vue";
import gallerySlide from "./components/gallerySlide.vue";
import stampingSlide from "./components/stampingSlide.vue";
import footerSlide from "./components/footerSlide.vue";
import clientsSlide from "./components/clientsSlide.vue";

const formActive = ref(false);

const anchorList = ref([
  {
    name: "Главная",
  },
  {
    name: "О нас",
  },
  {
    name: "Услуги",
  },
  {
    name: "Продукция",
  },
  {
    name: "Этапы работы",
  },
  {
    name: "Контакты",
  },
]);

const isActive = ref(false);

watch(currentSection, () => {
  // наблюдаем за изменением currentSection (оно имеет числовое значение) и перелистываем страницу до соответсвующего слайда
  formActive.value = false;
  const currentSectionElement = document.querySelector(
    `[data-anchor="${currentSection.value}"]`
  );
  if (currentSectionElement) {
    currentSectionElement.scrollIntoView({
      behavior: "smooth",
    });
  }
});

function getDeviceType() {
  // проверяем какое устройство использует пользователь и возвращаем результат
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
      userAgent
    );

  if (isMobile) {
    return "mobile";
  } else {
    return "desktop";
  }
}

console.log(getDeviceType()); // если пользователь использует desktop тогда на втором слайде автоматически показываем форму с задержкой в 500 млс
if (getDeviceType() === "desktop") {
  watch(currentSection, () => {
    if (currentSection.value == 1) {
      setTimeout(() => {
        formActive.value = true;
      }, 500);
    }
  });
}

onMounted(() => {
  document.addEventListener("DOMContentLoaded", function () {
    // автоматически при обновлении страницы поднимаем пользователя на стартовый слайд
    console.log(document.querySelector("#start"));
    document.querySelector("#start").scrollIntoView({
      behavior: "smooth",
    });
  });

  const sectionAnim = document.querySelector("main");
  setTimeout(() => {
    // анимация для прелоадера
    sectionAnim.classList.add("shift-up");

    setTimeout(() => {
      sectionAnim.classList.remove("shift-up");
      sectionAnim.classList.add("shift-down");
    }, 100);
  }, 1100);
});
</script>

<style lang="scss">
@import "./fluid.sass";
* {
  font-family: "Roboto";
}
nav {
  position: fixed;
  display: flex;
  align-items: center;
  @include fluid("font-size", 20);
  justify-content: center;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100vw;
  @include fluid("height", 100);
}
.head__nav {
  @include fluid("border-bottom-left-radius", 6);
  @include fluid("border-bottom-right-radius", 6);
  background: rgb(0 0 0 / 30%);
  @include fluid("padding", 10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
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
  z-index: 100;
}
.logo {
  img {
    @include fluid("width", 150);
  }
}
.dot {
  cursor: pointer;
  @include fluid("width", 10);
  @include fluid("height", 10);
  border-radius: 100%;
  border: 1px #000000 solid;
  background-color: rgb(83, 83, 83);
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
.about {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://www.abmi.be/images/cont/dessintechnique-webformat-hq_imageorigi.jpg);
  background-size: cover;
}
.fixed-form {
  z-index: 100;
  width: 0px;
  bottom: 0px;
  right: 0px;
  opacity: 0;
  position: fixed;
  transition: all 1s ease 0s;
  transform: translateX(200px);
}
.fixed-form.show {
  @include fluid("width", 500);
  opacity: 1;
  transform: translateX(0px);
}
@media (min-width: 200px) and (max-width: 1000px) {
  .fixed-form.show {
    width: 100vw;
  }
}
.shift-up {
  transform: translateY(-900px);
}

/* Стили для анимации перехода вниз */
@keyframes slideDown {
  from {
    transform: translateY(-500px);
  }
  to {
    transform: translateY(0);
  }
}

/* Применение анимации */
.shift-down {
  animation: slideDown 0.9s forwards;
}
.menu-btn.active::before {
  position: relative;
  transform: rotate(45deg);
  @include fluid("top", 10);
}

.menu-btn.active::after {
  position: relative;
  transform: rotate(-90deg);
  cursor: default;
}
.menu-btn.active::after {
  position: relative;
  transform: rotate(-45deg);
  @include fluid("bottom", 8);
}

.menu-btn.active span {
  transform: scale(0);
}

.menu-btn {
  display: none;
  justify-content: center;
  flex-direction: column;
  @include fluid("gap", 6.5);
  @include fluid("width", 40);
  @include fluid("height", 30);
  position: relative;
  cursor: pointer;
}
.menu-btn span {
  background-color: #ffd900;
  height: 1px;
  @include fluid("width", 45);
  @include fluid("top", 14);
  transition: all 0.3s ease 0s;
}

.menu-btn::before,
.menu-btn::after {
  content: "";
  background-color: #ffd900;
  height: 1px;
  @include fluid("width", 45);
  transition: all 0.3s ease 0s;
}
@media (min-width: 200px) and (max-width: 500px) {
  .dot-right {
    top: 60px;
  }
  .dot {
    cursor: pointer;
    @include fluid("width", 20);
    @include fluid("height", 20);
  }
  .head__nav {
    border-radius: 0;
    padding: 0;
  }
  .menu-btn {
    display: flex;
  }
  .nav-border__container {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9));
    box-shadow: 0 15px 10px 4px #0000006e;
    position: absolute;
    @include fluid("top", 40);
    opacity: 0;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 200px;
    transform: translateX(500px);
    transition: all 1s ease 0s;
    .anchor {
      text-shadow: 1px 1px #000000;
      @include fluid("font-size", 30);
    }
  }
  .nav-border__container.active {
    opacity: 1;
    width: 100%;
    transform: translateX(0px);
  }
}
</style>
