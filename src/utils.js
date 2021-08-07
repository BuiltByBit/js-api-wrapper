// Copyright (c) 2021 Harry [Majored] [hello@majored.pw]
// MIT License (https://github.com/Majored/mcm-js-api-wrapper/blob/main/LICENSE)

/* imports */
const debug = require("debug")("mcm-js-api-wrapper");

/* construct */
let object = {};

/* functions */
object.object_to_query_string = function(sort_options) {
  let as_array = [];

  for (index in sort_options) {
    as_array.push(`${index}=${sort_options[index]}`);
  }

  return "?" + as_array.join("&");
};

// Compute how long, if at all, we should stall the next request in order to be compliant with rate limiting.
//
// Note:
// If stalling is required, it will be handled by the inner `stall_for_helper` function. Thus, once we return from
// this function, the caller can be sure that we're now within rate limiting rules and can freely make its request.
object.stall_if_required = async function(limits, write) {
  let stall = true;

  while(stall) {
    let time = Date.now();

    // As rate limits for WRITE operations are applied independently of those applied to READ operations, we first
    // determine if we're in a WRITE operation, and if we are, attempt to stall if required. `stall_for_helper` will
    // return true if a stall was required (and it completed the stall), or false if no stall was required.
    if (write && await this.stall_for_helper(limits.write_last_retry, limits.write_last_request, time)) {
      continue;
    } else if (write) {
      stall = false;
      continue;
    }

    // If we haven't started a new iteration of this loop yet, we must be in a READ operation.
    if (await this.stall_for_helper(limits.read_last_retry, limits.read_last_request, time)) {
      continue;
    } else {
      stall = false;
    }
  }
};

// A helper function for `stall_if_required` which computes over a generic set of rate limiting parameters.
object.stall_for_helper = async function(last_retry, last_request, time) {
  // If we've previously hit a rate limit, no other request has been completed with a non-429 response since, and
  // we're still within the Retry-After delay period, we should stall this request. The exact amount of time we stall
  // for derives from the amount of time that has passed since the last request, minus the Retry-After value.
  if (last_retry > 0 && (time - last_request) < last_retry) {
    let stall_for = last_retry - (time - last_request);
    debug(`Stalling request for ${stall_for}ms.`);
    await new Promise(resolve => setTimeout(resolve, stall_for));

    return true;
  } else {
    return false;
  }
};

/* exports */
module.exports = object;
