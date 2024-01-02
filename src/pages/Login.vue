<template>
      <q-form @submit.prevent="login" class="m-5 flex flex-center flex-col">
        <div class="px-[10px] py-[10px] rounded-md border border-gray-600">
          <q-input
            v-model="username"
            label="Username"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            dense
            outlined
            clearable
            class="q-mb-md w-80 h-13"
          />
          <q-btn type="submit" label="Login" class="!bg-gray-700 !text-white q-mt-md w-80 h-13" />
          <RouterLink to="/forgot-password" class="gt-xs text-sm/[20px] mx-5 mt-5 mb-5"><strong>Forgot Password</strong></RouterLink>
        </div>
      </q-form>
  </template>
  <script setup>
  import { ref } from 'vue'
  // import { useRouter } from 'vue-router'
  // const router = useRouter()

  const username = ref('')
  const password = ref('')

  const login = () => {
    const loginObj = { username: username.value, password: password.value }
    const users = JSON.parse(localStorage.getItem('users'))
    // comparison
    const matched = users.find(item => item.username === loginObj.username && item.password === loginObj.password)
    
    // redirect
    if (matched) {
      localStorage.setItem('loginUser', JSON.stringify(loginObj))
      window.location.href = '/'
      // router.push({path: `/`})
    } else {
      console.log('invalid username or incorrect password')
    }
}
  </script>