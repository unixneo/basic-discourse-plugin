import computed from "discourse-common/utils/decorators";
export default Ember.Component.extend({
  @computed("topic.custom_fields.import_id")
  importId(cf) {
    if (typeof cf !== "undefined") {
      let legacyId = "";
      console.log("foo", cf);
      let myArray = cf.split("-");
      let raw = myArray[1];
      if (parseInt(raw) > 0) {
        legacyId = raw;
      } else legacyId = 0;
    } else {
      legacyId = 0;
    }
    return legacyId;
  },
});
