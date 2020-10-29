import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/app/auth/login.vue')
  },
  {
    path: '',
    name: 'layout',
    component: () => import('../views/app/layout.vue'),
    children: [
      {
        path: '/inicio',
        name: 'dashboard',
        component: () => import('../views/app/dashboard/dashboard.vue')
      },
      {
        path: '/alumnos',
        name: 'student-list',
        component: () => import('../views/app/students/student_list.vue')
      },
      {
        path: '/alumnos/registrar',
        name: 'student-create',
        component: () => import('../views/app/students/student_create.vue')
      },
      {
        path: '/alumnos/editar/:id',
        name: 'student-edit',
        component: () => import('../views/app/students/student_edit.vue')
      },
      {
        path: '/ex-alumnos',
        name: 'ex-student-list',
        component: () => import('../views/app/ex_student/ex_student_list.vue')
      },
      {
        path: '/ex-alumnos/registrar',
        name: 'ex-student-create',
        component: () => import('../views/app/ex_student/ex_student_create.vue')
      },
      {
        path: '/ex-alumnos/editar/:id',
        name: 'ex-student-edit',
        component: () => import('../views/app/ex_student/ex_student_edit.vue')
      },
      {
        path: '/actividades',
        name: 'activities-list',
        component: () => import('../views/app/activities/activities_list.vue')
      },
      {
        path: '/temas',
        name: 'theme-list',
        component: () => import('../views/app/themes/theme_list.vue')
      },
      {
        path: '/temas/registrar',
        name: 'theme-create',
        component: () => import('../views/app/themes/theme_create.vue')
      },
      {
        path: '/temas/editar/:id',
        name: 'theme-edit',
        component: () => import('../views/app/themes/theme_edit.vue')
      },
      {
        path: '/usuarios',
        name: 'user-list',
        component: () => import('../views/app/users/user_list.vue')
      },
      {
        path: '/usuarios/registrar',
        name: 'user-create',
        component: () => import('../views/app/users/user_create.vue')
      },
      {
        path: '/usuarios/editar/:id',
        name: 'user-edit',
        props: true,
        component: () => import('../views/app/users/user_edit.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
