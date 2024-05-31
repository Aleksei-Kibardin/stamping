<template>
  <div class="container">
    <div class="wrap--gallery">
      <div class="title-gallery">
        <h1>Примеры продукции</h1>
      </div>

      <div class="row">
        <div class="img-wrap" v-for="index in 21" :key="index">
          <img class="img" :src="`/img/${index}.jpeg`" alt="" />
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal" @click="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <img class="modal-content" :src="currentImage" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../fluid.sass";
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  top: 50%;
  width: 80%;
  max-width: 700px;
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
.line {
  border: 1px #000 solid;
  @include fluid("width", 396);
  @include fluid("margin-top", 20);
  margin: 20px auto auto auto;
}
.img {
  @include fluid("width", 160);
  @include fluid("height", 160);
  transition: 0.5s all ease;
}
.img-wrap{
  overflow: hidden;
  @include fluid("width", 160);
  @include fluid("height", 160);
}
.img:hover {
  transform: scale(1.2);
}
.wrap--gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include fluid("margin-top", 200);
}
.title-gallery {
  @include fluid("font-size", 40);
  @include fluid("width", 396);
  @include fluid("margin-top", 100);
  @include fluid("margin-bottom", 70);
  h1 {
    text-align: center;
    @include fluid("font-size", 40);
  }
}
@media (max-width: 991px) {
  .img {
    width: 30%;
  }
  .wrap--gallery {
    .row {
      justify-content: center;
    }
  }
}
.container {
  max-width: 1200px;
  height: 100%;
  margin: auto;
}
.row {
  justify-content: center;
  gap: 20px;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
}
</style>
