### Summary

The Mediator pattern is a behavioral design pattern where an object (mediator) centralizes communication between multiple objects (colleagues) that need to interact with each other. This pattern promotes loose coupling between objects by preventing them from directly referring to each other.

#### Business case

Chat application that facilitates communication between users.

#### Walkthrough

1. The `Chatroom` class acts as the mediator. It holds a list of registered users and provides a method to send messages between users.

2. The `User` class represents the colleagues that interact with each other through the mediator. Each user has a reference to the chatroom they belong to and can send and receive messages.

3. Users send messages using the `send` method, which in turn calls the `sendMessage` method of the chatroom.

4. The `receiveMessage` method in the `User` class is called when a user receives a message from another user.

5. The `registerUser` method in the `Chatroom` class adds a user to the list of registered users and sets the chatroom reference for the user.

6. Users communicate with each other through the `Chatroom` mediator, allowing for centralized control over the communication process.

This example demonstrates the Mediator pattern by showing how users interact in a chat application without needing direct references to each other. The Mediator, in this case, the `Chatroom`, facilitates communication between users, promoting loose coupling and making it easier to manage interactions.
