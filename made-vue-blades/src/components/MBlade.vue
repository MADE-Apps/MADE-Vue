<template>
  <div :id="id" class="blade" :class="{ 'blade-maximized': isMaximized }">
    <header class="blade-header">
      <div class="blade-header-content">
        <slot name="header">
          <h2 class="blade-header-title">{{ header }}</h2>
        </slot>
        <div class="blade-header-actions">
          <button
            type="button"
            class="blade-action-button blade-action-close-fullscreen"
            title="Collapse"
            v-if="canResize && isMaximized"
            @click="onMaximize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <rect fill="none" height="24" width="24" />
              <path
                d="M22,3.41l-5.29,5.29L20,12h-8V4l3.29,3.29L20.59,2L22,3.41z M3.41,22l5.29-5.29L12,20v-8H4l3.29,3.29L2,20.59L3.41,22z"
              />
            </svg>
          </button>

          <button
            type="button"
            class="blade-action-button blade-action-open-fullscreen"
            title="Maximize"
            v-if="canResize && !isMaximized"
            @click="onMaximize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
              />
            </svg>
          </button>

          <button
            type="button"
            class="blade-action-button blade-action-close"
            title="Close"
            v-if="canClose"
            @click="$emit('close', id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div class="blade-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface BladeData {}

export default /*#__PURE__*/ defineComponent({
  name: "MBlade",
  props: {
    id: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      default: null,
    },
    canClose: {
      type: Boolean,
      default: true,
    },
    canResize: {
      type: Boolean,
      default: true,
    },
    maximized: {
      type: Boolean,
      default: false,
    },
  },
  data(): BladeData {
    return {
      isMaximized: this.maximized,
    };
  },
  watch: {
    maximized(newValue) {
      this.isMaximized = newValue;
    },
  },
  methods: {
    onMaximize() {
      this.isMaximized = !this.isMaximized;
      this.$emit("maximize", { id: this.id, isMaximized: this.isMaximized });
    },
  },
});
</script>

<style lang="sass">
</style>
