class Chatroom {
  constructor() {
    this.users = {};
  }

  registerUser(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  sendMessage(fromUser, toUser, message) {
    if (toUser in this.users) {
      this.users[toUser].receiveMessage(fromUser, message);
    } else {
      console.log(`${toUser} is not in the chatroom.`);
    }
  }
}

// Colleague: User
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, toUser) {
    this.chatroom.sendMessage(this.name, toUser, message);
  }

  receiveMessage(fromUser, message) {
    console.log(`${this.name} received a message from ${fromUser}: ${message}`);
  }
}

// Creating instances of users
const john = new User('John');
const jane = new User('Jane');
const alice = new User('Alice');

// Creating a chatroom
const chatroom = new Chatroom();

// Registering users with the chatroom
chatroom.registerUser(john);
chatroom.registerUser(jane);
chatroom.registerUser(alice);

// Users sending messages through the mediator
john.send('Hello everyone!', 'Jane');
jane.send('Hey John!', 'Alice');
alice.send('Hi there!', 'John');
alice.send('Hi, Jane!', 'Frank'); // Frank is not in the chatroom
