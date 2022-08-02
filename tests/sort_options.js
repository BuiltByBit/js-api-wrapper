// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const assert = require("assert");
const { SortOptions } = require("../src/SortOptions.js");

function single_sort() {
    let options = new SortOptions();
    options.sort = "purchases";
    assert.strictEqual(options.toQueryString(), "?sort=purchases");
}

function single_order() {
    let options = new SortOptions();
    options.order = "asc";
    assert.strictEqual(options.toQueryString(), "?order=asc");
}

function single_page() {
    let options = new SortOptions();
    options.page = 5;
    assert.strictEqual(options.toQueryString(), "?page=5");
}

single_sort();
single_order();
single_page();