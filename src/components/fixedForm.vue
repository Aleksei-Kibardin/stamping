<template>
  <div class="form__container">
    <form class="obratnuj-zvonok">
      <input type="hidden" name="form-name" value="name_of_my_form" />

      <div class="form-zvonok">
        <div class="form__group field">
          <input
            v-model="formData.name"
            type="text"
            class="form__field"
            placeholder="Name"
            name="name"
            required
          />
          <label for="name" class="form__label">Ваше имя</label>
        </div>
        <div class="form__group field">
          <input
            v-model="formData.email"
            type="text"
            name="email"
            class="form__field"
            placeholder="Name"
            required
          />
          <label for="name" class="form__label">Ваша почта</label>
        </div>
        <div class="form__group field">
          <input
            v-model="formData.number"
            type="text"
            name="phone"
            id="phone"
            placeholder="Номер телефона"
            class="form__field"
            ref="phoneInput"
            @click="checkInput"
            @input="checkInput"
          />
          <label for="name" class="form__label">Ваш номер телефона</label>
        </div>
      </div>
      <div @click="post()" class="bot-send-mail">ОБСУДИТЬ ПРОЕКТ</div>
    </form>
    <div class="message" v-if="formSubmitted">
      <h3>{{ message }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { submitForm } from "../services/form";
import IMask from "imask";

const phoneInput = ref(null);
let maskInstance = null;
const formSubmitted = ref(false);
const message = ref("");
const formData = reactive({
  name: "",
  number: "",
  email: "",
});

watch(formData, () => {
  formData.number = formData.number.replace(/[^\d+()]/g, "");
});

const post = async () => {
  console.log(phoneInput.value);
  await submitForm(formData, formSubmitted, message);
};

const checkInput = () => {
  console.log(formData.number);
  if (formData.number === "") {
    if (phoneInput.value && !maskInstance) {
      maskInstance = IMask(phoneInput.value, {
        mask: "+7(000)000-00-00",
        lazy: false,
      });
    }
  }
  if (formData.number === "+7)" || formData.number === "+7()") {
    console.log("hi");
    maskInstance.destroy();
    maskInstance = null;
    phoneInput.value = null;
    formData.number = "";
  }
};
</script>

<style scoped lang="scss">
@import "../fluid.sass";
* {
  font-family: inherit;
  color: #000;
}
.form__container {
  position: relative;
  height: 100%;
}

.obratnuj-zvonok {
  position: absolute;
  bottom: 0px;
  right: 0px;
  box-shadow: 0 0 20px 0.5px #5858589d;
  @include fluid("width", 500);
  @include fluid("padding", 20);
  @include fluid("gap", 10);
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #eeeeee;
}
@media (min-width: 200px) and (max-width: 1000px) {
  .obratnuj-zvonok {
    width: 100%;
  }
}

.form-zvonok {
  width: 80%;
}

.form__group {
  position: relative;
  @include fluid("margin-top", 10);
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgb(0, 0, 0);
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    @include fluid("top", 20);
  }
}

.form__label {
  position: absolute;
  @include fluid("top", -6);
  @include fluid("font-size", 16);
  display: block;
  transition: 0.2s;
  color: rgb(0, 0, 0);
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    @include fluid("top", -6);
    display: block;
    transition: 0.2s;
    font-size: 0.9rem;
    font-weight: 700;
  }

  @include fluid("border-width", 3);
  font-weight: 700;
  border-image-slice: 1;
}
.bot-send-mail {
  display: flex;
  gap: 10px;
  color: #ffac30;
  outline: none;
  font-weight: 900;
  border: 0;
  background-color: #eeeeee;
  @include fluid("margin-top", 20);
  @include fluid("border-radius", 2);
  cursor: pointer;
  position: relative;
}
.bot-send-mail::after {
  content: "";
  display: block;
  height: 20px;
  width: 20px;
  border: solid #ffac30;
  border-width: 0 2px 2px 0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transition: all 1s ease 0s;
}
.message {
  display: flex;
  position: relative;
  justify-content: center;
  padding: 10px;
  background-color: chartreuse;
}
</style>
