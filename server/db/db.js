var Datastore = require("nedb");
var db = new Datastore();
const sampleMessages = require("./sampleMessages.js");
sampleMessages.forEach(message => {
  db.insert(message.deconstruct());
});

module.exports = db;
