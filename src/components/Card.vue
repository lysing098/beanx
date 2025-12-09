<script setup>
const props = defineProps({
  product: Object,
});

const emit = defineEmits(["view"]);
</script>

<template>
  <div
    class="w-70 mx-auto cursor-pointer"
    @click="emit('view', props.product)"
  >
    <div class="relative">
      <img
        :src="props.product.thumbnail"
        :alt="props.product.title"
        class="w-full h-auto object-cover rounded"
      />
      <p class="w-15 py-1 text-center bg-green-600 text-white absolute top-3 right-5">
        {{ props.product.discountPercentage }}%
      </p>
    </div>

    <div class="text-center mt-2">
      <p>{{ props.product.title }}</p>

      <div class="text-sm flex justify-center gap-2">
        <p class="line-through text-gray-400">${{ props.product.price }}</p>
        <p class="font-bold">
          ${{ (props.product.price - (props.product.price * (props.product.discountPercentage / 100))).toFixed(2) }}
        </p>
      </div>

      <button class="uppercase px-3 py-1 bg-black/70 text-white mt-2 hover:bg-[#ff8779]">
        Quick View
      </button>
    </div>
  </div>
</template>
