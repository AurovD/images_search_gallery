<template>
  <banner
      :image="!isImageLoaded ? image : '/sava-bobov-AYmUgOqRoGA-unsplash.jpeg'"
  ></banner>
</template>

<script>
import Banner from '../components/Banner';
import {useRandomPhoto} from "@/hooks/useRandomPhoto";
export default {
  name: "main-page",
  components: {
    Banner
  },
  setup() {
    const {image, isImageLoaded} = useRandomPhoto();
    return {
      image,
       isImageLoaded
    }
  }
}
</script>

<style scoped>

</style>