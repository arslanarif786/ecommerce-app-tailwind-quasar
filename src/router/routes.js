
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'dashboard', name: 'Dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'register', name: 'Register', component: () => import('pages/Register.vue') },
      { path: 'login', name: 'Login', component: () => import('pages/Login.vue') },
      { path: 'forgotPassword', name: 'Forgot Password', component: () => import('pages/ForgotPassword.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
