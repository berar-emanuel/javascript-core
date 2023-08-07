class MessagingService {
  constructor() {
    if (MessagingService.instance) {
      return MessagingService.instance;
    }

    // Initialize the messaging service here (e.g., setting up connections, configurations).
    this.messages = [];
    MessagingService.instance = this;
  }

  sendMessage(content) {
    console.log('Sending message:', content);
    this.messages.push(content);
  }

  getMessages() {
    console.log('All messages:', this.messages);
    return this.messages;
  }
}

// Usage example
const messagingService1 = new MessagingService();
const messagingService2 = new MessagingService();

messagingService1.sendMessage('Hello, how are you?');
messagingService2.sendMessage("I'm good, thank you!");

messagingService1.getMessages();
messagingService2.getMessages();
