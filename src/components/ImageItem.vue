<template>
  <div class="image-item">
    <img :src="image.urls.regular" alt="" loading="lazy">
  </div>
</template>

<script>
export default {
  name: "image-item",
  props: {
    image: {}
  },
}
</script>

<style scoped>
.image-item {
  /*aspect-ratio: 1 / 1.5;*/
  /*background-color: #ddd;*/
  width: 100%;
  /*margin-bottom: 1rem;*/
}
img {
  width: 100%;
  object-fit: cover;
}
</style>