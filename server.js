const express = require("express");
const app = express();
const cors = require("cors");
const animeRoute = require("./routes/anime.routes");
const port = process.env.PORT || 5500;

app.use(cors());
express.json();
express.urlencoded({ extended: false });

app.use("/", () => {
  console.log("its connect");
});

app.use("/api/anime", animeRoute);

app.listen(port, () => console.log("Listening on Port " + port));
