import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  // Add product to cart
  function addToCart(product, quantity = 1) {
    const existing = items.value.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.value.push({ ...product, quantity });
    }
  }

  // Remove product from cart
  function removeFromCart(productId) {
    items.value = items.value.filter((i) => i.id !== productId);
  }

  // Total items in cart
  const totalItems = computed(() =>
    items.value.reduce((acc, item) => acc + item.quantity, 0)
  );

  // Total price
  const totalPrice = computed(() =>
    items.value.reduce(
      (acc, item) =>
        acc +
        item.quantity *
          (item.price - item.price * (item.discountPercentage / 100)),
      0
    )
  );

  return { items, addToCart, removeFromCart, totalItems, totalPrice };
});
