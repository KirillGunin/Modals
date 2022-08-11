<template>
  <!-- transition нужен для анимации -->
  <transition name="modal">
    <!-- закрытие по клику на область -->
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content">

        <!-- header -->
        <div class="modal-header">
          <span class="modal-title"> {{ title }} </span>
          <!-- кнопка закрытия с эмитом -->
          <span class="button-close" @close="$emit('close')">×</span>
        </div>

        <!-- body -->
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  // закрытие по клавишам
  mounted() { // будет следить за клавишами
    document.body.addEventListener('keyup', event => {
      if(event.keyCode === 27) this.$emit('close') // 27 - это кнопка esc
    })
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
// анимация
.modal-enter, .modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2)
}


.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all .2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
}



</style>
