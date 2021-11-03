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
import MRangeSelector from "./components/MRangeSelector.vue";

export default defineComponent({
  name: "App",
  components: { MRangeSelector },
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

<style>
#app {
  margin: 5rem;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
