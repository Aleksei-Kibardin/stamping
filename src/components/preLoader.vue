<template>
  <div class="c-preloader__wipes">
    <div class="c-preloader__wipe"></div>
    <div class="c-preloader__wipe"></div>
    <div class="c-preloader__wipe"></div>
    <div class="c-preloader__wipe"></div>
    <div class="c-preloader__wipe"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    const preloader = document.querySelectorAll(".c-preloader__wipe");
    preloader.forEach((block, index) => {
      setTimeout(() => {
        block.classList.add("loaded");
      }, 100 * index);
    });

    const lastBlock = preloader[preloader.length - 1];

    // Устанавливаем обработчик события transitionend на последний элемент
    lastBlock.addEventListener("transitionend", () => {
      document.querySelector(".c-preloader__wipes").style.display = "none";
    });
  }, 1100);
});
</script>

<style lang="scss" scoped>
.c-preloader__wipes {
  position: fixed;
  display: flex;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  align-items: end;
  .c-preloader__wipe {
    height: 100vh;
    width: 100%;
    background: #000;
    transition: all 1s ease 0s;
  }
  .c-preloader__wipe.loaded {
    height: 0px;
  }
}
</style>
