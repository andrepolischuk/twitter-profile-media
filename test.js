import test from 'ava';
import tokens from 'twitter-tokens';
import media from './index.es5';

test.cb('should get image and banner', t => {
  media(tokens, 'twitter', (err, {image, banner}) => {
    t.ifError(err);
    t.ok(image.length);
    t.ok(banner.length);
    t.end();
  });
});

test.cb('should get image only', t => {
  media(tokens, 'andrepolischuk', (err, {image, banner}) => {
    t.ifError(err);
    t.ok(image.length);
    t.notOk(banner);
    t.end();
  });
});
