<template>

  <modal
    title="Форма с валидацией"
    @close="$emit('close')">

    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- name -->
        <div class="form-item" :class="{errorInput: $v.name.$error}">
          <label>Имя:</label>
          <p class="errorText" v-if="!$v.name.required">Field is required</p>
          <p class="errorText" v-if="!$v.name.minLength">Must have at least {{$v.name.$params.minLength.min}} symb</p>
          <input
          v-model="name"
          :class="{error: $v.name.$error}"
          @change="$v.name.$touch()">
        </div>
        <!-- email -->
        <div class="form-item" :class="{errorInput: $v.email.$error}">
          <label>Адрес электронной почты:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required</p>
          <p class="errorText" v-if="!$v.email.email">Email is not correct</p>
          <input
          v-model="email"
          :class="{error: $v.email.$error}"
          @change="$v.email.$touch()">
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Отправить</button>
      </form>
    </div>
  </modal> 

</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import modal from '@/components/UI/Modal.vue'
export default {
  components: { modal },
  data() {
    return {
      name: '',
      email: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user)
        this.name = ''
        this.email = ''
        this.$v.$reset()
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13px;
  color: red;
}

.form-item {
  &.errorInput .errorText {
  display: block;
  }
}
input.error {
border-color: red;
}
</style>
