import { v4 as uuidv4 } from 'uuid';

class ChatUser {
  constructor(uid, timestamp) {
    this._uuid = uid || uuidv4();
    this._timestamp = timestamp || new Date().getTime();
  }

  toStateUserObject = (appearanceSettings) => {
    return {
      uid: this._uuid,
      timestamp: this._timestamp,
      appearance: appearanceSettings,
      connected: true,
    };
  };
}

export default ChatUser;
