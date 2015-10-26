import info from 'get-twitter-info';

export default (tokens, name, fn) => {
  info(tokens, name, (err, res) => {
    if (err) return fn(err);
    const image = res.profile_image_url_https.replace(/_normal/, '');
    const banner = res.profile_banner_url;
    fn(err, {image, banner});
  });
};
