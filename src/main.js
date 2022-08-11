// тут подключаются все библиотеки
import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

import './assets/scss/main.scss' // подключаем стили и пешем npm install sass-loader node-sass --save-dev

Vue.config.productionTip = false,
Vue.config.devtools = false

new Vue({
  render: h => h(App),
}).$mount('#app')
