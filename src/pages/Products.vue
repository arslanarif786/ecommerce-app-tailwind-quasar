<template>
    <q-page class="category-page grid grid-cols-12 grid-rows-1 gap-4">
      <!-- Left Sidebar with Filters -->
      <div class="filters col-span-3">
        <!-- Filters go here -->
        <q-list>
          <!-- Text Search Filter -->
          <q-item>
            <q-input v-model="searchText" placeholder="Search..." dense />
          </q-item>
  
          <!-- Price Range Filter -->
          <q-item>
            <q-range v-model="priceRange" :min="0" :max="1000" label="Price Range" color="primary" />
          </q-item>
  
            <!-- Choose Color Filter -->
            <q-item class="flex !flex-col">
            <div class="text-bold">Choose Color</div>
            <q-checkbox
                v-for="color in colors"
                :key="color"
                :label="color"
                :value="color"
                v-model="selectedColors"
            />
            </q-item>

        </q-list>
      </div>
  
      <!-- Product List -->
      <div class="m-20 col-start-4 col-span-9">
        <div class="grid grid-cols-12 gap-4">
          <ProductCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
            class="col-span-3"
          />
        </div>
      </div>
  
      <!-- Pagination -->
      <div class="pagination mx-20 my-5 col-start-4 col-span-9">
        <q-pagination v-model="currentPage" :max="totalPages" @input="updatePage" />
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import ProductCard from '../components/ProductCard.vue';
  
  const colors = ['Black', 'Yellow', 'Purple', 'Pink', 'Brown', 'Turquoise', 'Orange', 'Red', 'Green'];
  const imagesUrlArray = [
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
    'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg'
  ];
  
  const products = [];
  for (let i = 1; i <= 100; i++) {
    const colorIndex = (i - 1) % colors.length;
    const imageUrlArrayIndex = (i - 1) % imagesUrlArray.length;
    products.push({
      id: i,
      name: `Product ${i}`,
      href: '#',
      imageUrl: imagesUrlArray[imageUrlArrayIndex],
      imageAlt: `Product ${i} Image`,
      price: `$${Math.floor(Math.random() * 500) + 50}`,
      color: colors[colorIndex],
      ///// you can change it bojan
      description: "Stylish women's jacket with a hood from Tommy Hilfiger.",
      material: "Cotton",
      shippingInfo: "Free shipping on orders over $50.00",
      size: "Medium",
      imageGallery: [
        "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-2_61613.jpg",
        "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-3_29465.jpg",
        "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-4_62726.jpg",
        "https://remiks.com/media/catalog/product/cache/50dd1ff3c09846088fb44b8460cc0347/t/h/thdw0dw09060-bds-5_55112.jpg",
        // Add more gallery images as needed
      ],
    });
  }
  
  const selectedColors = ref([]);
  const pageSize = 20;
  const currentPage = ref(1);
  
  const totalPages = computed(() => Math.ceil(products.length / pageSize));
  const startIndex = computed(() => Math.max((currentPage.value - 1) * pageSize, 0));
  const endIndex = computed(() => startIndex.value + pageSize);
  const displayedProducts = computed(() => {
  return products
    .filter(product => selectedColors.value.length === 0 || selectedColors.value.includes(product.color))
    .slice(startIndex.value, endIndex.value);
});

  
  const updatePage = (page) => {
    currentPage.value = page;
  };
  </script>
  