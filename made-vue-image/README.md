<img src="https://github.com/MADE-Apps/MADE-Vue/blob/main/assets/ProjectBanner.png" alt="MADE Vue project banner" />

# MADE Vue - Image

[![License - MIT](https://img.shields.io/badge/License-MIT-yellow)](https://github.com/MADE-Apps/MADE-Vue/blob/main/LICENSE)
[![Build - GitHub Actions](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-image.yml/badge.svg)](https://github.com/MADE-Apps/MADE-Vue/actions/workflows/made-vue-image.yml)
[![Source - npmjs](https://img.shields.io/npm/v/made-vue-image)](https://www.npmjs.com/package/made-vue-image)
[![npm](https://img.shields.io/npm/dt/made-vue-image)](https://www.npmjs.com/package/made-vue-image)

A Vue 3 image and background image component, allowing an image to be downloaded while showing a loading indicator, showing a placeholder image if the source image fails to load.

<img src="https://raw.githubusercontent.com/MADE-Apps/MADE-Vue/main/assets/components/image.png" alt="MADE Vue Image Component" />

## Usage

To customize the image or background image component, you'll want to import the scss styling:

```
import "made-vue-image/styles.scss";
```

In your main file, you can import the component:

```
import { createApp } from "vue";
import App from "./App.vue";

import Image from "made-vue-image";

const app = createApp(App);
...
app.use(Image);
...
app.mount("#app");
```

You can then reference the image and background image components in your app:

```
<template>
  <div>
    <m-image
      :src="imageSrc"
      :alt="imageAlt"
      :placeholderSrc="placeholderSrc"
      :placeholderAlt="placeholderAlt"
      class="my-image mb-3"
    />

    <m-image-bg
      :src="imageSrc"
      :placeholderSrc="placeholderSrc"
      class="my-image"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page",
  data() {
    return {
      imageSrc: "https://placekitten.com/300/200",
      imageAlt: "A cute kitten",
      placeholderSrc: "https://via.placeholder.com/300x200/fff.png",
      placeholderAlt: "Image placeholder",
    };
  },
});
</script>

<style>
.mb-3 {
  margin-bottom: 1rem;
}

.my-image {
  width: 300px;
  height: 200px;
}
</style>
```
