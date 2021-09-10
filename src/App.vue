<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :items="list" :name="name" />
    <input type="text" v-model="name" />
    <Button txt="BUTTON" type="button" :click-fn="clickFn" :number="num" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Button,
  },
  data() {
    return {
      num: 1,
      list: {
        Foo: { tel: "000" },
      },
      name: "no-name",
    };
  },
  methods: {
    clickFn: function() {
      this.num = this.num * 2;
      if (this.num > 100) {
        this.num = 1;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
