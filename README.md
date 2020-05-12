# legacy-info

### version 0.0.1

## Current Status

### Live testing on https://community.unix.com/

This Discourse plugin adds:

- The thread id of the correponponding legacy (migrated) forum next to the categories in a Discourse topic.
- A link to the legacy forum thread.
- A site setting for the minimum trust level to view legacy info.

## TODO

- The link to the legacy forum thread is hard coded into the component logic. This should be in a site setting. Anyone who wants to use this plugin now will need to clone it and manually change the code.

- This is my first Discourse plugin. Please PR or post any suggested improvements. I'm sure this plugin needs a lot of work to match the expected quality of a Discourse plugin.

See: https://community.unix.com/t/paid-gig-requirements-for-discourse-plugin-for-topic-serializer-api-v2/378385

## topic_custom_fields

```
# discourse=> select * from topic_custom_fields where topic_id = 138187;
#  id | topic_id |   name    |   value   |         created_at         |         updated_at
# ----+----------+-----------+-----------+----------------------------+----------------------------
#  25 |   138187 | import_id | thread-33 | 2020-03-15 19:14:25.726726 | 2020-03-15 19:14:25.726726
```
