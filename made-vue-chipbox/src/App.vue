<template>
  <div>
    <m-chip-box
      :chips="chips"
      :chipExpr="getChipContent"
      @change="onChipsChanged"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MChipBox from "./components/MChipBox.vue";
import MChip from "./components/MChip.vue";
import ChipItem from "./models/ChipItem";

export default defineComponent({
  name: "App",
  components: { MChipBox, MChip },
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
    getChipContent(chip: ChipItem) {
      return chip.content.text;
    },
  },
});
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  color: #2c3e50;
  height: 100%;
  padding: 32px;
}
</style>
