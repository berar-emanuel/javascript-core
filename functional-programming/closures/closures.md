### Summary

Closures in JavaScript are functions that "remember" their lexical scope even after they have finished executing. They are particularly useful for creating private variables and maintaining state across function calls.

### Business case

Suppose you're building a messaging application, and you want to implement a feature that counts the number of messages sent by each user. You'd like to achieve this using closures to encapsulate and manage the message counts for each user.

```javascript
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
```

### Walkthrough

1. We define the `createUserMessageCounter` function, which creates user-specific message counters using closures. Inside this function, we declare a `messageCount` object to store message counts privately.

2. We return an object with two methods: `sendMessage` to increment message counts for a user and display the count and `getMessageCount` to retrieve the count for a user.

3. We create two message counters, one for Alice and one for Bob, using the `createUserMessageCounter` function. Each closure maintains its own `messageCount` object, ensuring that message counts are separate and private.

4. We simulate sending messages using the `sendMessage` method for Alice and Bob, which increments their respective message counts.

5. We retrieve and display the message counts for Alice and Bob using the `getMessageCount` method.

Closures are instrumental in encapsulating and managing private state (in this case, the `messageCount` object) within functions. They allow you to create self-contained modules with their own private variables and behavior, making them a powerful tool for maintaining state in complex applications like a messaging system.
