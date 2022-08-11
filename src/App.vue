<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">

          <!-- first modal -->
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Первое окно</button>
          <!-- по close меняется состояние -->
          <modals title="Первое окно" v-show="modalFirst" @close="modalFirst = false">         
            <div slot="body">
              <p>Text</p>
              <button class="btn btnPrimary" @close="modalFirst = !modalFirst">Закрыть</button>
            </div>
          </modals> 

          <!-- second modal -->
          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Второе окно с формой</button>
          <!-- по close меняется состояние -->
          <modals title="Второе окно с формой" v-show="modalSecond.show" @click="modalSecond.show = false">
            <div slot="body">
              <form @submit.prevent="submitSecondForm">
                <label>Имя:</label>
                <input type="text" required v-model="modalSecond.name">
                <label>Адрес электронной почты:</label>
                <input type="email" required v-model="modalSecond.email"> 
                <button class="btn btnPrimary">Отправить</button>
              </form>
            </div>
          </modals> 

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import modals from '@/components/Modal.vue'
export default {
  components: { modals },
  data() {
    return{
      modalFirst: false, // состояние
      modalSecond: {
        show: false,
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = '',
      this.modalSecond.email = '',
      this.modalSecond.show = false
    }
  }
}
</script>

<style> 
</style>
