class Message {
  constructor(content) {
    this.content = content;
  }

  send() {
    console.log('Sending a generic message:', this.content);
  }
}

class TextMessage extends Message {
  send() {
    console.log('Sending a text message:', this.content);
  }
}

class ImageMessage extends Message {
  send() {
    console.log('Sending an image message:', this.content);
  }
}

class MessageFactory {
  createMessage(type, content) {
    switch (type) {
      case 'text':
        return new TextMessage(content);
      case 'image':
        return new ImageMessage(content);
      default:
        throw new Error('Invalid message type.');
    }
  }
}

function sendMessage(messageType, content) {
  const messageFactory = new MessageFactory();

  try {
    const message = messageFactory.createMessage(messageType, content);
    message.send();
  } catch (error) {
    console.error(error.message);
  }
}

// Usage example
sendMessage('text', 'Hello, how are you?'); // Output: Sending a text message: Hello, how are you?
sendMessage('image', 'https://example.com/image.jpg'); // Output: Sending an image message: https://example.com/image.jpg
sendMessage('video', 'https://example.com/video.mp4'); // Output: Invalid message type.
