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
var twitterProfileMedia = require('twitter-profile-media');
var twitterTokens = require('twitter-tokens');

twitterProfileMedia(twitterTokens, 'jsunderhood', function (err, media) {
  media; // {image: '...', banner: '...'}
});
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/twitter-profile-media
[travis-image]: https://travis-ci.org/andrepolischuk/twitter-profile-media.svg?branch=master

[twitter-api]: https://apps.twitter.com
[twitter-tokens]: https://www.npmjs.com/package/twitter-tokens
