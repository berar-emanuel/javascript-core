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
