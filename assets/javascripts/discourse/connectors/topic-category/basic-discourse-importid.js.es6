import { getOwner } from "discourse-common/lib/get-owner";
//import Topic from "discourse/models/topic";

export default {
  setupComponent(attrs, component) {
    const currentUser = api.getCurrentUser();
    //let custom_array = topic.custom_fields.import_id.split("_");
    //let custom_array = topic.custom_fields["import_id"].split("_");
    //let import_id = custom_array[1];
    //console.log("import_id: " + import_id, "user: " + currentUser, this);
    console.log("blah", this);
  },
};
