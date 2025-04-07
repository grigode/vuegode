import { App } from "vue";
import vgIcon from "./components/vg-icon.vue";

export function install(app: App) {
  app.component("vg-icon", vgIcon);
}

export { vgIcon };
export type { PropType } from "vue";
