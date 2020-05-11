# name: basic-plugin
# about: A super simple plugin to demonstrate how plugins work
# version: 0.0.1
# authors: Awesome Plugin Developer


register_asset "stylesheets/common/basic-import-id.scss"

after_initialize do
    add_to_serializer(:topic_view, :custom_fields, false) {
    object.topic.custom_fields
    }
end
