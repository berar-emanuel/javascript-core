### Summary

The Chain of Responsibility pattern is a behavioral design pattern where multiple handlers are chained together to process a request. Each handler decides whether to process the request or pass it along the chain to the next handler. Let's consider a text messaging application where messages need to go through a series of filters before being sent to the recipient. Each filter checks the message for certain criteria, and if the criteria are met, the message is modified or rejected.

#### Business case

Messaging application that implements a series of message filters to process messages before sending them.

#### Walkthrough

1. The `MessageFilter` class is the base class for all filters. It has a `successor` property to hold the next filter in the chain. The `setSuccessor` method allows setting the next filter in line. The `processMessage` method either processes the message using the current filter and its successor or directly passes it to the next filter if no successor is set.

2. Concrete filter classes like `ProfanityFilter`, `EmojiFilter`, and `SpamFilter` extend the `MessageFilter` class. They override the `processMessage` method to implement their specific filtering logic. If a filter rejects a message, it returns `null`. If the message passes the filter, it calls the same method on its successor in the chain.

3. Instances of the filter classes are created and chained together using the setSuccessor method. The order of chaining determines the order in which filters are applied.

4. A sample message is passed through the filter chain using the `profanityFilter.processMessage` call. If the message is accepted through all filters, it's eventually sent; otherwise, it's rejected.

In this example, the Chain of Responsibility pattern allows you to create a flexible and extensible way to process messages through multiple filters. Each filter class focuses on a specific aspect of message filtering, and the chain is constructed dynamically, enabling easy addition or removal of filters without affecting the application's core logic.
