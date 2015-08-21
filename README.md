# twitter-profile-media [![Build Status][travis-image]][travis-url]

  > Get twitter profile image and banner

## Install

```sh
npm install --save twitter-profile-media
```

## Usage

You will need valid [twitter tokens (dev credentials)][twitter-apps].
You can use [twitter-tokens][twitter-tokens] to simplify getting tokens.

```js
var media = require('twitter-profile-media');
var tokens = require('twitter-tokens');

media(tokens, 'twitter', (err, res) => {
  if (err) throw err;
  res.image;  // https://pbs.twimg.com/profile_images/615680132565504000/EIpgSD2K.png
  res.banner; // https://pbs.twimg.com/profile_banners/783214/1436401887
});
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/twitter-profile-media
[travis-image]: https://travis-ci.org/andrepolischuk/twitter-profile-media.svg?branch=master

[twitter-apps]: https://apps.twitter.com
[twitter-tokens]: https://www.npmjs.com/package/twitter-tokens
