import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'

Vue.use(VueRouter)

// const requireAuth = () =>(from, to, next) => {
//   firebase.auth().onAuthStateChanged((user) => {
//     console.log('user', user, from, to);
//     user !== null ? next() : next(to.path);
//   });
// }

const routes = [
  {
    path: '/list',    
    name: 'list',
    component: loadView('List'),
    // beforeEnter: requireAuth(),
  }, 
  {
    path: '/hello',    
    name: 'hello',
    component: loadView('HelloWorld'),
  },    
  {
    path: '*',     
    redirect:'/hello'
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function loadView(view) {
  return () => import (`../components/${view}.vue`);
}

export default router
