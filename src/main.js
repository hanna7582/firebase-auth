import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAG2RwR00JH-6AxrUBxeMVVCDKRRfbXwN4",
  authDomain: "social-contribution.firebaseapp.com",
  databaseURL: "https://social-contribution.firebaseio.com",
  projectId: "social-contribution",
  storageBucket: "social-contribution.appspot.com",
  messagingSenderId: "244665885634",
  appId: "1:244665885634:web:a7d88735f02f77f6b5ac5b",
  measurementId: "G-R408EV1X7B"
}
firebase.initializeApp(config);
firebase.analytics();

new Vue({
  render: h => h(App),
  router,
  store,  
}).$mount('#app')
