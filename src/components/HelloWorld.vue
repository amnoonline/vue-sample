<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="input" />
    <button type="button" v-on:click="clickFn">BUTTON</button>
  </div>
</template>

<script>
const defaultMsg = "no input";
export default {
  name: "HelloWorld",
  props: {
    title: String,
  },
  data() {
    return {
      input: defaultMsg,
      msg: "お名前は？",
    };
  },
  methods: {
    clickFn: function() {
      if (this.input === defaultMsg) return;
      this.msg = "私の名前は" + this.input + "です。";
      this.$emit("result-event", this.input); //親コンポーネントで配置されているresult-eventイベントに子コンポーネントからの値(ここではthis.input)を渡している
    },
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
