# Functional programming

Functional programming is a paradigm that has gained traction in the JavaScript community, offering developers a more declarative and modular way to write code. Here are some functional programming aspects every JavaScript developer should know:

In a text messaging app, you might have to perform a variety of tasks like sending messages, loading conversations, and updating the UI. Here's how you can employ various functional programming concepts in such a scenario:

### First-Class Functions

Using first-class functions to process incoming and outgoing text messages.

```javascript
// Function to sanitize text messages
const sanitizeText = (text) => text.trim().toLowerCase();

// Function to encrypt text
const encryptText = (text) => btoa(text); // Using Base64 as a simple encryption example

// Composing the two as a first-class function
const processTextForSending = (textProcessor, encryption) => (text) =>
  encryption(textProcessor(text));

// Using the function
const prepareText = processTextForSending(sanitizeText, encryptText);
const sanitizedAndEncrypted = prepareText(' Hello World '); // Should output encrypted, sanitized text
```

### Immutability

Immutability ensures you do not alter the original array of messages but create a new one when a new message arrives.

```javascript
// Original messages
const messages = [
  { id: 1, text: 'Hello', isRead: true },
  { id: 2, text: 'Hi', isRead: false },
];

// New message arrives
const newMessage = { id: 3, text: 'Hey', isRead: false };

// Adding the new message immutably
const newMessages = [...messages, newMessage];
```

### Pure Functions

Using a pure function to filter unread messages and count them.

```javascript
// Pure function to filter unread messages and count them
const countUnreadMessages = (msgs) => msgs.filter((msg) => !msg.isRead).length;

// Using the function
const unreadCount = countUnreadMessages(newMessages); // Should return the count of unread messages
```

### Higher-Order Functions

Use `map` to mark all unread messages as read.

```javascript
// Higher-order function to mark messages as read
const markMessagesAsRead = (msgs) =>
  msgs.map((msg) => ({ ...msg, isRead: true }));

// Using the function
const allReadMessages = markMessagesAsRead(newMessages);
```

### Function Composition

Compose a function to prepare a message for display: decrypt and then sanitize.

```javascript
// Function to decrypt text
const decryptText = (text) => atob(text); // Using Base64 as a simple decryption example

// Compose sanitize and decrypt functions
const prepareTextForDisplay = (textDecryptor, textSanitizer) => (text) =>
  textSanitizer(textDecryptor(text));

// Using the function
const prepareTextDisplay = prepareTextForDisplay(decryptText, sanitizeText);
const sanitizedAndDecrypted = prepareTextDisplay(encryptedText); // Should output sanitized, decrypted text
```

### Closures

Utilize closures to maintain the state of a chat room or conversation.

```javascript
// Using closures to encapsulate chat room state
const createChatRoom = (roomId) => {
  let participants = [];
  return {
    addParticipant: (userId) => {
      participants = [...participants, userId];
    },
    getParticipants: () => participants,
  };
};
```

### Currying

Create a curried function to send a message to a specific chat room.

```javascript
// Curried function to send a message
const sendMessageToRoom = (roomId) => (message) => {
  // Send `message` to `roomId` using API or WebSocket
};

const sendMessageToRoom1 = sendMessageToRoom(1);
sendMessageToRoom1('Hello everyone!');
```

### Lazy Evaluation

Lazy evaluation is a concept where you delay the computation until the value is actually needed. This is useful when handling large data sets or streams of data. In a text messaging app, you may use lazy evaluation to load only the messages that need to be displayed on the screen at a given time.

```javascript
// Generator function for lazy loading messages
function* lazyLoadMessages(allMessages) {
  let index = 0;
  while (index < allMessages.length) {
    yield allMessages[index];
    index++;
  }
}

const allMessages = /* fetch from the database or API */ [];
const messageGenerator = lazyLoadMessages(allMessages);

// Load a message only when needed
const nextMessage = messageGenerator.next().value; // Fetch the next unread message
```

### Referential Transparency

Referential transparency implies that a function call can be replaced with its output value without changing the program's behavior. This is very useful for debugging and reasoning about code.

For example, consider the function to count unread messages. If you know that `countUnreadMessages([message1, message2])` returns `1`, you can substitute `countUnreadMessages([message1, message2])` anywhere in your code with `1` without any side effects.

```javascript
// Function to count unread messages is referentially transparent
const countUnreadMessages = (messages) =>
  messages.filter((message) => !message.isRead).length;

// This will always be true
countUnreadMessages([message1, message2]) === 1;
```

### Recursion

Recursion is especially useful when dealing with nested or hierarchical data structures. For instance, in threaded conversations where messages can have replies, which in turn can have more replies, and so on.

Here, a recursive function is used to flatten a nested thread into a single array of messages.

```javascript
// Recursive function to flatten message threads
function flattenThreads(threads) {
  let flattened = [];
  for (const thread of threads) {
    if (Array.isArray(thread.replies)) {
      // Recurse into the nested replies
      flattened = [...flattened, thread, ...flattenThreads(thread.replies)];
    } else {
      flattened.push(thread);
    }
  }
  return flattened;
}

const nestedThreads = [
  { text: 'Hi', replies: [{ text: 'Hello', replies: [{ text: 'Hey' }] }] },
  { text: 'How are you?' },
];

// Flatten the nested threads
const flatThreads = flattenThreads(nestedThreads);
```
