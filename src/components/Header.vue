<script setup>
import { FiSearch } from "vue-icons-plus/fi";
import { BsCart2 } from "vue-icons-plus/bs";
import { AiOutlineUser } from "vue-icons-plus/ai";
import { useCartStore } from "../stores/cart"; // Pinia store

// Pinia cart store
const cartStore = useCartStore();
</script>

<template>
  <div
    class="fixed z-20 left-0 right-0 bg-[#fdebe9] hover:bg-none transition-colors duration-500"
  >
    <div class="px-20 py-5 flex justify-between items-center">
      <!-- icon search -->
      <FiSearch />

      <!-- logo -->
      <img
        src="https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/logo.png"
        alt="logo"
        class="w-30"
      />

      <!-- cart -->
      <div class="flex gap-5">
        <router-link to="/cart" class="relative">
          <BsCart2 class="cursor-pointer" />
          <p
            v-if="cartStore.totalItems > 0"
            class="absolute -top-4 -right-2 w-5 h-5 flex items-center justify-center rounded-full text-xs bg-black text-white"
          >
            {{ cartStore.totalItems }}
          </p>
        </router-link>
        <AiOutlineUser class="cursor-pointer" />
      </div>
    </div>

    <!-- navigation menu -->
    <div class="flex justify-center gap-5 uppercase">
      <router-link to="/" class="hover:cursor-pointer">home</router-link>
      <router-link to="/shop" class="hover:cursor-pointer">shop</router-link>
      <router-link to="" class="hover:cursor-pointer">blog</router-link>
      <router-link to="" class="hover:cursor-pointer">about</router-link>
    </div>
  </div>
</template>
