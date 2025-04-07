<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { Icon, type IconProps } from "@iconify/vue";

const ssr = typeof window === "undefined";

const props = withDefaults(defineProps<IconProps>(), { ssr });
</script>

<template>
  <Icon v-bind="props" />
</template>
