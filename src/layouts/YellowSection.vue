<template>
    <div class="bg-[#ffff00] min-h-40 p-20">
        <div class="flex flex-row justify-center">
            <span style="margin-right: 8px;" class="pt-5"><strong>SUBSCRIBE TO OUR NEWSLETTER</strong></span>
            <q-input outlined v-model="ph" placeholder="Enter Your Email Address" style="background-color: white; height: 50px; width: 320px; margin-right: 8px;" />
            <q-btn style="background-color: #4e4e5e; color: white; height: 50px; width: 320px;" label="Check-in" />
        </div>
        <div class="flex flex-row justify-center pt-3">
            <q-checkbox size="xs" v-model="right" style="background-color: white; margin-right: 3px;"/>
            <span style="margin-left: 8px;" class="pt-1">I agree with </span>
            <span style="margin-left: 8px;" class="pt-1"><RouterLink to="#" class="text-sm/[20px]" style="color: #3683cd;">the Privacy Policy</RouterLink></span>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const right = ref(true)
  const ph = ref('')
  </script>
  