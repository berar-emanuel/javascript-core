// Function to create a user-specific message counter
function createUserMessageCounter() {
  const messageCount = {}; // A private object to store message counts

  // Return an object with methods for updating and retrieving message counts
  return {
    sendMessage: function (user) {
      // Check if the user exists in the messageCount object; if not, initialize their count to 1
      if (!messageCount[user]) {
        messageCount[user] = 1;
      } else {
        // If the user already exists, increment their message count
        messageCount[user]++;
      }
      console.log(`${user} has sent ${messageCount[user]} messages.`);
    },
    getMessageCount: function (user) {
      // Return the message count for a specific user
      return messageCount[user] || 0;
    },
  };
}

// Create user-specific message counters
const aliceMessageCounter = createUserMessageCounter();
const bobMessageCounter = createUserMessageCounter();

// Simulate sending messages
aliceMessageCounter.sendMessage('Alice'); // Output: Alice has sent 1 messages.
aliceMessageCounter.sendMessage('Bob'); // Output: Bob has sent 1 messages.
aliceMessageCounter.sendMessage('Alice'); // Output: Alice has sent 2 messages.

bobMessageCounter.sendMessage('Bob'); // Output: Bob has sent 2 messages.

// Retrieve message counts
console.log(
  `Alice's message count: ${aliceMessageCounter.getMessageCount('Alice')}`
); // Output: Alice's message count: 2
console.log(`Bob's message count: ${bobMessageCounter.getMessageCount('Bob')}`); // Output: Bob's message count: 2
