const express = require("express");
const bodyPaser = require("body-parser");
const cors = require("cors");
require("./src/bin/DBConfig");
const router = require("./src/routes/index");
const port = 3000;

const app = express();
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());
app.use(cors());
app.use(express.static("3waysmedia"))
app.use("/", router);

app.listen(process.env.PORT||port, () => {
  console.log("Example app listening on port 3000!");
});
