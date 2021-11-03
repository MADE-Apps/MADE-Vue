<img src="https://github.com/MADE-Apps/MADE-Vue/blob/main/assets/ProjectBanner.png" alt="MADE Vue project banner" />

# MADE Vue - Range Selector

[![License - MIT](https://img.shields.io/badge/License-MIT-yellow)](https://github.com/MADE-Apps/MADE-Vue/blob/main/LICENSE)
[![Build - GitHub Actions](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-range-selector.yml/badge.svg)](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-range-selector.yml)
[![Source - npmjs](https://img.shields.io/npm/v/made-vue-range-selector)](https://www.npmjs.com/package/made-vue-range-selector)
[![npm](https://img.shields.io/npm/dt/made-vue-range-selector)](https://www.npmjs.com/package/made-vue-range-selector)

A Vue 3 range selector component, a double slider that allows the user to select a value range between a minimum and maximum value.

## Usage

To customise the range selector, you'll want to import the scss styling:

```
import "made-ui-rangeselector/styles.scss";
```

In your main file, you can import the component:

```
import { createApp } from "vue";
import App from "./App.vue";

import RangeSelector from "made-ui-rangeselector";

const app = createApp(App);
...
app.use(RangeSelector);
...
app.mount("#app");
```

You can then reference the range selector component in your app:

```
<template>
  <div>
    <m-range-selector
      v-model="rangeValue"
      :min="rangeMin"
      :max="rangeMax"
      :step="rangeStep"
      :showValues="rangeShowValues"
      :formatValue="formatRangeValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyPage",
  data() {
    return {
      rangeValue: [0, 100],
      rangeMin: 0,
      rangeMax: 100,
      rangeStep: 1,
      rangeShowValues: true,
      formatRangeValue: (v: number) => {
        return `${v}%`;
      },
    };
  },
  watch: {
    rangeValue(value) {
      console.log(value);
    },
  },
});
</script>
```
