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
import media from 'twitter-profile-media';
import tokens from 'twitter-tokens';

media(tokens, 'twitter', (err, {image, banner}) => {
  if (err) throw err;
  image;  // https://pbs.twimg.com/profile_images/615680132565504000/EIpgSD2K.png
  banner; // https://pbs.twimg.com/profile_banners/783214/1436401887
});
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/twitter-profile-media
[travis-image]: https://travis-ci.org/andrepolischuk/twitter-profile-media.svg?branch=master

[twitter-apps]: https://apps.twitter.com
[twitter-tokens]: https://www.npmjs.com/package/twitter-tokens
