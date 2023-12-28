<template>
  <q-page>
    <div class="flex justify-center">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite>
        <q-carousel-slide class="!w-[1390px] max-h-[530px] overflow-hidden" v-for="(item, index) in carousel" :key="index" :name="index + 1" :img-src="item.src" @click="$router.push(item.url)"/>
      </q-carousel>
    </div>
    <div class="flex justify-center">
        <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 flex justify-center">PARTY SEASON</h2>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="product in products.slice(0, 4)" :key="product.id" class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a :href="product.href">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          <RouterLink to="#">
            <img :src="'https://remiks.com/media/wysiwyg/baneri/2023-12/SHOPTHELOOK_BAGS_Z.jpg'" class="w-[367px] h-[265px]" />
          </RouterLink>
          <RouterLink to="#">
            <img :src="'https://remiks.com/media/wysiwyg/baneri/2023-12/SHOPTHELOOK_JAKNE_Z.jpg'" class="w-[367px] h-[265px]" />   
          </RouterLink>
          <RouterLink to="#">
            <img :src="'https://remiks.com/media/wysiwyg/baneri/2023-12/SHOPTHELOOK_BOOTS_Z.jpg'" class="w-[367px] h-[265px]" />
          </RouterLink>
        </div>
        <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 flex justify-center">DECEMBER FAVOURITES</h2>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="product in products.slice(4, 8)" :key="product.id" class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a :href="product.href">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid gap-x-8 gap-y-4 grid-cols-2">
          <img :src="'https://remiks.com/media/wysiwyg/baneri/2023-09/UFOKUSU_TOMMY_Z.jpg'" class="h-[581px] w-[552px]" />
          <img :src="'https://remiks.com/media/wysiwyg/baneri/2023-09/UFOKUSU_CK_Z.jpg'" class="h-[581px] w-[552px]" />
        </div>
        <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 flex justify-center">REMIKS MUST HAVES</h2>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="product in products.slice(8, 12)" :key="product.id" class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a :href="product.href">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slide = ref(1)

onMounted(() => {
  console.log(products)
})

const interval = setInterval(() => {
  slide.value = (slide.value % carousel.length) + 1
}, 5000)

onUnmounted(() => {
  clearInterval(interval);
})

const carousel = [{
    src: "https://remiks.com/media/wysiwyg/baneri/2023-12/dec_Z_SALE_Z_P1.jpg",
    url: "#"
},{
    src: "https://remiks.com/media/wysiwyg/baneri/2023-12/dec_WATCH_mobile.jpg",
    url: "#"
  },
  {
    src: "https://remiks.com/media/wysiwyg/baneri/2023-12/dec_GIFTGUIDE_mobile.jpg",
    url: "#"
  },
  {
    src: "https://remiks.com/media/wysiwyg/baneri/2023-12/dec_HODLIDAYonICE_mobile.jpg",
    url: "#"
  },
  {
    src: "https://remiks.com/media/wysiwyg/baneri/2023-12/sept_IVKOVIC_mobile.jpg",
    url: "#"
  },
  {
    src: "https://remiks.com/media/wysiwyg/baneri/2023-12/sept_PARTNERI_mobile.jpg",
    url: "#"
  }]

  const products = [
  {
    id: 3,
    name: 'Casual Jeans',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Casual Jeans in blue.",
    price: '$55',
    color: 'Blue',
  },
  {
    id: 6,
    name: 'Formal Shirt',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: "Front of men's Formal Shirt in white.",
    price: '$50',
    color: 'White',
  },
  {
    id: 7,
    name: 'Leather Jacket',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: "Front of men's Leather Jacket in black.",
    price: '$120',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Summer Shorts',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Summer Shorts in yellow.",
    price: '$30',
    color: 'Yellow',
  },
  {
    id: 8,
    name: 'Running Shoes',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: "Front of men's Running Shoes in blue.",
    price: '$80',
    color: 'Blue',
  },
  {
    id: 9,
    name: 'Denim Jacket',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: "Front of men's Denim Jacket in light blue.",
    price: '$90',
    color: 'Light Blue',
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Classic Hoodie in gray.",
    price: '$45',
    color: 'Gray',
  },
  {
    id: 10,
    name: 'Winter Coat',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
    imageAlt: "Front of men's Winter Coat in gray.",
    price: '$150',
    color: 'Gray',
  },
  {
    id: 11,
    name: 'Slim Fit Pants',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
    imageAlt: "Front of men's Slim Fit Pants in black.",
    price: '$60',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Sporty Sneakers',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of Sporty Sneakers in white.",
    price: '$65',
    color: 'White',
  },
  {
    id: 12,
    name: 'Slim frtFit Pants',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
    imageAlt: "Front of men's Slim Fit Pants in black.",
    price: '$80',
    color: 'Black',
  },
  {
    id: 13,
    name: 'Fit Pants',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
    imageAlt: "Front of men's Slim Fit Pants in black.",
    price: '$230',
    color: 'Black',
  }
]

console.log(products)
</script>