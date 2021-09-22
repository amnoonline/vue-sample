<template>
  <div id="app">
    <!-- <Calc :title="title" v-on:result-event="appAction" />
    <br />
    <div><table v-html="log"></table></div> -->
    <!-- <CheckEventLevel :title="title">
      <p slot="a">slotの値を表示</p>
    </CheckEventLevel> -->

    <Transition :title="title"></Transition>
  </div>
</template>

<script>
import Transition from "./components/Transition.vue";

export default {
  name: "App",
  components: {
    Transition,
  },
  data() {
    return {
      title: "slot",
      num: 10,
      result: [],
    };
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
  margin: 5px;
}
table {
  margin: 0 auto;
}
tr td {
  padding: 5px;
  border: 1px solid #ddd;
}
tr th {
  padding: 5px;
  border: 1px solid gray;
}
tr th.head {
  background-color: black;
  color: #fff;
}
</style>
