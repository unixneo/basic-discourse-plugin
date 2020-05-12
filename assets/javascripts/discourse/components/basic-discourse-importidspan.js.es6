import computed from "discourse-common/utils/decorators";
//import api from "discourse/lib/plugin-api";
//let min_trust_level = this.siteSettings.minimum_trust_level;
//console.log("mmm", min_trust_level);
export default Ember.Component.extend({
  @computed("topic.custom_fields.import_id")
  importId(cf) {
    let currentUser = Discourse.User.current();
    let min_trust_level_setting = Discourse.SiteSettings.minimum_trust_level;
    let trustLevel = parseInt(min_trust_level_setting);
    console.log("mmm2", min_trust_level_setting);
    if (min_trust_level > 0) {
      trustLevel = min_trust_level_setting;
    } else {
      trustLevel = 4;
    }
    console.log("hmmm", currentUser.trust_level);
    if (parseInt(currentUser.trust_level) >= parseInt(trustLevel)) {
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
