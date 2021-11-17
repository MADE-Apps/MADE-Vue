<img src="https://github.com/MADE-Apps/MADE-Vue/blob/main/assets/ProjectBanner.png" alt="MADE Vue project banner" />

# MADE Vue - Blades

[![License - MIT](https://img.shields.io/badge/License-MIT-yellow)](https://github.com/MADE-Apps/MADE-Vue/blob/main/LICENSE)
[![Build - GitHub Actions](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-blades.yml/badge.svg)](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-blades.yml)
[![Source - npmjs](https://img.shields.io/npm/v/made-vue-blades)](https://www.npmjs.com/package/made-vue-blades)
[![npm](https://img.shields.io/npm/dt/made-vue-blades)](https://www.npmjs.com/package/made-vue-blades)

A Vue 3 blade layout component, a UI pattern most commonly seen in the Microsoft Azure portal.

## Usage

To customise the blade layout, you'll want to import the scss styling:

```
import "made-vue-blades/styles.scss";
```

In your main file, you can import the component:

```
import { createApp } from "vue";
import App from "./App.vue";

import Blades from "made-vue-blades";

const app = createApp(App);
...
app.use(Blades);
...
app.mount("#app");
```

You can then reference the blade layout component in your app:

```
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

export default defineComponent({
  name: "App",
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
```
