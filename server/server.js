const express = require("express"),
  app = express(),
  port = 4020;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const setUpMessageRoutes = require("./routes/message-routes");
setUpMessageRoutes(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
