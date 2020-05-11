import computed from "discourse-common/utils/decorators";
//import { htmlSafe } from "@ember/template";
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
    let link = "";
    if (legacyId > 1) {
      link =
        '<span class="import-id">Imported Thread ID: <a class="import-id-link" href="https://www.unix.com/showthread.php?t=' +
        legacyId +
        '">' +
        legacyId +
        "</a></span>";
    } else {
      link = '<span class="import-id">Imported Thread ID: Not Found</span>';
    }
    return Ember.String.htmlSafe(link);
  },
});
