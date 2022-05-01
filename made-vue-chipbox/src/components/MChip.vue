<template>
  <li class="made-chip">
    <slot>
      {{ chip.content }}
    </slot>

    <button
      class="made-chip-remove"
      v-if="!isReadonly"
      @click="removeChip(chip)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ChipItem } from "../models";

/**
 * Defines the interface for the data for a chip.
 */
interface ChipData {}

export default /*#__PURE__*/ defineComponent({
  name: "MChip",
  props: {
    /**
     * The chip to display.
     */
    chip: {
      type: Object as PropType<ChipItem>,
      default: () => ({}),
    },
    /**
     * Indicates whether the component is in a read-only state.
     */
    isReadonly: {
      type: Boolean,
      default: false,
    },
  },
  data(): ChipData {
    return {};
  },
  emits: ["remove"],
  methods: {
    /**
     * Emits the remove event.
     */
    removeChip(chip: ChipItem) {
      this.$emit("remove", chip);
    },
  },
});
</script>

<style lang="sass">
</style>
