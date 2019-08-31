# messaging-backend
Simple Node backend server with NeDB demonstrating sending/persisting messages

## Scripts
- `npm run start` launches the app server on port 4020


## How to use

### Routes
Four configured routes that perform read/write to the DB using a predefined model.
1. GET `/message` - returns all messages
2. POST `/message` - sends a message
3. GET `/message/:userid` - returns all messages sent to user
4. GET `/conversation/:userid` - returns all messages sent from or to user

### Model
Message Model class
* `toUser` _string_ - userid indicating receiver of message
* `fromUser` _string_ - userid indicating sender of message
* `messageText` _string_ - the message text
* `isRead` _boolean_ - indicates whether the message has been read (not configured)
* `timeStamp` _Date_ - timestamp for message creation