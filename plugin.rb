# name: basic-plugin
# about: A super simple plugin to demonstrate how plugins work
# version: 0.0.1
# authors: Awesome Plugin Developer
after_initialize do
    Topic.register_custom_field_type(:import_id, :string)
    add_to_serializer(:topic_view, :import_id) { object.topic.import_id }
end
