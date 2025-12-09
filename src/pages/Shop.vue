<script setup>
import { ref, onMounted } from "vue";
import ProductDetail from "./ProductDetail.vue";
import Card from "../components/Card.vue";
import api from "../util/api";

// Reactive variables
const products = ref([]);
const showModal = ref(false);
const selectedProduct = ref(null);

// Fetch products from API
async function fetchProducts() {
  try {
    const res = await api.get("products");
    products.value = res.data.products;
  } catch (err) {
    console.error(err);
  }
}

// Open product detail modal
function openDetail(product) {
  selectedProduct.value = product;
  showModal.value = true;
}

// Close modal
function closeDetail() {
  showModal.value = false;
}

// Fetch on mounted
onMounted(fetchProducts);
</script>

<template>
  <div class="mt-40 px-6 md:px-20">
    <h1 class="text-3xl font-bold text-center mb-10">Shop</h1>

    <!-- Grid of products -->
    <div v-if="products.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @view="openDetail"
      />
    </div>

    <div v-else class="text-center text-gray-500">
      Loading products...
    </div>

    <!-- Product Detail Modal -->
    <ProductDetail
      :product="selectedProduct"
      :show="showModal"
      @close="closeDetail"
    />
  </div>
</template>

<style scoped>
/* optional spacing for header */
.mt-40 {
  margin-top: 10rem;
}
</style>
