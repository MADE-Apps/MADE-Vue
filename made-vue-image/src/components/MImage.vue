<template>
  <div class="image-layout" v-if="!hideImage">
    <transition name="fade">
      <div
        class="image-layout__image image-layout__loading"
        :class="imageClass"
        v-if="loading"
      >
        <slot name="loading">
          <div class="loading-indicator" />
        </slot>
      </div>

      <img
        :src="placeholderSrc"
        :alt="placeholderAlt"
        class="image-layout__image image-layout__placeholder"
        v-else-if="showPlaceholder"
        :class="imageClass"
      />

      <img
        :src="src"
        :alt="alt"
        class="image-layout__image"
        :class="imageClass"
        v-else-if="showImage"
      />
    </transition>

    <img
      :src="src"
      @load="onImageLoaded"
      @error="onImageLoadFailed"
      style="display: none"
      v-if="!showImage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ImageData {
  loading: boolean;
  failed: boolean;
}

export default /*#__PURE__*/ defineComponent({
  name: "MImage",
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    placeholderSrc: {
      type: String,
      default: null,
    },
    placeholderAlt: {
      type: String,
      default: null,
    },
    imageClass: {
      type: Object,
      default: null,
    },
  },
  data(): ImageData {
    return {
      loading: false,
      failed: false,
    };
  },
  computed: {
    showImage() {
      return !this.loading && !this.failed && this.src !== null;
    },
    showPlaceholder() {
      return !this.loading && this.failed && this.placeholderSrc !== null;
    },
    hideImage() {
      return !this.loading && !this.showImage && !this.showPlaceholder;
    },
  },
  watch: {
    src: {
      handler() {
        this.loadImage();
      },
      deep: true,
    },
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    loadImage() {
      this.loading = true;
      if (this.src == null) {
        this.onImageLoadFailed();
      }
    },
    onImageLoaded() {
      this.loading = false;
      this.failed = false;
      this.$emit("loaded");
    },
    onImageLoadFailed() {
      this.loading = false;
      this.failed = true;
      this.$emit("failed");
    },
  },
});
</script>

<style lang="sass">
</style>
