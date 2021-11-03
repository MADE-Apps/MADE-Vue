<template>
  <div class="rangeselector">
    <span class="rangeselector__value rangeselector__start" v-if="showValues">{{
      formatValue(start)
    }}</span>
    <div class="rangeselector__input">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="start"
        ref="startThumb"
        @input="onStartChange"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="end"
        ref="endThumb"
        @input="onEndChange"
      />
    </div>
    <span class="rangeselector__value rangeselector__end" v-if="showValues">{{
      formatValue(end)
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface RangeSelectorData {
  start: number | null;
  end: number | null;
  debounceValue: Function;
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
  name: "MRangeSelector",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    debounceDelay: {
      type: Number,
      default: 350,
    },
    modelValue: {
      type: Object as PropType<Array<number>>,
      default: () => [0, 100],
    },
    showValues: {
      type: Boolean,
      default: true,
    },
    formatValue: {
      type: Function,
      default: (value: number) => value,
    },
  },
  data(): RangeSelectorData {
    return {
      start: this.modelValue[0],
      end: this.modelValue[1],
      debounceValue: debounce((newValue: Number[]) => {
        this.$emit("update:modelValue", newValue);
      }, this.debounceDelay),
    };
  },
  watch: {
    modelValue: {
      handler(value: Array<number>) {
        if (value && value.length <= 2) {
          this.start = value[0];
          this.end = value[1];
        }
      },
      deep: true,
    },
  },
  methods: {
    onStartChange() {
      var _start = Number(this.start);
      var _end = Number(this.end);

      if (_start > _end) {
        this.end = _start;
      }

      this.onUpdateValue();
    },
    onEndChange() {
      var _start = Number(this.start);
      var _end = Number(this.end);

      if (_end < _start) {
        this.start = _end;
      }

      this.onUpdateValue();
    },
    onUpdateValue() {
      this.debounceValue([Number(this.start), Number(this.end)]);
    },
  },
});
</script>

<style lang="sass">
</style>
