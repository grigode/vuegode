import { App } from "vue";
import { addIcon } from "@iconify/vue";
import vgIcon from "./components/vg-icon.vue";

export function install(app: App) {
  app.component("vg-icon", vgIcon);

  addIcon("vg:vuegode", {
    body: '<path d="M8 18 0 0h5l3 7 3-7h7l-2.357 5.5H12l-1.286 3H17.5L11.643 18Zm1.184-3.357 1.668-.01 1.952-3.857h-2.4l-.4-.619-1.314 3.214Z" fill="currentColor" fill-rule="evenodd"/>',
    width: 18,
    height: 18,
  });
}

export { vgIcon };
export type { PropType } from "vue";
