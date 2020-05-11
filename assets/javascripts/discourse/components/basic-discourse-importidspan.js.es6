import computed from "discourse-common/utils/decorators";
//import api from "discourse/lib/plugin-api";
export default Ember.Component.extend({
  @computed("topic.custom_fields.import_id")
  importId(cf) {
    var currentUser = Discourse.User.current();
    if (currentUser.trust_level > 3) {
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
      let link = "";
      if (legacyId > 1) {
        link =
          '<span class="category-name import-id">Imported Thread ID: <a class="import-id-link" href="https://www.unix.com/showthread.php?t=' +
          legacyId +
          '">' +
          legacyId +
          "</a></span>";
      } else {
        //link = '<span class="category-name">Imported Thread ID: Not Found</span>';
        link = "";
      }
      return Ember.String.htmlSafe(link);
    } else {
      return "";
    }
  },
});
