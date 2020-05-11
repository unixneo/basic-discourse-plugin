import computed from "discourse-common/utils/decorators";
import { htmlSafe } from "@ember/template";
export default Ember.Component.extend({
  @computed("topic.custom_fields.import_id")
  importId(cf) {
    let legacyId = "";
    if (typeof cf !== "undefined") {
      console.log("foo", cf);
      let myArray = cf.split("-");
      let raw = myArray[1];
      if (parseInt(raw) > 0) {
        legacyId = raw;
      } else legacyId = 0;
    } else {
      legacyId = 0;
    }
    let mySpan = "";
    if (legacyId > 1) {
      let link =
        '<a class="import-id-link" href="https://www.unix.com/showthread.php?t=' +
        legacyId +
        '">' +
        legacyId +
        "</a>";
      let linkOut = htmlSafe(link);
      mySpan = linkOut;
    } else {
      mySpan = "Import Thread Id Not Found";
    }
    return mySpan;
  },
});
