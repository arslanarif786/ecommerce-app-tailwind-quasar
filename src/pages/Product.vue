<template>
    <div class="flex flex-col lg:flex-row justify-between p-4 m-20">
      <!-- Product Image Section -->
      <div class="lg:w-1/2">
        <!-- Product Image -->
        <img :src="currentImage" alt="Product Image" class="w-[371px] h-[498px] border border-gray-300">
  
        <!-- Image Gallery -->
        <div class="flex mt-2">
          <img
            v-for="(image, index) in product.imageGallery"
            :key="index"
            :src="image"
            alt="Gallery Image"
            class="w-1/4 cursor-pointer border border-gray-300 mr-1"
            @click="changeImage(index)"
          >
        </div>
      </div>
  
      <!-- Product Details Section -->
      <div class="lg:w-1/2 p-4">
        <!-- Product Details -->
        <h1 class="text-2xl font-semibold">{{ product.name }}</h1>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="text-lg font-bold mt-4">{{ product.price }}</p>
  
        <!-- Quantity Section -->
        <div class="flex items-center mt-4">
          <label for="quantity" class="mr-2">Quantity:</label>
          <input v-model="quantity" type="number" id="quantity" class="p-2 border rounded">
        </div>
        <!-- Attributes -->
        <div class="mt-4">
        <p class="text-gray-700"><strong>Size: {{ product.size }}</strong></p>
        <!-- Add more attributes as needed -->
        </div>
  
        <!-- Add to Cart Button -->
        <button @click="addToCart" class="mt-4 !bg-gray-700 !text-white p-2 rounded">Add to Cart</button>
      </div>
    </div>
  
    <!-- Tabs for Additional Sections -->
    <div class="m-20">
      <div class="border-b-2">
        <nav class="flex">
          <a @click="activeTab = 'description'" :class="{ 'border-b-2': activeTab === 'description' }" class="mr-4 cursor-pointer">Description</a>
          <a @click="activeTab = 'moreInfo'" :class="{ 'border-b-2': activeTab === 'moreInfo' }" class="mr-4 cursor-pointer">More Info</a>
          <a @click="activeTab = 'reviews'" :class="{ 'border-b-2': activeTab === 'reviews' }" class="mr-4 cursor-pointer">Reviews</a>
          <a @click="activeTab = 'shipping'" :class="{ 'border-b-2': activeTab === 'shipping' }" class="mr-4 cursor-pointer">Shipping</a>
        </nav>
      </div>
    
      <!-- Content based on the selected tab -->
      <div v-show="activeTab === 'description'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Product Description</h2>
        <p>{{ product.description }}</p>
      </div>
  
      <div v-show="activeTab === 'moreInfo'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">More Info</h2>
        <ul>
          <li>Material: {{ product.material }}</li>
          <li>Color: {{ product.color }}</li>
          <!-- Add more info as needed -->
        </ul>
      </div>
  
      <div v-show="activeTab === 'reviews'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Reviews</h2>
        <!-- Add your review components or content here -->
      </div>
  
      <div v-show="activeTab === 'shipping'" class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Shipping</h2>
        <p>{{ product.shippingInfo }}</p>
      </div>
    </div>
      <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 flex justify-center">SIMILAR PRODUCTS</h2>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="prod in products.slice(8, 12)" :key="prod.id" class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img :src="prod.imageSrc" :alt="prod.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a :href="prod.href">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ prod.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">{{ prod.color }}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">{{ prod.price }}</p>
              </div>
            </div>
          </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const product = ref({
    name: "Tommy Hilfiger Women's Jacket",
    description: "Stylish women's jacket with a hood from Tommy Hilfiger.",
    price: "$120.00",
    imageUrl: "https://remiks.com/media/catalog/product/cache/3a94dccb1b2fbf2ba369a22195785beb/t/h/thdw0dw09060-bds-1_99712.jpg",
    imageGallery: [
      "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-2_61613.jpg",
      "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-3_29465.jpg",
      "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-4_62726.jpg",
      "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-5_55112.jpg",
      // Add more gallery images as needed
    ],
    material: "Cotton",
    color: "Navy Blue",
    shippingInfo: "Free shipping on orders over $50.00",
    size: "Medium",
  })
  
  const quantity = ref(1)
  const currentImage = ref(product.value.imageUrl)
  const activeTab = ref('description')
  
  const addToCart = () => {
    console.log(`Added ${quantity.value} ${product.value.name}(s) to the cart.`)
  }
  
  const changeImage = (index) => {
    currentImage.value = product.value.imageGallery[index]
  }

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
  </script>
  