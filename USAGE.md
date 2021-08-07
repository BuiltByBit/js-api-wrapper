We assume the `wrapper` variable has been bound to.

```
Non-helper functions:
wrapper.init(token) where token is an object with the fields 'type' and 'value'.
wrapper.get(endpoint, sort_options)
wrapper.patch(endpoint, body)
wrapper.post(endpoint, body)
wrapper.delete(endpoint)
wrapper.health()
wrapper.ping()

Alerts:
wrapper.alerts.list(sort_options)
wrapper.alerts.list_all(sort_options)
wrapper.alerts.list_until(func, sort_options)
wrapper.alerts.mark_as_read()

Conversations:
wrapper.conversations.list(sort_options)
wrapper.conversations.create(title, message, recipient_id)
wrapper.conversations.list_replies(conversation_id, sort_options)
wrapper.conversations.reply(conversation_id, message)

Members:
wrapper.members.self()
wrapper.members.fetch(member_id)

wrapper.member.profile_posts.list(sort_options)
wrapper.member.profile_posts.fetch(profile_post_id)
wrapper.member.profile_posts.edit(profile_post_id, message)
wrapper.member.profile_posts.delete(profile_post_id)

Resources:
wrapper.resources.list(sort_options)
wrapper.resources.list_owned(sort_options)
wrapper.resources.fetch(resource_id)
wrapper.resources.edit(resource_id, fields)

wrapper.resources.downloads.list(resource_id, sort_options)
wrapper.resources.downloads.list_member(resource_id, member_id, sort_options)
wrapper.resources.downloads.list_version(resource_id, version_id, sort_options)

wrapper.resources.licenses.list(resource_id, sort_options)
wrapper.resources.licenses.issue(resource_id, fields)
wrapper.resources.licenses.fetch(resource_id, license_id)
wrapper.resources.licenses.modify(resource_id, license_id, fields)
wrapper.resources.licenses.validate(resource_id, member_id, fields)

wrapper.resources.purchases.list(resource_id, sort_options)
wrapper.resources.purchases.fetch(resource_id, purchase_id)

wrapper.resources.reviews.list(resource_id, sort_options)
wrapper.resources.reviews.fetch(resource_id, member_id)
wrapper.resources.reviews.respond(resource_id, review_id, message)

wrapper.resources.updates.list(resource_id, sort_options)
wrapper.resources.updates.latest(resource_id)
wrapper.resources.updates.fetch(resource_id, update_id)
wrapper.resources.updates.delete(resource_id, update_id)

wrapper.resources.versions.list(resource_id, sort_options)
wrapper.resources.versions.latest(resource_id)
wrapper.resources.versions.fetch(resource_id, version_id)
wrapper.resources.versions.delete(resource_id, version_id)

Threads:
wrapper.threads.list(sort_options)
wrapper.threads.fetch(thread_id)
wrapper.threads.list_replies(thread_id, sort_options)
wrapper.threads.reply(thread_id, message)
```
