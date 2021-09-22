<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <slot name="a" />
    <pre v-on:click="clear">{{ message }}</pre>
    <br />
    <div id="out" class="out" v-on:click="out_event">
      OUT
      <div id="mid" class="mid" v-on:click.self="middle_event">
        MIDDLE
        <div id="in" class="in" v-on:click="in_event">IN</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckEvent",
  props: {
    title: String,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    out_event: function(event) {
      this.message +=
        "Out-Eevnt: [" +
        event.target.id +
        " → " +
        event.currentTarget.id +
        "]\n";
    },
    middle_event: function(event) {
      this.message +=
        "Middle-Eevnt: [" +
        event.target.id +
        " → " +
        event.currentTarget.id +
        "]\n";
    },
    in_event: function(event) {
      this.message +=
        "In-Eevnt: [" +
        event.target.id +
        " → " +
        event.currentTarget.id +
        "]\n";
    },
    clear: function() {
      this.message = "";
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
pre {
  font-size: 14px;
  line-height: 1.25;
}
div.out {
  padding: 5px 0;
  margin: 0 auto;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 5px 0;
  background-color: #ddd;
  width: 200px;
  height: 175px;
}
div.in {
  padding: 5px 0;
  background-color: #eee;
  width: 100px;
  height: 150px;
}
</style>
