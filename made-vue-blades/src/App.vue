<template>
  <m-blade-layout :blades="blades">
    <template v-for="blade in blades" v-slot:[blade.key] :key="blade.key">
      <div>
        <p>This is some content from {{ blade.title }}</p>
        <button class="blade-button" @click="onCreateBlade">
          Create another blade
        </button>
      </div>
    </template>
  </m-blade-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MBlade from "./components/MBlade.vue";
import MBladeLayout from "./components/MBladeLayout.vue";

export default defineComponent({
  name: "App",
  components: { MBlade, MBladeLayout },
  data() {
    return {
      blades: [
        {
          key: "blade1",
          title: "Blade 1",
          canClose: false,
        },
      ],
    };
  },
  watch: {},
  methods: {
    onCreateBlade() {
      var currentIndex = this.blades.length;
      this.blades.push({
        key: "blade" + (currentIndex + 1),
        title: "Blade " + (currentIndex + 1),
        canClose: true,
      });
    },
  },
});
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  color: #2c3e50;
  height: 100%;
}
</style>
