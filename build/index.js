"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const vamtiger_regex_html_body_inner_html_1 = require("vamtiger-regex-html-body-inner-html");
exports.default = (params) => {
    const html = params.html;
    const match = XRegExp.exec(html, vamtiger_regex_html_body_inner_html_1.default);
    const title = match && match.innerHtml && match.innerHtml.trim();
    return title;
};
//# sourceMappingURL=index.js.map