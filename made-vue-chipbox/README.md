<img src="https://github.com/MADE-Apps/MADE-Vue/blob/main/assets/ProjectBanner.png" alt="MADE Vue project banner" />

# MADE Vue - ChipBox

[![License - MIT](https://img.shields.io/badge/License-MIT-yellow)](https://github.com/MADE-Apps/MADE-Vue/blob/main/LICENSE)
[![Build - GitHub Actions](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-chipbox.yml/badge.svg)](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-chipbox.yml)
[![Source - npmjs](https://img.shields.io/npm/v/made-vue-chipbox)](https://www.npmjs.com/package/made-vue-chipbox)
[![npm](https://img.shields.io/npm/dt/made-vue-chipbox)](https://www.npmjs.com/package/made-vue-chipbox)

A Vue 3 chip/tag input component, a UI component for allowing multiple value input.

<img src="https://raw.githubusercontent.com/MADE-Apps/MADE-Vue/main/assets/components/chipbox.png" alt="MADE Vue Chip Box Component" />

## Usage

To customise the chip box layout, you'll want to import the scss styling:

```
import "made-vue-chipbox/styles.scss";
```

In your main file, you can import the component:

```
import { createApp } from "vue";
import App from "./App.vue";

import ChipBox from "made-vue-chipbox";

const app = createApp(App);
...
app.use(ChipBox);
...
app.mount("#app");
```

You can then reference the chip box layout component in your app:

```
<template>
  <div>
    <m-chip-box
      :chips="chips"
      :chipExpr="(chip) => chip.content.text"
      @change="onChipsChanged"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      chips: [
        {
          content: { text: "United Kingdom" },
        },
      ],
    };
  },
  methods: {
    onChipsChanged(chips: ChipItem[]) {
      this.chips = chips;
    },
  },
});
</script>
```
