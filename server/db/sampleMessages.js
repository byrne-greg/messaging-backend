const MessageModel = require("../models/message-model");
const sampleMessages = [
  new MessageModel({
    fromUser: "God",
    toUser: "Man",
    messageText: "Hi there!"
  }),
  new MessageModel({
    fromUser: "Man",
    toUser: "God",
    messageText: "How do you do?",
    timeStamp: Date.now() + 1
  })
];

module.exports = sampleMessages;
