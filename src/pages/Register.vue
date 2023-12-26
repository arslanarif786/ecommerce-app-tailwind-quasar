<template>
    <q-form @submit.prevent="register" class="mt-5 flex flex-center flex-col">
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
      <q-input
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        dense
        outlined
        clearable
        class="q-mb-md w-80 h-13"
      />
      <q-btn type="submit" color="secondary" label="Register" class="q-mt-md w-80 h-13" /><RouterLink to="/login" class="gt-xs text-sm/[20px] mt-5 mb-5"><strong>Login</strong></RouterLink>
    </q-form>
</template>
<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = () => {
  console.log('Register with:', { username: username.value, password: password.value, confirmPassword: confirmPassword.value })
}
</script>