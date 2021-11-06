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
import MImage from "./components/MImage.vue";
import MImageBg from "./components/MImageBg.vue";

export default defineComponent({
  name: "App",
  components: { MImage, MImageBg },
  data() {
    return {
      imageSrc: "https://placekitten.com/300/200",
      imageAlt: "A cute kitten",
      placeholderSrc: "https://via.placeholder.com/300x200/fff.png",
      placeholderAlt: "Placeholder",
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
