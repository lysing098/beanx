<script setup>
import { ref, onMounted } from "vue";
import ProductDetail from "./ProductDetail.vue";
import Card from "../components/Card.vue";
import api from "../util/api";
import Carousel from '../components/Carousel.vue'
import { Carousel as ProductCarousel, Slide, Navigation } from "vue3-carousel";

const products = ref([]);
const showModal = ref(false);
const selectedProduct = ref(null);

async function fetchProducts() {
  try {
    const res = await api.get("products");
    products.value = res.data.products;
  } catch (err) {
    console.log(err);
  }
}

function openDetail(product) {
  selectedProduct.value = product;
  showModal.value = true;
}

function closeDetail() {
  showModal.value = false;
}

onMounted(fetchProducts);
</script>

<template>
  <div>
    <Carousel />

    <!-- Beauty Deal Section -->
    <div class="py-15 text-center bg-[#feebe7]">
      <h3 class="mb-5 text-4xl uppercase">Beauty Deal</h3>
      <p>
        Pick your beauty products today. 50% OFF on the most popular cosmetic
        brands.<br />
        Order all classy products today!
      </p>
    </div>


<div class="min-h-screen container max-w-8xl mx-auto mt-20"> <h1 class="text-2xl uppercase mb-20 text-center">special collections</h1> <div class="grid grid-cols-3"> <div class="relative"> <!-- Main image --> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/03/product1-1.jpg" alt="" class="w-full h-full object-cover" /> <!-- Hover image + circle --> <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" > <!-- Hover image --> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/03/h1.jpg" alt="" class="w-full h-full object-cover" /> <!-- Circle with text --> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-60 h-60 rounded-full border border-[#fdebe9] flex flex-col items-center justify-center bg-white bg-opacity-20" > <p class="text-black hover:text-[#ffbbb4] font-bold text-4xl hover:cursor-pointer" > 10% Off </p> <p class="text-black hover:text-[#ffbbb4] hover:cursor-pointer"> Body Butter </p> </div> </div> </div> </div> <div class="relative"> <!-- Main image --> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/product2-1.jpg" alt="" class="w-full h-full object-cover" /> <!-- Hover image + circle --> <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" > <!-- Hover image --> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/h2.jpg" alt="" class="w-full h-full object-cover" /> <!-- Circle with text --> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-60 h-60 rounded-full border border-[#fdebe9] flex flex-col items-center justify-center bg-white bg-opacity-20" > <p class="text-black hover:text-[#ffbbb4] font-bold text-4xl hover:cursor-pointer" > 10% Off </p> <p class="text-black hover:text-[#ffbbb4] hover:cursor-pointer"> Body Butter </p> </div> </div> </div> </div> <div class="relative"> <!-- Main image --> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/product3-1.jpg" alt="" class="w-full h-full object-cover" /> <!-- Hover image + circle --> <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" > <!-- Hover image --> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/h3.jpg" alt="" class="w-full h-full object-cover" /> <!-- Circle with text --> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-60 h-60 rounded-full border border-[#fdebe9] flex flex-col items-center justify-center bg-white bg-opacity-20" > <p class="text-black hover:text-[#ffbbb4] font-bold text-4xl hover:cursor-pointer" > 10% Off </p> <p class="text-black hover:text-[#ffbbb4] hover:cursor-pointer"> Body Butter </p> </div> </div> </div> </div> </div> </div>
    <!-- Static Collections -->
    <div class="min-h-screen bg-[#fdebe9] mx-auto flex justify-center gap-5 items-center" > <!-- Left Column --> <div class="flex flex-col justify-center gap-6 max-w-lg"> <h1 class="text-3xl"> Creating the best in class Cosmetic<br /> product for the better you </h1> <p> Ut enim ad minim veniam, quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip<br /> ex ea commodo consequat. Duis aute<br /> irure dolor in reprehenderit in voluptate<br /> velit esse cillum dolore eu fugiat nulla <br />pariatur. </p> <button class="uppercase px-5 py-2 bg-black/60 text-white w-max"> Contact us </button> </div> <!-- Middle Image --> <div class="relative"> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/03/cosmetics-image-1.jpg" alt="" class="h-96 w-auto object-cover" /> <p class="absolute -bottom-18 -left-15 capitalize w-25 h-25 flex items-center justify-center rounded-full border border-[#ffaf9b] bg-white text-center hover:text-white hover:bg-[#ff9277] hover:cursor-pointer" > check<br />collections </p> </div> <!-- Right Image --> <img src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/03/cosmetics-image-2.jpg" alt="" class="w-90 object-cover" /> </div>
    <!-- What's New Section -->
    <div class="min-h-screen">
       <h1 class="mt-40 mb-20 uppercase text-2xl text-center">
      What's New for You
    </h1>

    <ProductCarousel :itemsToShow="4" :wrapAround="true" :autoplay="false">
      <Slide v-for="item in products.slice(0,8)" :key="item.id">
        <Card :product="item" @view="openDetail" />
      </Slide>

      <template #addons><Navigation /></template>
    </ProductCarousel>

    <ProductDetail
      :product="selectedProduct"
      :show="showModal"
      @close="closeDetail"
    />
  </div>
  </div>
</template>