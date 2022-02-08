<template>
  <div class="made-blade-layout">
    <slot>
      <m-blade
        v-for="blade in blades"
        :key="blade.key"
        :id="blade.key"
        :class="{ 'made-blade-active': isActiveBlade(blade.key) }"
        :canClose="blade.canClose"
        :maximized="blade.maximized"
        @maximize="onBladeMaximize"
        @close="onBladeClose"
      >
        <template v-slot:header>
          <slot :name="`${blade.key}-header`">
            <h2 class="made-blade-header-title">{{ blade.title }}</h2>
          </slot>
        </template>
        <slot :name="`${blade.key}`" v-bind="blade"></slot>
      </m-blade>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import MBlade from "./MBlade.vue";

interface BladeLayoutData {}

export interface Blade {
  key: string;
  title: string | undefined;
  maximized: boolean | undefined;
  canClose: boolean | undefined;
  data: object | undefined;
}

export default /*#__PURE__*/ defineComponent({
  components: { MBlade },
  name: "MBladeLayout",
  props: {
    blades: {
      type: Array as PropType<Blade[]>,
      required: false,
      default: () => [] as Blade[],
    },
  },
  data(): BladeLayoutData {
    return {};
  },
  computed: {
    activeBladeKey() {
      return this.blades[this.blades.length - 1].key;
    },
    hasBlades() {
      return this.blades && this.blades.length > 0;
    },
  },
  mounted() {
    if (this.hasBlades) {
      this.scrollToActiveBlade();
    }
  },
  watch: {
    "blades.length": {
      handler() {
        this.scrollToActiveBlade();
      },
    },
  },
  methods: {
    scrollToActiveBlade() {
      if (this.activeBladeKey) {
        this.scrollToBlade(this.activeBladeKey);
      }
    },
    scrollToBlade(id: string) {
      setTimeout(() => {
        const activeBlade = document.getElementById(id);
        if (activeBlade) {
          activeBlade.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 0);
    },
    isActiveBlade(key: string) {
      return this.activeBladeKey === key;
    },
    onBladeMaximize(bladeMaximize: { id: string; maximized: boolean }) {
      var blade = this.blades.find((blade) => blade.key === bladeMaximize.id);
      if (blade) {
        blade.maximized = bladeMaximize.maximized;
      }

      this.scrollToBlade(bladeMaximize.id);
    },
    onBladeClose(bladeId: String): void {
      var blade = this.blades.find((blade) => blade.key === bladeId);
      if (blade) {
        var bladeIdx = this.blades.indexOf(blade);
        var deleteCount = this.blades.length - bladeIdx;
        this.blades.splice(bladeIdx, deleteCount);
      }

      this.scrollToActiveBlade();
    },
  },
});
</script>

<style lang="sass">
</style>
