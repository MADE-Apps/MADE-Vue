<template>
  <li class="made-accordion-item" :class="{ 'made-accordion-item-active': expanded }">
    <button
      class="made-accordion-item-header"
      type="button"
      :aria-controls="id"
      @click="onExpand"
      :aria-expanded="expanded"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </button>
    <div
      ref="AccordionItemContent"
      class="made-accordion-item-content"
      :aria-hidden="!expanded"
      :id="id"
    >
      <slot />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface AccordionItemData {
  expanded: boolean;
}

export default /*#__PURE__*/ defineComponent({
  name: "MAccordionItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: false,
      default: "",
    },
    showExpanded: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data(): AccordionItemData {
    return {
      expanded: this.showExpanded,
    };
  },
  computed: {},
  mounted() {
    this.updateExpandedState();
  },
  watch: {
    showExpanded: {
      handler(newVal: boolean) {
        this.expanded = newVal;
      },
    },
    expanded: {
      handler() {
        this.$emit("expanded", this.expanded);
      },
    },
  },
  methods: {
    onExpand() {
      this.expanded = !this.expanded;
      this.updateExpandedState();
    },
    updateExpandedState() {
      this.$nextTick(() => {
        var content = this.$refs.AccordionItemContent as HTMLElement;
        if (this.expanded) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
        }
      });
    },
  },
});
</script>

<style lang="sass">
</style>
