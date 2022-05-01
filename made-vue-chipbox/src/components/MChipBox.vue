<template>
  <div class="made-chipbox">
    <input
      class="made-chipbox-input"
      @input="onInputChange"
      @change="onInputSubmit"
    />

    <ul class="made-chipbox-chips">
      <m-chip
        v-for="chip in chipBoxChips"
        :key="chip.content"
        :chip="chip"
        :isReadonly="isReadonly"
        @remove="removeChip(chip)"
      >
        {{ getChipContent(chip) }}
      </m-chip>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ChipItem } from "../models";
import MChip from "./MChip.vue";

/**
 * Defines the interface for the data for a chip box.
 */
interface ChipBoxData {
  /**
   * The chips to display.
   */
  chipBoxChips: ChipItem[];
  /**
   * The function for debouncing the chip box input.
   */
  debounceInputValue: Function;
}

function debounce<T extends Function>(cb: T, wait = 100) {
  var h: NodeJS.Timeout;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}

export default /*#__PURE__*/ defineComponent({
  name: "MChipBox",
  components: { MChip },
  props: {
    /**
     * The source array used to generate the chips.
     */
    chips: {
      type: Array as PropType<ChipItem[]>,
      default: () => [],
    },
    /**
     * A function that returns the content of the chip to display.
     * @param chip The chip object.
     * @param key The index of the chip in the source array.
     */
    chipExpr: {
      type: Function,
      default: () => (chip: ChipItem) => chip.content,
    },
    /**
     * Indicates whether to allow duplicate values to be accepted.
     */
    allowDuplicates: {
      type: Boolean,
      default: true,
    },
    /**
     * Indicates whether the component is in a read-only state.
     */
    isReadonly: {
      type: Boolean,
      default: false,
    },
    /**
     * Indicates whether to add the input value as a chip on submit.
     */
    addOnSubmit: {
      type: Boolean,
      default: true,
    },
  },
  data(): ChipBoxData {
    return {
      chipBoxChips: this.chips,
      debounceInputValue: debounce((newValue: string) => {
        this.$emit("textChange", newValue);
      }, 350),
    };
  },
  emits: ["change", "textChange", "add", "remove"],
  watch: {
    chips: {
      handler(newChips) {
        this.setupChips(newChips);
      },
      deep: true,
    },
  },
  methods: {
    /**
     * Sets the chips to display
     */
    setupChips(newChips: ChipItem[]) {
      this.chipBoxChips = newChips;
    },
    /**
     * Removes a chip from the chip box.
     * @param chip The chip to remove.
     */
    removeChip(chip: ChipItem) {
      const index = this.chipBoxChips.indexOf(chip);
      if (index > -1) {
        this.chipBoxChips.splice(index, 1);
        this.$emit("change", this.chipBoxChips);
        this.$emit("remove", chip);
      }
    },
    /**
     * Gets the content of a chip item.
     */
    getChipContent(chip: ChipItem) {
      return this.chipExpr ? this.chipExpr(chip) ?? chip.content : chip.content;
    },
    /**
     * Handles the input "change" event, adding an item to the chip box.
     */
    onInputSubmit(event: Event) {
      const input = event.target as HTMLInputElement;
      const value = input.value;
      if (value) {
        const chip = { content: value };

        var update = false;

        if (this.allowDuplicates) {
          if (this.addOnSubmit) {
            this.chipBoxChips.push(chip);
          }
          update = true;
        } else {
          const index = this.chipBoxChips.findIndex(
            (c) => this.getChipContent(c) === value
          );
          if (index === -1) {
            if (this.addOnSubmit) {
              this.chipBoxChips.push(chip);
            }
            update = true;
          }
        }

        if (update) {
          this.$emit("change", this.chipBoxChips);
          this.$emit("add", chip);
        }
      }
      input.value = "";
    },
    /**
     * Handles the input "input" event, emits the textChanged event.
     */
    onInputChange(event: Event) {
      this.debounceInputValue((event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style lang="sass">
</style>
