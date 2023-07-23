<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  /* colors */
  /*--clr-main: #19292D;*/
  /*--clr-wtext: #fff;*/
  /*--clr-bg: #E9EAF2;*/


  /* font-sizes */
  --sizeindex: calc(1vw + 1vh);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color: white;
  background-color: #111111;
  font-family: -apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
}
</style>
