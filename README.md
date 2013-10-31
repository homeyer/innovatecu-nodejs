## Node.js Workshop - Innovate CU, Nov 4th

slides: https://docs.google.com/presentation/d/1bcQZYTbS0CoRkeOdnH9frxBwg5UOZY3TcizXRzYxbQU/edit?usp=sharing

### Example 1: client side JS vs server side JS

open `index.html` in your browser. In the console you'll see `hi`.

on the command line, run `node index.js`. You'll see `hi`.

Same code, different environments.

### Example 2: client side JS vs server side JS, part 2

open `index.html`. Click the link, you'll see `hi` in the console.

The function called on the click is triggered by the browser's event loop. Node's event loop works the same way - an action causes the event loop to trigger any registered callbacks.

### Example 3: client side JS vs server side JS, part 3

`node index.js`.

Open [http://localhost:1337](http://localhost:1337) in your browser.

This is how the node.js event loop works:

1. Your browser made a connection to the server
2. the OS notified the event loop that a connection was made
3. the function registered as the callback was called
4. you sent hello world to the browser
5. node is passive, waiting for the next event to trigger

### Example 4: async vs sync

the-not-so-good-way.js: shows how synchronous programming isn't the node way. ties up the event loop, you shouldn't do blocking actions when possible.

the-node-way.js: let I/O operations happen asynchronously.

### Example 5: using npm for dependencies (or, how to download cats)

npm is node's package manager.

the package.json file represents what dependencies your node app has.

to create package.json, run `npm init`, follow the prompts.

install dependencies by running `npm install <name> --save`. The `--save` modifier adds it to package.json. Use `--save-dev` if it's only for dev environments (like test dependencies).
