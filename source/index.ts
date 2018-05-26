import * as XRegExp from 'xregexp';
import {default as regex, Match} from 'vamtiger-regex-html-body-inner-html';

export default (params: Params) => {
    const html = params.html;
    const match = XRegExp.exec(html, regex) as Match;
    const title = match && match.innerHtml && match.innerHtml.trim();

    return title;
}

export interface Params {
    html: string;
}