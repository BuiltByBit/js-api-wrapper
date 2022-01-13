// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class MembersHelper {
    #wrapper;
    
    constructor(wrapper) {
      #wrapper = wrapper;
    }
    
    // Fetch information about yourself.
    //
    // Response data: {}
    async self() {
      return await this.wrapper.get("/members/self");
    }
    
    /* functions */
    // Modify information about yourself.
    //
    // Response data: {}
    async modify_self(about_me, custom_title, signature) {
      return await this.wrapper.patch("/members/self", {
        about_me,
        custom_title,
        signature,
      });
    }
    
    // Fetch information about a member.
    //
    // Response data: {}
    async fetch(member_id) {
      return await this.wrapper.get(`/members/${member_id}`);
    }
    
    // Fetch information about a member by username.
    //
    // Response data: {}
    async fetch_by_username(username) {
      return await this.wrapper.get(`/members/usernames/${username}`);
    }
    
    // Fetch a list of recently issued bans.
    //
    // Response data: {}
    async bans() {
      return await this.wrapper.get("/members/bans");
    }
}
  
exports.MembersHelper = MembersHelper;
  