<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button v-on:click="clickFn">
      {{ btn }}
    </button>
    <transition
      name="transit"
      v-on:before-enter="startAction"
      v-on:before-leave="startAction"
      v-on:after-enter="endAction"
      v-on:after-leave="endAction"
    >
      <p v-if="flag" class="trans">{{ text }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
  },
  data() {
    return {
      message: "transitonを試す",
      flag: true,
      btn: "Hide",
      text: "切り替わります",
    };
  },
  methods: {
    clickFn: function() {
      this.flag = !this.flag;
    },
    startAction: function() {
      if (this.flag) {
        this.message = "現れます...";
        this.text = "現れます";
      } else {
        this.message = "消えます.................";
        this.text = "消えます";
      }
    },
    endAction: function() {
      if (this.flag) {
        this.btn = "Hide";
        this.message = "現れました";
        this.text = "現れました";
      } else {
        this.btn = "Show";
        this.message = "消えました";
        this.text = "消えました";
      }
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
.trans {
  width: 550px;
  font-size: 20px;
  padding: 20px 0;
  margin: 40px auto 0;
  background-color: #eee;
}

.transit-enter-active {
  transition: 1s;
}
.transit-leave-active {
  transition: 1.5s;
}
.transit-enter {
  transform: translateX(999px);
  opacity: 0;
}
.transit-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.transit-leave {
  transform: translateX(0);
  opacity: 1;
}
.transit-leave-to {
  transform: translateX(-999px);
  opacity: 0;
}
</style>
