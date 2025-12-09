<script setup>
import { computed } from "vue";
import { useCartStore } from "../stores/cart";

// Cart store
const cartStore = useCartStore();

// Total price
const totalPrice = computed(() =>
  cartStore.items.reduce(
    (acc, item) =>
      acc + item.quantity * (item.price - item.price * (item.discountPercentage / 100)),
    0
  ).toFixed(2)
);


// Functions to change quantity
function increaseQty(item) {
  item.quantity++;
}

function decreaseQty(item) {
  if (item.quantity > 1) item.quantity--;
}

function removeItem(item) {
  cartStore.removeFromCart(item.id);
}

</script>

<template>
  <div class="mt-40 px-6 md:px-20">
    <h1 class="text-3xl font-bold text-center mb-10">Your Cart</h1>

    <div v-if="cartStore.items.length === 0" class="text-center text-gray-500">
      Your cart is empty
    </div>

    <div v-else class="flex flex-col gap-6">
      <div v-for="item in cartStore.items" :key="item.id" class="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg">
  <img :src="item.thumbnail" :alt="item.title" class="w-24 h-24 object-cover rounded" />

  <div class="flex-1">
    <h2 class="font-semibold text-lg">{{ item.title }}</h2>
    <p class="text-gray-500 mt-1">
      ${{ (item.price * (1 - item.discountPercentage / 100)).toFixed(2) }}
    </p>
  </div>

  <!-- Quantity controls -->
  <div class="flex items-center gap-2">
    <button class="px-2 py-1 bg-gray-200 rounded" @click="decreaseQty(item)">-</button>
    <span class="w-8 text-center">{{ item.quantity }}</span>
    <button class="px-2 py-1 bg-gray-200 rounded" @click="increaseQty(item)">+</button>
  </div>

  <button class="text-red-500 hover:text-red-700 ml-4" @click="removeItem(item)">Remove</button>
</div>


      <!-- Total and Checkout -->
      <div class="flex flex-col md:flex-row justify-between items-center mt-10 p-4 border-t pt-4">
        <p class="text-xl font-bold">Total: ${{ totalPrice }}</p>
        <button class="mt-4 md:mt-0 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* optional: sticky header space if needed */
.mt-40 {
  margin-top: 10rem; /* adjust according to your fixed header height */
}
</style>
