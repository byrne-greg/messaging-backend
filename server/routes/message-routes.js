module.exports = function(app) {
  const messageController = require("../controllers/message-controller.js");

  app
    .route("/message")
    .get(messageController.getMessages)
    .post(messageController.sendMessage);

  app.route("/message/:user").get(messageController.getMessagesForUser);

  app
    .route("/conversation/:user")
    .get(messageController.getConversationForUser);
};
