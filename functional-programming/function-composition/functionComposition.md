### Summary

Function composition is a technique in functional programming where you combine multiple functions to create a new function.

### Business case

Messaging application, where we use function composition to process and transform messages as they are sent and received.

```javascript
// Define functions for processing messages
function addTimestamp(message) {
  const timestamp = new Date().toLocaleTimeString();
  return `${timestamp} - ${message}`;
}

function encryptMessage(message) {
  // Simulate encryption
  return `Encrypted: ${message}`;
}

function sendMessage(message) {
  console.log(`Sending message: ${message}`);
}

// Create a composition function for sending a secured message
const secureMessage = (message) =>
  sendMessage(encryptMessage(addTimestamp(message)));

// Create a composition function for sending a standard message
const standardMessage = (message) => sendMessage(addTimestamp(message));

// Use the composition functions to send messages
secureMessage('Hello, Bob!'); // Output: Sending message: Encrypted: 3:25:15 PM - Hello, Bob!
standardMessage('Hi, Alice!'); // Output: Sending message: 3:25:45 PM - Hi, Alice!
```

### Walkthrough

1. We define three functions: `addTimestamp`, `encryptMessage`, and `sendMessage`, each responsible for a specific aspect of message processing.

2. We create two composition functions, `secureMessage` and `standardMessage`. `secureMessage` composes the `addTimestamp`, `encryptMessage`, and `sendMessage` functions to send a secured message, while `standardMessage` composes only `addTimestamp` and `sendMessage` for a standard message.

3. When we invoke `secureMessage("Hello, Bob!")`, it processes the message by adding a timestamp, encrypting it, and sending the secured message to the console.

4. Similarly, when we invoke `standardMessage("Hi, Alice!")`, it processes the message with just the timestamp and sends the standard message to the console.

Function composition allows you to build complex processing pipelines by combining smaller, reusable functions. It makes your code more modular, maintainable, and easier to reason about, especially when dealing with complex operations in a messaging application, such as encryption, formatting, and sending.
