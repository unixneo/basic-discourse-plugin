import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: "alert",
  initialize() {
    withPluginApi("0.8", initWithApi);
    //console.log("alert boxes are annoying!");
  },
};
