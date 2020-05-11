# name: basic-plugin
# about: A super simple plugin to demonstrate how plugins work
# version: 0.0.1
# authors: Awesome Plugin Developer
# discourse=> select * from topic_custom_fields where topic_id = 138187;
#  id | topic_id |   name    |   value   |         created_at         |         updated_at         
# ----+----------+-----------+-----------+----------------------------+----------------------------
#  25 |   138187 | import_id | thread-33 | 2020-03-15 19:14:25.726726 | 2020-03-15 19:14:25.726726

after_initialize do
    Topic.register_custom_field_type(:import_id, :text)
    add_to_serializer(:topic_view, :custom_fields, false) {
    object.topic.custom_fields
    }
end
