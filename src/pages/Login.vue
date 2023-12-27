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
          <q-btn type="submit" color="secondary" label="Login" class="q-mt-md w-80 h-13" />
          <RouterLink to="/forgot-password" class="gt-xs text-sm/[20px] mx-5 mt-5 mb-5"><strong>Forgot Password</strong></RouterLink>
        </div>
      </q-form>
  </template>
  <script setup>
  import { ref } from 'vue'

  const username = ref('')
  const password = ref('')

  const login = () => {
    console.log('Logging in with:', { username: username.value, password: password.value })
}
  </script>