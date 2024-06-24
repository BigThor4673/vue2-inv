import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'

import locales from './locales'
import router from './router'
import store from './store'

// import 'firebase/firestore'
// import { initializeApp } from 'firebase/app'

import App from './App'

// const firebaseConfig = {
//   url: 'https://fir-inv-72799-default-rtdb.firebaseio.com',
//   databaseURL: 'https://fir-inv-72799-default-rtdb.firebaseio.com',
//   apiKey: 'AIzaSyD0XCA5pL5swZE38N_XHT_JJT1Uc_OeIyg',
//   authDomain: 'fir-inv-72799.firebaseapp.com',
//   projectId: 'fir-inv-72799',
//   storageBucket: 'fir-inv-72799.appspot.com',
//   messagingSenderId: '213323648848',
//   appId: '1:213323648848:web:5318a93dc667f0c10ba655',
//   measurementId: 'G-RNLG6VNR7V'
// }

// const firebase = initializeApp(firebaseConfig)

// firebase.firestore().enablePersistence()
//   .catch(function(err){
//     if(err.code == 'failed-precondition'){

//     }
//     else if(err.code == 'unimplemented'){

//     }
//   });

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueI18n)

Vue.http.interceptors.push((request, next) => {
  console.log('sending request: ', request)
  next(response => {
    console.log('response: ', response)
  })
})

Vue.config.debug = true

Vue.config.lang = 'en'

Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

// store.commit('SET_DATABASE', firebase.firestore())

const app = new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})

app.$mount('#app')
