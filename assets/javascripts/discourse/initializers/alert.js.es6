import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  initialize() {
    withPluginApi("0.8", initWithApi);
    //console.log("alert boxes are annoying!");
  },
};
