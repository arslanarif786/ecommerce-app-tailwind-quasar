<script setup>
const menu = ["WOMEN", "MEN", "BOYS", "GIRLS", "BRANDS", "HELP", "NEW IN", "CLOTHES", "SHOES", "BAGS", "ACCESSORIES", "BEAUTY", "OUTLET"]
</script>
<template>
    <q-bar :style="{ backgroundColor: '#2c2c33', color: '#fff' }">
        <RouterLink to="#" class="text-sm/[20px]">Sign Up for Newsletter</RouterLink>
        <q-space />
        <RouterLink to="/register" class="gt-xs text-sm/[20px]"><strong>Register</strong> /
        </RouterLink>
        <RouterLink to="/login" class="text-sm/[20px]">Login</RouterLink>
    </q-bar>
    <q-toolbar
        :style="{ backgroundColor: 'white', color: '#2a2b32', height: '71px', position: 'sticky', top: '0', 'background-color': 'white', 'z-index': 100 }"
        class="text-center">
        <q-list dense inline padding class="rounded-borders" style="display: flex; flex-direction: row">
            <q-item  v-for="(item, index) in menu.slice(0, 5)" :key="index" v-ripple clickable>
                    <q-item-section class="q-item-label hover:bg-[#2c2c33] hover:text-white">
                        <RouterLink to="#">{{ item }}</RouterLink>
                    </q-item-section>
                </q-item>
        </q-list>
        <q-toolbar-title class="q-flex q-items-center">
            <RouterLink to="/">
                <q-img
                    :src="'https://remiks.com/static/version1703103665/frontend/Remiks/default/sr_Latn_RS/images/logo.svg'"
                    style="height: 36px; max-width: 100px" />
            </RouterLink>
        </q-toolbar-title>
        <q-input :style="{ width: '29%', height: '45px', marginTop: '22.5px', marginBottom: '31.5px' }" outlined v-model="ph"
            placeholder="Placeholder" :dense="dense" class="q-mr-xs">
            <template v-slot:prepend>
                <q-btn flat round dense icon="search" />
            </template>
        </q-input>
        <q-btn flat round dense icon="favorite_border" />
        <q-btn flat round dense icon="local_mall">
            <q-badge floating rounded :style="{ backgroundColor: '#2c2c33', color: '#fff' }">2</q-badge>
        </q-btn>
    </q-toolbar>
    <q-toolbar class="bg-black text-gray-300 text-center" :style="{ position: 'sticky', top: '71px', backgroundColor: 'white', zIndex: 100 }">
        <q-toolbar-title>
            <q-list class="flex flex-row justify-center text-sm/[20px]">
                <q-item v-for="(item, index) in menu.slice(6, 12)" :key="index" v-ripple clickable>
                    <q-item-section class="q-item-label hover:text-white">
                        <RouterLink to="#">{{ item }}</RouterLink>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-toolbar-title>
    </q-toolbar>
</template>