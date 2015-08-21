# twitter-profile-media [![Build Status][travis-image]][travis-url]

  > Get twitter profile image and banner

## Install

```sh
npm install --save twitter-profile-media
```

## Usage

  You will need valid [twitter tokens (dev credentials)][twitter-api].
  You can use [twitter-tokens][twitter-tokens] to simplify getting tokens.

```js
var twitterProfileBanner = require('twitter-profile-media');
var twitterTokens = require('twitter-tokens');

twitterProfileBanner(twitterTokens, 'jsunderhood', function (err, banners) {
  banners; // {ipad: ..., ipad_retina: ...}
});
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/twitter-profile-media
[travis-image]: https://travis-ci.org/andrepolischuk/twitter-profile-media.svg?branch=master

[twitter-api]: https://apps.twitter.com
[twitter-tokens]: https://www.npmjs.com/package/twitter-tokens
