// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

class LicensesHelper {
    #wrapper;
    
    constructor(wrapper) {
        this.#wrapper = wrapper;
    }
    
    // List a page of licenses for a given resource.
    //
    // Response data: {}
    async list(resourceId, sortOptions) {
        return await this.#wrapper.get(`/resources/${resourceId}/licenses`, sortOptions);
    }
    
    // List all pages of licenses for a given resource.
    //
    // Response data: {}
    async listAll(resourceId, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/licenses`, () => true, sortOptions);
    }
    
    // List multiple pages of licenses for a given resource until a condition is no longer met.
    //
    // Response data: {}
    async listUntil(resourceId, should_continue, sortOptions) {
        return await this.#wrapper.listUntil(`/resources/${resourceId}/licenses`, should_continue, sortOptions);
    }
    
    // Issue a new permanent license for a given resource.
    //
    // Response data: {}
    async issuePermanent(resourceId, purchaserid, active) {
        return await this.#wrapper.post(`/resources/${resourceId}/licenses`, {
            permanent: true,
            purchaserid,
            active,
        });
    }
    
    // Issue a new temporay license for a given resource.
    //
    // Response data: {}
    async issueTemporary(resourceId, purchaserid, startDate, endDate) {
        return await this.#wrapper.post(`/resources/${resourceId}/licenses`, {
            permanent: false,
            purchaserid,
            startDate,
            endDate,
        });
    }
    
    // Fetch a license for a given resource.
    //
    // Response data: {}
    async fetch(resourceId, licenseId) {
        return await this.#wrapper.get(`/resources/${resourceId}/licenses/${licenseId}`);
    }
    
    // Fetch a member's license for a given resource.
    //
    // Response data: {}
    async fetchMember(resourceId, purchaserId, fields) {
        let endpoint = `/resources/${resourceId}/licenses/members/${purchaserId}`;
      
        if (this.#wrapper.token.type === "Shared") endpoint += `?nonce=${fields.nonce}&timestamp=${fields.timestamp}`;
      
        return await this.#wrapper.get(endpoint, fields);
    }
    
    // Modify a permanent license (and convert to permanent if currently temporary).
    async modifyPermanent(resourceId, licenseId, active) {
        return await this.#wrapper.patch(`/resources/${resourceId}/licenses/${licenseId}`, {
            permanent: true,
            active,
        });
    }
    
    // Modify a temporary license (and convert to temporary if currently permanent).
    async modifyTemporary(resourceId, license_id, startDate, endDate) {
        return await this.#wrapper.patch(`/resources/${resourceId}/licenses/${license_id}`, {
            permanent: false,
            startDate,
            endDate,
        });
    }
}

exports.LicensesHelper = LicensesHelper;