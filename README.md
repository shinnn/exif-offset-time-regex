# exif-offset-time-regex

[![npm version](https://img.shields.io/npm/v/exif-offset-time-regex.svg)](https://www.npmjs.com/package/exif-offset-time-regex)
[![Github Actions](https://action-badges.now.sh/shinnn/exif-offset-time-regex)](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/results/shinnn/exif-offset-time-regex)

A regular expression for values of Exif time offset tags `OffsetTime`, `OffsetTimeOriginal` and `OffsetTimeDigitized`

```javascript
exifOffsetTimeRegex.test('+14:00'); //=> true
exifOffsetTimeRegex.test('-12:00'); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install exif-offset-time-regex
```

## API

```javascript
import exifOffsetTimeRegex from 'exif-offset-time-regex';
```

### exifOffsetTimeRegex

Type: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

It has three capture groups `sign`, `hours` and `minutes`.

```javascript
exifOffsetTimeRegex.exec('+05:45');
/*=> [
  '+05:45',
  '+',
  '05',
  '45',
  groups: {
    sign: '+',
    hour: '05',
    minutes: '45'
  }
] */
```

## License

[ISC License](./LICENSE) © 2019 Shinnosuke Watanabe
