const DAB_GIF = "https://media3.giphy.com/media/lae7QSMFxEkkE/giphy.gif";
module.exports.DAB_GIF = DAB_GIF;

const IMG_REPLACE_REGEX = /<img(.*?)src="[^"]*"([^>]*)>/g;

module.exports.dab = function(body) {
  return body.replace(IMG_REPLACE_REGEX, `<img$1src="${DAB_GIF}"$2>`);
}
