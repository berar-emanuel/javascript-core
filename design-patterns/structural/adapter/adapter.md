### Summary

The Adapter pattern is a structural design pattern that allows incompatible interfaces to work together.

#### Business case

Text messaging application focusing on adapting external message sources into the application.

#### Walkthrough

1. We have an external messaging library (`ExternalMessagingLibrary`) that we want to adapt to our application's `Message` interface. This external library has methods for sending text and image messages.

2. The `Message` class represents the unified interface that our application uses for sending messages.

3. We create two adapters: `TextMessageAdapter` and `ImageMessageAdapter`. These adapters inherit from the `Message` class and implement the `send()` method to adapt the external library's methods for sending text and image messages.

4. Each adapter takes an instance of the `ExternalMessagingLibrary` and the specific content (text or image) as constructor parameters.

5. In the `send()` method of each adapter, we call the corresponding method from the external library (`sendExternalTextMessage` for text messages and `sendExternalImageMessage` for image messages).

6. In the usage example, we create instances of the adapters and pass them to the external messaging library. When we call the `send()` method on each adapter, it uses the external library to send the adapted message content.

This implementation of the Adapter pattern allows us to seamlessly integrate an external messaging library into our application by adapting its methods to our standard message-sending interface. This way, we can use the external library's functionality while maintaining a consistent messaging interface within our application.
