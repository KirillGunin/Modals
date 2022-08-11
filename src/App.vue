<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Первое окно</button>

          <!-- first modal -->
          <!-- по close меняется состояние -->
          <modals title="First modal" v-if="modalFirst" @close="modalFirst = !modalFirst">
          
          <div slot="body">
            <p>Text</p>
            <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Закрыть</button>
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
      modalFirst: false // состояние
    }
  }
}
</script>

<style> 
</style>
