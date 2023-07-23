<template>
    <router-link class="nav-button" to="collections"><span><slot></slot></span></router-link>
</template>

<script>
export default {
  name: "NavButton"
}
</script>

<style scoped>
  .nav-button {
    position: relative;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: calc(var(--sizeindex) * .8);
  }
  /*.button__bg {*/
  /*  position: absolute;*/
  /*  left: 0;*/
  /*  top: 0;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  opacity: .9;*/
  /*  background-color: black;*/
  /*  border-radius: 5px;*/
  /*}*/
  a {
    color: white;
    text-decoration: none;
    z-index: 2;
  }
  .nav-button span {
    position: relative;
    z-index: 2;
  }
  .nav-button:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.6;
    background-color: black;
    border-radius: 5px;
    cursor: pointer;
  }
</style>