# name: legacy-info
# about: plugin to show migrated legacy thread id in topics
# version: 0.0.42
# date: 31 July 2020
# authors: Neo, spirobel
# url: https://github.com/unixneo/basic-discourse-plugin

# setting below does not work (yet)
enabled_site_setting :legacy_info_enabled

register_asset "stylesheets/common/basic-import-id.scss"

after_initialize do
    add_to_serializer(:topic_view, :custom_fields, false) {
    object.topic.custom_fields
    }
end
