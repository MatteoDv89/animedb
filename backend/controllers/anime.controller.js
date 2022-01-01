const api = require("anime-vostfr");

module.exports.getHomePage = async (req, res) => {
  let id = req.params;
  let name = id.id.split("%20").join(" ");

  const getData = api.loadAnime().then(async (data) => {
    let animeData = api.searchAnime(data, name);
    return animeData;
  });

  const resInfo = getData.then((result) => {
    return result;
  });
  let data = [];

  resInfo.then(async (res) => await data.push(res)).then(() => res.json(data));
};

module.exports.getEpisodePage = async (req, res) => {
  let url = req.params;
  let splitUrl = url.id.split("-");
  let urlData = splitUrl.slice(0, splitUrl.length - 1).join("-");
  let number = parseInt(splitUrl.slice(splitUrl.length - 1, splitUrl.length));
  let id = `/anime/episode/${urlData}`;

  const getData = api.loadAnime().then(async (data) => {
    let info = await api.getEmbed(id).catch((err) => console.log(err));
    return info;
  });
  getData.then((result) => res.send(result[0]));
};

module.exports.getDetailPage = async (req, res) => {
  let url = req.params;
  let id = `/anime/info/${url.id}`;

  const getData = api.loadAnime().then(async (data) => {
    let info = await api.getMoreInformation(id);
    return info;
  });
  let data = [];
  getData
    .then(async (res) => await data.push(res))
    .then(() => res.json({ synop: data[0].synop, eps: data[0].eps }));
};
