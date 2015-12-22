import test from 'ava';
import tokens from 'twitter-tokens';
import media from './index.es5';

test('get image and banner', async t => {
  const {image, banner} = await media(tokens, 'twitter');
  t.ok(image.length);
  t.ok(banner.length);
});

test('get image only', async t => {
  const {image, banner} = await media(tokens, 'andrepolischuk');
  t.ok(image.length);
  t.notOk(banner);
});
