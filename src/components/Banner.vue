<template>
  <div class="banner" :style="{'background-image': `url(${image})`}" >
    <div class="banner__bg"></div>
    <div class="content">
      <div class="box">
        <div class="content-box">
          <h1 class="content-box__header">Searching Images</h1>
          <search-input
          >
          </search-input>
          <nav>
            <p>Trending:</p>
            <nav-button>flower</nav-button>
            <nav-button>wallpapers</nav-button>
            <nav-button>random image</nav-button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/UI/SearchInput";
export default {
  name: "main-page",
  components: {SearchInput},
  props: {
    image: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
  .banner {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: black;
  }
  .box {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
  .content-box {
    margin-left: auto;
    margin-right: auto;
  }
  .content-box__header {
    font-size: calc(var(--sizeindex) * 3);
    padding-bottom: 2rem;
    line-height: 40px;
  }
  p {
    font-size: calc(var(--sizeindex) * .8);
  }
  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  @media (min-width: 768px) {
    .box {
      max-width: 1320px;
    }
    .content-box {
      width: 66.66667%;
    }
  }
  @media (max-width: 767px) {
    nav {
      flex-direction: column;
      align-items: start;
    }
  }
  /*#show_bg_2 {*/
  /*  background-image:*/
  /*      linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),*/
  /*      url('images/background.jpg');*/
  /*  width: 80%;*/
  /*  height: 400px;*/
  /*  background-size: cover;*/
  /*  color: white;*/
  /*  padding: 20px;*/
  /*}*/
</style>