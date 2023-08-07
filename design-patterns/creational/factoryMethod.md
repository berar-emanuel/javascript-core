### Summary

Factory method is a creational design pattern that provides an interface for creating objects but allow subclasses to decide which subclass to instantiate.

#### Business case

Messaging application that supports sending different types of messages, such as text messages and image messages.

#### Walkthrough

1. We define the base `Message` class and its two subclasses `TextMessage` and `ImageMessage`. Each subclass has a `send()` method that provides specific behavior for sending text and image messages.
2. The `MessageFactory` class contains the `createMessage(type, content)` method which takes a `type` parameter representing the type of message to be created and a `content` parameter containing the actual message content. It uses a switch statement to determine which message object to instantiate based on the input.
3. The `sendMessage(messageType, content)` function demonstrates the usage of Factory Method in our text messaging application. It creates an instance of the `MessageFactory` and uses it to create and send the appropriate message based on the `messageType` and `content` parameters. If an invalid message type is provided, an error is caught and handled gracefully.

By applying the Factory method, our text messaging application's message sending is decoupled from the client code. This design allows us to easily extend the application to support additional message types without modifying existing client code, promoting code reusability and maintainability.
