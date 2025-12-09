<template>
  <Carousel
    v-bind="carouselConfig"
    :spacing="0"
    :snapAlign="'start'"
    class="w-screen h-[80vh] relative"
  >
    <Slide v-for="(image, index) in images" :key="index">
      <div class="relative w-full h-full ">
        <img
          :src="image.src"
          alt="Carousel Image"
          class="w-full h-full object-cover"
        />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const images = [
  // {
  //   src: "https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/beaux-slider1.jpg",
  // },
  {
    src: "https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/beaux-slider-bg3.jpg",
  },
  {
    src: "https://dtbeaux.wpengine.com/wp-content/uploads/2020/05/beaux-slider-bg3-900.jpg",
  },
];

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 7000,
};
</script>

