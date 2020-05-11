import { getOwner } from "discourse-common/lib/get-owner";

export default {
  setupComponent(attrs, component) {
    let custom_array = topic.custom_fields.import_id.split("_");
    let import_id = custom_array[1];
    console.log("import_id: " + import_id, this);
  },
};
