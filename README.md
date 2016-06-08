# twitter-profile-media [![Build Status][travis-image]][travis-url]

> Get twitter profile image and banner

## Install

```sh
npm install --save twitter-profile-media
```

## Usage

```js
import media from 'twitter-profile-media';
import tokens from 'twitter-tokens';

media(tokens, 'twitter').then(({ image, banner }) => {
  image;  // https://pbs.twimg.com/profile_images/615680132565504000/EIpgSD2K.png
  banner; // https://pbs.twimg.com/profile_banners/783214/1436401887
});
```

## API

### media(tokens, username)

Return a promise that resolves to user profile image and banner.

#### tokens

Type: `object`

Valid [twitter tokens (dev credentials)][twitter-apps].
You can use [twitter-tokens][twitter-tokens] to simplify getting tokens.

#### username

Type: `string`

Twitter username.

## Related

* [get-tweets][get-tweets] — get latest tweets
* [get-twitter-info][get-twitter-info] — get info about target username
* [get-twitter-followers][get-twitter-followers] — get followers for target username
* [tweet-links][tweet-links] — extract links from tweet
* [tweets-stats][tweets-stats] — get statistics from array of tweets
* [twitter-mentions][twitter-mentions] — get latest mentions for target username
* [twitter-tokens][twitter-tokens] — get twitter tokens

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/twitter-profile-media
[travis-image]: https://travis-ci.org/andrepolischuk/twitter-profile-media.svg?branch=master

[twitter-apps]: https://apps.twitter.com
[twitter-tokens]: https://www.npmjs.com/package/twitter-tokens

[get-tweets]: https://github.com/iamstarkov/get-tweets
[get-twitter-info]: https://github.com/iamstarkov/get-twitter-info
[get-twitter-followers]: https://github.com/iamstarkov/get-twitter-followers
[tweet-links]: https://github.com/iamstarkov/tweet-links
[tweets-stats]: https://github.com/iamstarkov/tweets-stats
[twitter-mentions]: https://github.com/iamstarkov/twitter-mentions
[twitter-tokens]: https://github.com/iamstarkov/twitter-tokens
