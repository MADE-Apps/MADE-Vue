<template>
  <ul class="accordion">
    <slot />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface AccordionData {}

export default /*#__PURE__*/ defineComponent({
  name: "MAccordion",
  data(): AccordionData {
    return {};
  },
});
</script>

<style lang="sass">
</style>
