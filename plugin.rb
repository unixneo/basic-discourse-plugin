# name: legacy_forum_info
# about: A super simple plugin to demonstrate how plugins work
# version: 0.0.1
# authors: Awesome Plugin Developer

enabled_site_setting :legacy_forum_info_enabled

PLUGIN_NAME ||= 'LegacyForumInfo'

register_asset "stylesheets/common/basic-import-id.scss"

after_initialize do
    add_to_serializer(:topic_view, :custom_fields, false) {
    object.topic.custom_fields
    }
end
