<script setup>
import { ref } from "vue";
import { AiOutlineClose } from "vue-icons-plus/ai";
import { useCartStore } from "../stores/cart";

const props = defineProps({
  product: Object,
  show: Boolean,
});

const emit = defineEmits(["close"]);

const qty = ref(1);
const cartStore = useCartStore();

function increaseQty() {
  qty.value++;
}

function decreaseQty() {
  if (qty.value > 1) qty.value--;
}

function addToCart() {
  cartStore.addToCart(props.product, qty.value);
  emit("close"); // close modal
}
</script>


<template>
  <div
    v-if="show && product"
    class="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
    @click.self="emit('close')"
  >
    <div
      class="bg-white relative flex flex-col md:flex-row gap-5 p-5 rounded-lg max-w-4xl w-full"
    >
      <!-- Close icon -->
      <AiOutlineClose
        class="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
        @click="emit('close')"
      />

      <!-- Product Image -->
      <div class="flex-shrink-0 w-full md:w-1/2 relative">
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full h-auto object-cover rounded"
        />
        <p
          class="w-16 py-1 text-center bg-green-600 text-white absolute top-3 right-3 text-sm rounded"
        >
          {{ product.discountPercentage }}%
        </p>
      </div>

      <!-- Product Details -->
      <div class="flex flex-col gap-3 md:w-1/2">
        <h2 class="text-2xl font-bold">{{ product.title }}</h2>
        <div class="flex gap-3 items-center">
          <p class="text-gray-400 line-through">${{ product.price }}</p>
          <p class="text-green-700 font-bold">
            ${{
              (
                product.price -
                product.price * (product.discountPercentage / 100)
              ).toFixed(2)
            }}
          </p>
        </div>
        <p class="text-gray-700 mt-2 whitespace-pre-line">
          {{ product.description }}
        </p>
        <p class="capitalize mt-2 text-gray-600">
          Category: {{ product.category }}
        </p>
        <p class="capitalize mt-1 text-gray-600">
          Tags:
          <span v-for="(tag, index) in product.tags" :key="index">
            {{ tag }}<span v-if="index < product.tags.length - 1">, </span>
          </span>
        </p>

        <!-- Quantity selector -->
        <div class="flex items-center gap-3 mt-4">
          <button
            class="bg-gray-200 px-3 py-1 rounded"
            @click="decreaseQty"
          >
            -
          </button>
          <span class="w-8 text-center">{{ qty }}</span>
          <button
            class="bg-gray-200 px-3 py-1 rounded"
            @click="increaseQty"
          >
            +
          </button>
        </div>

        <!-- Add to Cart Button -->
        <button
          class="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          @click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
