// External library for sending messages
class ExternalMessagingLibrary {
  constructor() {}

  sendExternalTextMessage(text) {
    console.log(`Sending an external text message: ${text}`);
  }

  sendExternalImageMessage(imageUrl) {
    console.log(`Sending an external image message: ${imageUrl}`);
  }
}

// Unified Message interface
class Message {
  constructor() {}

  send() {
    console.log('Sending a generic message.');
  }
}

// Adapter for text messages
class TextMessageAdapter extends Message {
  constructor(externalLibrary, text) {
    super();
    this.externalLibrary = externalLibrary;
    this.text = text;
  }

  send() {
    this.externalLibrary.sendExternalTextMessage(this.text);
  }
}

// Adapter for image messages
class ImageMessageAdapter extends Message {
  constructor(externalLibrary, imageUrl) {
    super();
    this.externalLibrary = externalLibrary;
    this.imageUrl = imageUrl;
  }

  send() {
    this.externalLibrary.sendExternalImageMessage(this.imageUrl);
  }
}

// External messaging library instance
const externalLibrary = new ExternalMessagingLibrary();

// Usage example
const textMessageAdapter = new TextMessageAdapter(
  externalLibrary,
  'Hello from the adapter!'
);
const imageMessageAdapter = new ImageMessageAdapter(
  externalLibrary,
  'https://example.com/image.jpg'
);

textMessageAdapter.send(); // Output: Sending an external text message: Hello from the adapter!
imageMessageAdapter.send(); // Output: Sending an external image message: https://example.com/image.jpg
