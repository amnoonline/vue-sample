<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ val }}</p>
    <div>Value : <input type="number" v-model="val" /></div>
    <table>
      <tr>
        <th>add:</th>
        <td>{{ add }}</td>
      </tr>
      <tr>
        <th>sub:</th>
        <td>{{ sub }}</td>
      </tr>
      <tr>
        <th>multiple:</th>
        <td>{{ mult }}</td>
      </tr>
      <tr>
        <th>devide:</th>
        <td>{{ div }}</td>
      </tr>
    </table>

    <!-- <input type="text" v-model="input" />
    <button type="button" v-on:click="clickFn">BUTTON</button> -->
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
      val: 0,
      add: 0,
      sub: 0,
      mult: 0,
      div: 0,
      // input: defaultMsg,
      // msg: "お名前は？",
    };
  },
  watch: {
    val: function(value) {
      let val = parseInt(value);
      this.add = Math.floor(val + 2);
      this.sub = Math.floor(val - 2);
      this.mult = Math.floor(val * 2);
      this.div = Math.floor(val / 2);
    },
  },
  created: function() {
    this.val = 5;
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
