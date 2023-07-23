<template>
  <div class="container">
    <div class="image-list">
      <image-item v-for="image in images" :key="image.id" :image="image"></image-item>
    </div>
    <div v-intersection="loadMorePosts" class="observer">hi</div>
  </div>
</template>

<script>
import ImageItem from '../components/ImageItem';
// import {useRoute} from "vue-router";
// import {useImages} from "@/hooks/useImages";
// import {useStore} from "vuex";
// import {computed} from "vue";
import {mapState, mapActions} from 'vuex';
export default {
  name: "photos-page",
  components: {
    ImageItem
  },
  methods: {
    ...mapActions({
      loadMorePosts: 'images/loadMorePosts',
      fetchImages: 'images/fetchImages'
    }),
  },
  mounted() {
    const query = this.$route.query;
    this.fetchImages(query);
  },
  computed: {
  ...mapState({
      images: state => state.images.images,
    })
  },
  setup() {
    // const store = useStore()
    // const route = useRoute();
    // const {isImagesLoading} = useImages(route.query);
    // console.log(isImagesLoading, "klhjl");
    //
    // return {
    //   images: computed(() => store.state.images),
    //   page: computed(() => store.state.page),
    //   // asyncIncrement: () => store.dispatch('asyncIncrement')
    // }
  }
}
</script>

<style scoped>
  .container {
    background-color: #ddd;
    /*background-color: #222222;*/
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    padding-inline: 8cqw;
  }
  .image-list {
    column-count: 3;
    margin: 1.5em auto;
    column-gap: 1.5em;
    height: fit-content;
  }

  .observer {
    /*visibility: hidden;*/
    background-color: orange;
    width: 100%;
    width: 50px;
  }

  @media (max-width: 900px) {
    .image-list {
      column-count: 2;
    }
  }
  @media (max-width: 500px) {
    .image-list {
      column-count: 1;
    }
  }
</style>