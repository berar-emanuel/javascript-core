// 1. Define the base class for the message filter
class MessageFilter {
  constructor() {
    this.successor = null;
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  processMessage(message) {
    if (this.successor) {
      return this.successor.processMessage(message);
    }
    return message;
  }
}

// 2. Create concrete filter classes that extend the base filter class
class ProfanityFilter extends MessageFilter {
  processMessage(message) {
    // Simulate checking for profanity in the message
    if (message.includes('badword')) {
      console.log('Profanity found. Message rejected.');
      return null; // Message rejected
    }

    console.log('Profanity filter passed.');
    return super.processMessage(message);
  }
}

class EmojiFilter extends MessageFilter {
  processMessage(message) {
    // Simulate replacing emojis with text
    const processedMessage = message.replace(':)', 'smiley');
    console.log('Emoji filter applied.');
    return super.processMessage(processedMessage);
  }
}

class SpamFilter extends MessageFilter {
  processMessage(message) {
    // Simulate checking for spam content
    if (message.includes('offer')) {
      console.log('Spam content found. Message rejected.');
      return null; // Message rejected
    }

    console.log('Spam filter passed.');
    return super.processMessage(message);
  }
}

// 3. Create an instance of the filters and chain them together
const profanityFilter = new ProfanityFilter();
const emojiFilter = new EmojiFilter();
const spamFilter = new SpamFilter();

profanityFilter.setSuccessor(emojiFilter);
emojiFilter.setSuccessor(spamFilter);

// 4. Simulate sending a message through the filter chain
const message = 'Hey, check out this amazing offer!';
const filteredMessage = profanityFilter.processMessage(message);

if (filteredMessage) {
  console.log('Message sent:', filteredMessage);
} else {
  console.log('Message rejected.');
}
