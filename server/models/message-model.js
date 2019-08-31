class MessageModel {
  constructor({
    messageText = "",
    fromUser = "",
    toUser = "",
    isRead = false,
    timeStamp = Date.now()
  }) {
    this._messageText = messageText;
    this._fromUser = fromUser.toLowerCase();
    this._toUser = toUser.toLowerCase();
    this._isRead = isRead;
    this._timeStamp = timeStamp;
  }

  deconstruct() {
    return this;
  }

  setMessageText(messageText) {
    this._messageText = messageText;
  }

  setFromUser(fromUser) {
    this._fromUser = fromUser.toLowerCase();
  }

  setToUser(toUser) {
    this._toUser = toUser.toLowerCase();
  }

  setIsRead(isRead) {
    this._isRead = isRead;
  }

  getFromUser() {
    return this._fromUser;
  }

  getToUser() {
    return this._toUser;
  }

  getMessageText() {
    return this._messageText;
  }

  isRead() {
    return this._isRead;
  }

  getTimestamp() {
    return this._timeStamp;
  }
}

module.exports = MessageModel;
