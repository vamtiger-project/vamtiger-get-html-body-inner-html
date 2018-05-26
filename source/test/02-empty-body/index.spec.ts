import {expect} from 'chai';
import getBodyInnerHtml from '../../index';
import html from './mock-data';

describe("vamtiger-get-html-body-inner-html: should get return an empty string when the body", function () {
    it("has no inner HTML", async function () {
        const expected = "";
        const htmlTitle = getBodyInnerHtml({ html });

        expect(htmlTitle).to.not.be.ok;
        expect(htmlTitle).to.equal(expected);
    })
});