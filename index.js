import Twitter from 'twitter';

export default (tokens, name, fn) => {
  const client = new Twitter(tokens);
  const options = {screen_name: name};

  client.get('/users/show.json', options, (err, res) => {
    if (err) return fn(err);
    const image = res.profile_image_url_https.replace(/_normal/, '');
    const banner = res.profile_banner_url;
    fn(err, {image, banner});
  });
};
