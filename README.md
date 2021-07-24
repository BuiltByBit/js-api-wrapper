# MC-Market's Official JS API Wrapper
[![GitHub license](https://img.shields.io/badge/license-MIT-007ec6)](https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

An official asynchronous JavaScript (Node.js) wrapper for MC-Market's [Ultimate REST API](https://www.mc-market.org/wiki/ultimate-api/).

* Fully asynchronous design compatible with .then() notation or async/await.
* Dynamically stalls requests when a rate limit is hit.
* A comprehensive set of usage examples.
* Heavily commented making contributions painless.

## Installation & Basic Usage
Install via npm:
...

Initialise wrapper and fetch information about yourself via Promise's .then() notation:
```JS
const wrapper = require('./mcm-js-api-wrapper');
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};

wrapper.init(token).then(init => {
  if (init.result === "error") {
    console.log(init.error);
    process.exit(0);
  }
}).then(wrapper.members.self().then(self => {
  console.log(self);
}));
```

Initialise wrapper and fetch information about yourself via async/await:
```JS
const wrapper = require('./mcm-js-api-wrapper');
const token = {type: "Private", value: "xXoIjvQ6G8UmUPufZWxN-Kkyd54Js_bY"};
...

if (await wrapper.init(token).result === "error") {
  console.log(wrapper);
  process.exit(0);
}

console.log(await wrapper.members.self());
```

## API
We assume the `wrapper` variable has been bound to.

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

## Issues & Support
Whether you're wanting to report a bug you've come across during use of this wrapper or are seeking general help/assistance, please utilise the [issues tracker](https://github.com/Majored/mcm-js-api-wrapper/issues) and tag your issue appropriately during creation.

I try to respond to issues as fast as possible.
