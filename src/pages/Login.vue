<template>
      <q-form @submit.prevent="login" class="mt-5 flex flex-center flex-col">
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
        <q-btn type="submit" color="secondary" label="Login" class="q-mt-md w-80 h-13" /><RouterLink to="/forgotPassword" class="gt-xs text-sm/[20px] mt-5 mb-5"><strong>Forgot Password</strong></RouterLink>
      </q-form>
  </template>
  <script setup>
  import { ref } from 'vue'
  
  const username = ref('')
  const password = ref('')
  
  const login = () => {
    // Perform login logic here
    console.log('Logging in with:', { username: username.value, password: password.value })
}
  </script>