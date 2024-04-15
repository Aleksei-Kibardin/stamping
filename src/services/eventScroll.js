let lastScrollTime = 0;
const delay = 350;
let allowScroll;
let startY;
let startX;
import { ref } from "vue";
export const currentSection = ref(0);

const scrollByEvent = (event) => {
  if (event > 0 && currentSection.value < 5) {
    currentSection.value++;
  } else if (event < 0 && currentSection.value > 0) {
    currentSection.value--;
  }
};

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// проверяем устройство пользователя:
if (isMobileDevice()) {
  window.addEventListener(
    "touchstart",
    function (event) {
      startY = event.touches[0].clientY;
      startX = event.touches[0].clientX;
    },
    false
  );
  window.addEventListener(
    "touchend",
    function (event) {
      let endY = event.changedTouches[0].clientY; // Получаем координаты окончания касания
      let deltaY = endY - startY; // Рассчитываем разницу между начальной и конечной координатами
      // Рассчитываем абсолютное значение разницы, чтобы определить наибольшее движение
      const absDeltaY = Math.abs(deltaY);

      // Если разница больше по Y, чем по X, разрешаем скролл, иначе запрещаем
      allowScroll =
        absDeltaY > Math.abs(event.changedTouches[0].clientX - startX);

      if (allowScroll) {
        scrollByEvent(deltaY > 0 ? -1 : 1);
      }
    },
    false
  );
} else {
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
}
