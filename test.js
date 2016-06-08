import test from 'ava';
import tokens from 'twitter-tokens';
import media from './index';

test(async t => {
  const {image, banner} = await media(tokens, 'twitter');
  t.truthy(image.length);
  t.truthy(banner.length);
});
