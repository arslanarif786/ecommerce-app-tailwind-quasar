<template>
    <q-form @submit.prevent="register" class="mt-5 flex flex-center flex-col">
      <q-input
        v-model="email"
        label="E-mail"
        dense
        outlined
        clearable
        class="q-mb-md w-80 h-13"
      />
      <q-btn type="submit" color="secondary" label="Reset Password" class="q-mt-md w-80 h-13" /><RouterLink to="/login" class="gt-xs text-sm/[20px] mt-5 mb-5"><strong>Login</strong></RouterLink><RouterLink to="/register" class="gt-xs text-sm/[20px] mb-5"><strong>Register</strong></RouterLink>
    </q-form>
</template>
<script setup>
import { ref } from 'vue'

const email = ref('')

const register = () => {
  console.log('Reset Password with:', { email: email.value})
}
</script>