// Mediator Pattern Design
function User(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to)
  },

  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}- ${message}`);
  }
};

function Chatroom() {
  this.member = {};
}

Chatroom.prototype = {
  addMember: function(user) {
    this.member[user.name] = user;
    user.chatroom = this;
  },

  send: function(message, from, to) {
    to.receive(message, from);
  }
};

const Jul = new User('Zulham'),
  Sal = new User('Salma');
  
const wa = new Chatroom();
wa.addMember(Jul);
wa.addMember(Sal);

Jul.send('Hi salma', Sal);
Sal.send('Hi too', Jul);

// mediator pattern digunakan ketika banyak instance object saling berinteraksi / complex logic, diperlukan sebuah mediator sebagai central controller untuk memudahkan dalam memaintain codebase
// dalam hal ini, Chatroom obj menjadi mediator ketika banyak instance user saling berinteraksi