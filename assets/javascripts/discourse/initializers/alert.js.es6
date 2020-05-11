import { withPluginApi } from "discourse/lib/plugin-api";
export default {
  name: alert,
  initialize() {
    withPluginApi("0.8", (api) => {
      api.onPageChange(() => console.log("user navigated!"));
      let currentUser = api.getCurrentUser();
      console.log("blah", currentUser);
    });
  },
};
