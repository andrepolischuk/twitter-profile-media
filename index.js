import info from 'get-twitter-info';
import Promise from 'pinkie-promise';

export default function twitterProfileMedia(tokens, name) {
  return new Promise((resolve, reject) => {
    info(tokens, name, (err, res) => {
      if (err) return reject(err);
      const image = res.profile_image_url_https.replace(/_normal/, '');
      const banner = res.profile_banner_url;
      resolve({image, banner});
    });
  });
};
