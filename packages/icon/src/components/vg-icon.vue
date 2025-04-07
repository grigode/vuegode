<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { Icon, type IconProps } from "@iconify/vue";

const props = withDefaults(defineProps<IconProps>(), {
  ssr: typeof window === "undefined",
});
</script>

<template>
  <Icon v-bind="props" />
</template>
