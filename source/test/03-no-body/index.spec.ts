import {expect} from 'chai';
import getBodyInnerHtml from '../../index';
import html from './mock-data';

describe("vamtiger-get-html-body-inner-html: should get return null when the body", function () {
    it("is missing", async function () {
        const expected = null;
        const htmlTitle = getBodyInnerHtml({ html });

        expect(htmlTitle).to.not.be.ok;
        expect(htmlTitle).to.equal(expected);
    })
});