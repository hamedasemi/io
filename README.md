
# Infinite way console logging

Infinite way logging from browsers to server and vice verse.

get logs from clients to the server and log from server to each individual or to all clients.

Debug should be customizable from either url parameters and from the environment variables:

  - Enable and disable debug
  - Set the debug depth to debug the method or the whole app or part of the app
  - Set log level, info or error or ...
  - Set log type, if is remote or local or broadcast or ...

```js
debug = false;
debug = true;
debug = {
    depth: 'components',
    type: 'broadcast',
    level: 'info'
};
```

Log toggle

  - Emit client to send logs remotely from socket io server itself
  - In local console enable debug by sending a poke to socket io server
  - In a new browser window
  - Log to a popup ovarlay.
  
  
  
  