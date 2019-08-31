const db = require("../db/db");
const MessageModel = require("../models/message-model");

module.exports = {
  getMessages: function(req, res) {
    db.find({}, function(err, items) {
      res.json(items);
    });
  },

  getMessagesForUser: function(req, res) {
    db.find({ _toUser: req.params.user }, function(err, items) {
      res.json(items);
    });
  },

  getConversationForUser: function(req, res) {
    db.find({
      $or: [{ _fromUser: req.params.user }, { _toUser: req.params.user }]
    })
      .sort({ _timeStamp: 1 }) // earliest first
      .exec(function(err, items) {
        res.json(items);
      });
  },

  sendMessage: function(req, res) {
    const newMessage = new MessageModel({});
    if (req.query.messageText) {
      newMessage.setMessageText(req.query.messageText);
    }
    if (req.query.fromUser) {
      newMessage.setFromUser(req.query.fromUser);
    }
    if (req.query.toUser) {
      newMessage.setToUser(req.query.toUser);
    }
    if (req.query.isRead) {
      newMessage.setIsRead(req.query.isRead);
    }
    db.insert(newMessage.deconstruct());
    res.sendStatus(200);
  }
};
