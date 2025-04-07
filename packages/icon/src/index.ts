import { App } from "vue";
import * as Iconify from "@iconify/vue";
import vgIcon from "./components/vg-icon.vue";

export function install(app: App) {
  app.component("vg-icon", vgIcon);
}

export { vgIcon, Iconify };
export type { PropType } from "vue";
