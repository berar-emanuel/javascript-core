// Define a message formatting function
function formatMessage(sender) {
  return function (messageType) {
    return function (content) {
      return `${sender} sent a ${messageType} message: ${content}`;
    };
  };
}

// Create a partial function for a specific user
const aliceMessage = formatMessage('Alice');

// Create a partial function for a text message
const textMessage = aliceMessage('text');

// Create a partial function for an image message
const imageMessage = aliceMessage('image');

// Create a partial function for a video message
const videoMessage = aliceMessage('video');

// Use the partial functions to format messages
console.log(textMessage('Hello, Bob!')); // Output: "Alice sent a text message: Hello, Bob!"
console.log(imageMessage('image123.jpg')); // Output: "Alice sent an image message: image123.jpg"
console.log(videoMessage('video456.mp4')); // Output: "Alice sent a video message: video456.mp4"
