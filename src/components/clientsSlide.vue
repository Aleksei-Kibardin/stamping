<template>
  <div class="clients__container">
    <div class="cards">
      <div class="cards--title">
        <h1>Видео процесса производства деталей</h1>
      </div>
      <div class="videos">
        <div class="video">
          <iframe
            class="video-item"
            src="https://www.youtube.com/embed/hWZlfi39AX4?autoplay=0&controls=0&modestbranding=1&showinfo=0&mute=1&loop=1&playlist=hWZlfi39AX4"
            title="YouTube video player"
            frameborder="0"
            controls="0"
            modestbranding="0"
            mute="0"
            autoplay="0"
            loop="1"
            showinfo="0"
            disablekb="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            class="video-item"
            src="https://www.youtube.com/embed/hWZlfi39AX4?autoplay=0&controls=0&modestbranding=1&showinfo=0&mute=1&loop=1&playlist=hWZlfi39AX4"
            title="YouTube video player"
            frameborder="0"
            controls="0"
            modestbranding="0"
            mute="0"
            autoplay="0"
            loop="1"
            showinfo="0"
            disablekb="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            class="video-item"
            src="https://www.youtube.com/embed/hWZlfi39AX4?autoplay=0&controls=0&modestbranding=1&showinfo=0&mute=1&loop=1&playlist=hWZlfi39AX4"
            title="YouTube video player"
            frameborder="0"
            controls="0"
            modestbranding="0"
            mute="0"
            autoplay="0"
            loop="1"
            showinfo="0"
            disablekb="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            class="video-item"
            src="https://www.youtube.com/embed/hWZlfi39AX4?autoplay=0&controls=0&modestbranding=1&showinfo=0&mute=1&loop=1&playlist=hWZlfi39AX4"
            title="YouTube video player"
            frameborder="0"
            controls="0"
            modestbranding="0"
            mute="0"
            autoplay="0"
            loop="1"
            showinfo="0"
            disablekb="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            class="video-item"
            src="https://www.youtube.com/embed/hWZlfi39AX4?autoplay=0&controls=0&modestbranding=1&showinfo=0&mute=1&loop=1&playlist=hWZlfi39AX4"
            title="YouTube video player"
            frameborder="0"
            controls="0"
            modestbranding="0"
            mute="0"
            autoplay="0"
            loop="1"
            showinfo="0"
            disablekb="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            class="video-item"
            src="https://www.youtube.com/embed/hWZlfi39AX4?autoplay=0&controls=0&modestbranding=1&showinfo=0&mute=1&loop=1&playlist=hWZlfi39AX4"
            title="YouTube video player"
            frameborder="0"
            controls="0"
            modestbranding="0"
            mute="0"
            autoplay="0"
            loop="1"
            showinfo="0"
            disablekb="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <video class="video1" autoplay muted loop>
      <source src="../assets/video.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../fluid.sass";
.title {
  margin: auto;
  font-weight: 700;
  @include fluid("width", 680);
  @include fluid("margin-bottom", 50);
  h1 {
    @include fluid("font-size", 40);
  }
}
.activiti {
  @include fluid("width", 610);
  .line {
    border: 1px #000 solid;
    @include fluid("width", 610);
    height: 1px;
    @include fluid("margin-top", 20);
    margin: 20px auto auto auto;
  }
}
.videos {
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  @include fluid("gap", 20);
  width: 70%;
  gap: 20px;
}

.video-item {
  @include fluid("width", 400);
  @include fluid("height", 215);
}
.cards {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @include fluid("margin-top", 100);
  @include fluid("margin-bottom", 100);
  @include fluid("gap", 40);
  width: 100%;
  color: #fff;
}
.video1 {
  filter: brightness(40%);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  object-fit: cover;
}
.clients__container {
  display: flex;
  width: 100vw;
  height: 100vh;
}
@media (min-width: 200px) and (max-width: 1000px) {
  .cards--title {
    text-align: center;
  }
}
@media (min-width: 200px) and (max-width: 480px) {
  .video-item {
    @include fluid("width", 350);
    @include fluid("height", 165);
  }
}
</style>
