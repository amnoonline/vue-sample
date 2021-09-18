<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>
    <br />
    <div>
      <textarea cols="40" rows="15" v-model="fomula"></textarea>
    </div>
    <div>
      <button type="button" v-on:click="clickFn">BUTTON</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  props: {
    title: String,
  },
  data() {
    return {
      msg: "Enter Exp",
      fomula: "0",
    };
  },
  methods: {
    clickFn: function() {
      let arr = this.fomula.trim().split("\n");
      let last = arr.pop();
      let fn = "";
      for (let n in arr) {
        if (arr[n].trim() === "") return;
        fn += "var " + arr[n] + ";";
      }
      fn += "return " + last + ";";
      let exp = "function f() {" + fn + "} f();";
      let ans = eval(exp);
      this.msg = "answer: " + ans;
      let re = arr.join(";").trim();
      if (re != "") re += ";";
      re += last;
      this.$emit("result-event", re, ans);
    },
  },
};
</script>
