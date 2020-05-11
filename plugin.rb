# name: import-id
# about: A super simple plugin to demonstrate how plugins work
# version: 0.0.1
# authors: Awesome Plugin Developer
# url: https://github.com/unixneo/basic-discourse-plugin


enabled_site_setting :import_id_enabled

after_initialize do
    add_to_serializer(:topic_view, :custom_fields, false) {
    object.topic.custom_fields
    }
end
