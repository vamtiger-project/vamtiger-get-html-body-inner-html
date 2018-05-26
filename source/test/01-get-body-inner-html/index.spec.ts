import {expect} from 'chai';
import getBodyInnerHtml from '../../index';
import html from './mock-data';

describe("vamtiger-get-html-body-inner-html: should get the body", function () {
    it("inner HTML", async function () {
        const expected = `<div>
        Some HTML body inner HTML
    </div>`;
        const htmlTitle = getBodyInnerHtml({ html });

        expect(htmlTitle).to.be.ok;
        expect(htmlTitle).to.equal(expected);
    })
});