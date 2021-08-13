import { createRouter, createWebHistory} from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'
import { auth } from '../main'
import { alertController } from '@ionic/vue';


const guard = (to, from, next) => {
  try {
    if (!auth.currentUser){
      // I know this is too much
      auth.onAuthStateChanged(function(user) {
        if (user) {
          next();
        } else {
          presentAlert()
          next({ name: 'signIn' , replace: true})
        }
      })
    } else {
      next();
    } 
  } catch (error) {
   next("/")
  }
 }

 async function presentAlert() {
  const alert = await alertController
    .create({
      cssClass: 'my-custom-class',
      header: 'Access Denied',
      subHeader: 'Please Login',
      message: 'برای بازدید از این صفحه نیاز به ورود به حساب خود دارید',
      buttons: ['باشه'],
    });
  await alert.present();
}

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab1/:id',
        name: 'detail',
        component: () => import('@/views/product/Detail.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
        beforeEnter: guard
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue'),
      },
      {
        path: 'sign-in',
        name: 'signIn',
        component: () => import('@/views/auth/SignIn.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
