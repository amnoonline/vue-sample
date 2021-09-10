<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(item, key) in items" :key="key">
      <p>{{ key }} - {{ item.tel }}</p>
    </div>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    items: Object,
    name: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
