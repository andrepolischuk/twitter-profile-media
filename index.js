import info from 'get-twitter-info';

export default function twitterProfileMedia(tokens, name) {
  return info(tokens, name).then(res => {
    const image = res.profile_image_url_https.replace(/_normal/, '');
    const banner = res.profile_banner_url;
    return { image, banner };
  });
}
