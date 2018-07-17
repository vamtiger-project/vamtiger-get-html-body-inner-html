# VAMTIGER Get Body Inner HTML
[VAMTIGER Get Body Inner HTML](https://github.com/vamtiger-project/vamtiger-get-body-inner-html) will return the title for defined HTML document text

## Installation
[VAMTIGER Get Body Inner HTML](https://github.com/vamtiger-project/vamtiger-get-body-inner-html) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-body-inner-html
```
or
```bash
yarn add vamtiger-get-body-inner-html
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get Body Inner HTML](https://github.com/vamtiger-project/vamtiger-get-body-inner-html):
```javascript
import getBodyInnerHtml from 'vamtiger-get-body-inner-html';
```
or
```javascript
const getBodyInnerHtml = require('vamtiger-get-body-inner-html').default;
```

[VAMTIGER Get Body Inner HTML](https://github.com/vamtiger-project/vamtiger-get-body-inner-html) can then be used to test whether a defined input string contains a _HTML_ **Title**:
```javascript
const getBodyInnerHtml = require('vamtiger-get-body-inner-html').default;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>
`;
const bodyInnerHtml = getBodyInnerHtml({ html });
/*    <div>
 *        Some HTML body inner HTML
 *    </div>
 */
```