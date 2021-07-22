// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* construct */
let object = {};

object.list_replies = async function(conversation_id, wrapper) {
  return await wrapper.get(`/conversations/${conversation_id}/replies`);
};

/* exports */
module.exports = object;
