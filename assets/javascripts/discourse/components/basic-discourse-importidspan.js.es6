import computed from "discourse-common/utils/decorators";
export default Ember.Component.extend({
  @computed("topic.custom_fields.import_id")
  importId(cf) {
    let currentUser = Discourse.User.current();
    console.log("test current", Discourse.User.current());
    console.log("test discourse", Discourse);

    if (Discourse.User.current() == null) {
      console.log("current user is null or undefined");
    }
    if (1 == 1) {
      return "";
    } else {
      let min_trust_level_setting = Discourse.SiteSettings.min_trust_level;
      let trustLevel = parseInt(Discourse.SiteSettings.min_trust_level);
      if (min_trust_level_setting > 0) {
        trustLevel = min_trust_level_setting;
      } else {
        trustLevel = 4;
      }
      if (parseInt(currentUser.trust_level) >= parseInt(trustLevel)) {
        let legacyId = "";
        if (typeof cf !== "undefined") {
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
    }
  },
});
