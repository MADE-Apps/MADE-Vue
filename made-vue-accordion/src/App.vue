<template>
  <m-accordion>
    <m-accordion-item id="accordionItem1" :showExpanded="true">
      <template #header>
        <h2>Item 1</h2>
      </template>

      <div class="item-container">
        Here is some content that is shown by default!
      </div>
    </m-accordion-item>

    <m-accordion-item id="accordionItem2">
      <template #header>
        <h2>Item 2</h2>
      </template>

      <div class="item-container">
        And here is some content that is hidden by default!
      </div>
    </m-accordion-item>
  </m-accordion>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MAccordion from "./components/MAccordion.vue";
import MAccordionItem from "./components/MAccordionItem.vue";

export default defineComponent({
  name: "App",
  components: { MAccordion, MAccordionItem },
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

.item-container {
  padding: 32px 16px;
}
</style>
