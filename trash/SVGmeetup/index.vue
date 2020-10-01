<script>
import CSSAnimation from "./components/CSSAnimation";
import SMILAnimation from "./components/SMILAnimation";
import CanvasAnimation from "./components/CanvasAnimation";
import CanvasBackground from "./components/CanvasBackground";

export default {
  name: "animation",
  components: {
    CSSAnimation,
    SMILAnimation,
    CanvasAnimation,
    CanvasBackground,
  },
  data() {
    return {
      componentArray: [],
      current: "CSS",
      visibility: false,
      count: 0,
    };
  },
  watch: {
    count(val) {
      this.componentArray.length = val;
    },
  },
  computed: {
    currentComponent: (vm) => {
      switch (vm.current) {
        case "CSS":
          return CSSAnimation;
          break;

        case "SMIL":
          return SMILAnimation;
          break;
        case "Canvas":
          return CanvasAnimation;
          break;
      }
    },
  },
  created() {
    this.componentArray.length = 1;
  },
  methods: {
    setCount(val) {
      this.count = Number(val.target.value);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.app {
  margin-top: 20px;
  width: 100%;
  flex-grow: 1;
}

.componentArray {
  display: flex;
  flex-wrap: wrap;
}

.count {
  margin-top: 20px;
}
</style>

<template>
  <div class="container">
    <div class="controls">
      <div class="radioButtons">
        <input
          type="radio"
          id="componenChoice1"
          name="currentComponent"
          value="CSS"
          v-model="current"
        />
        <label for="componenChoice1">CSS</label>

        <input
          type="radio"
          id="componenChoice2"
          name="currentComponent"
          value="SMIL"
          v-model="current"
        />
        <label for="componenChoice2">SMIL</label>

        <input
          type="radio"
          id="componenChoice3"
          name="currentComponent"
          value="Canvas"
          v-model="current"
        />
        <label for="componenChoice3">Canvas</label>

        <input
          type="radio"
          id="componenChoice4"
          name="currentComponent"
          value="CanvasBackground"
          v-model="current"
        />
        <label for="componenChoice4">Canvas background</label>
      </div>

      <input class="count" type="number" :value="count" @input="setCount" />
    </div>

    <div class="app">
      <CanvasBackground :count="count" v-if="current === 'CanvasBackground'" />

      <div v-else class="componentArray">
        <component
          :is="currentComponent"
          v-for="(component, index) in componentArray"
          :key="index"
        />
      </div>
    </div>

    <!-- <CSSAnimation v-show="visibility" />
    <SMILAnimation v-show="visibility" />
    <CanvasAnimation v-show="visibility" /> -->
  </div>
</template>
