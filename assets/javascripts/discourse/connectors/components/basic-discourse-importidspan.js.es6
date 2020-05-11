import computed from "discourse-common/utils/decorators";
export default Ember.Component.extend({
  @computed("topic.custom_fields.import_id") //here you need to do custom_fields.import_id
  importId(cf) {
    //afterwards import_id will be in the cf variable
    console.log("foo", cf); //then you can do you calculations here and return
    //let cf_array = cf.import_id.split("_");
    //let cf_import_id = cf_array[1];
    //let id = cf["import_id"];
    //console.log("bar ", id);
    let myArray = cf.split("_");
    let legacyId = myArray[1];
    console.log("bar", legacyId);
    //let myjson = JSON.parse(myobj);
    //console.log("bean", myjson);
    return "1111111"; //when you do {{importId}} in the template of this component you will be able to access it.
  },
});
