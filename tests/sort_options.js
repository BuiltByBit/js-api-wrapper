// Copyright (c) 2021 MC-Market (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/MC-Market-org/js-api-wrapper/blob/main/LICENSE)

const { SortOptions } = require("../src/SortOptions.js");

function single_sort() {
    let options = new SortOptions();
    options.sort = "purchases";

    if (options.toQueryString() !== "?sort=purchases") {
        throw "single_sort() failed - expected did not match actual.";
    }
}

function single_order() {
    let options = new SortOptions();
    options.order = "asc";

    if (options.toQueryString() !== "?order=asc") {
        throw "single_order() failed - expected did not match actual.";
    }
}

function single_page() {
    let options = new SortOptions();
    options.page = 5;

    if (options.toQueryString() !== "?page=5") {
        throw "single_page() failed - expected did not match actual.";
    }
}

single_sort();
single_order();
single_page();