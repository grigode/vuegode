import { App } from "vue";
import vgBaseLayout from "./components/vg-base-layout.vue";

export function install(app: App) {
  app.component("vgBaseLayout", vgBaseLayout);
}

export { vgBaseLayout };
export type { PropType } from "vue";
