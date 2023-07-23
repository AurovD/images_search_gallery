<template>
  <form @submit.prevent class="input">
    <input
        v-focus
        v-model="input"
        type="text"
        placeholder="Searching topic"
    >
    <button @click="onSubmit"></button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter} from 'vue-router'

export default {
  name: "SearchInput",
  props: {
    modelValue: [String, Number]
  },
  setup() {
    const input = ref("")
    const router = useRouter();

    function onSubmit() {
      router.push({
        name: 'Photos',
        query: {
          query: input.value,
        },
      })
    }

    return {
      input,
      onSubmit
    }
  }
}
</script>

<style scoped>
  .input {
    position: relative;
    display: flex;
    flex-grow: 1;
    width: 100%;
    margin-bottom: 1.3rem;
  }
  input {
    outline: none;
    border: none;
    background: #fff;
    color: #111;
    flex-grow: 1;
    width: 100%;
    height: 54px;
    border-radius: 5px;
    font-size: calc(var(--sizeindex) * 1.5);
    padding-left: 38px;
    /*margin-bottom: 1.3rem;*/
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    height: 54px;
    width: 54px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background-image: url("/src/assets/search-interface-symbol.png");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
  }
</style>