<template>
  <button v-bind:type="type" v-on:click="clickFn">{{ txt }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    txt: String,
    clickFn: Function,
    type: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: #000;
  color: #fff;
  font-weight: bold;
}
</style>
