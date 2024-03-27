<template>
  <div class="form__container">
    <form
      class="obratnuj-zvonok"
      @submit.prevent="submitForm(formData, formSubmitted, message)"
      v-if="!formSubmitted"
    >
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
          <label for="name" class="form__label">Имя</label>
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
          <label for="name" class="form__label">Почта</label>
        </div>
        <div class="form__group field">
          <input
            v-model="formData.number"
            type="text"
            name="number"
            class="form__field"
            placeholder="Name"
            required
          />
          <label for="name" class="form__label">Номер телефона (с кодом)</label>
        </div>
      </div>
      <button class="bot-send-mail" type="submit">ОБСУДИТЬ ПРОЕКТ</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { submitForm } from "../services/form";

const formSubmitted = ref(false);
const message = ref("");
const formData = reactive({
  name: "",
  number: "",
  email: "",
});
</script>

<style scoped lang="scss">
* {
  font-family: inherit;
  color: #000;
}
.form__container {
  width: 35%;
  bottom: 0px;
  right: 0px;
  position: fixed;
}
.obratnuj-zvonok {
  padding: 20px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  background: #fff;
}

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 200%;
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
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: rgb(0, 0, 0);
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image-slice: 1;
}
.bot-send-mail {
  color: #fff;
  background-color: #e74c3c;
  outline: none;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 10px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}
</style>
