# My 1235098th time attempting this weather app

This will hopefully grow to be an app for people to quickly find out if they need to wear more or less clothes than yesterday... :grimacing:

Initially tried using ClojureScript & Clojure, but struggled with new languages and new concepts at the same time, so decided to start again with JS instead.

The app uses the [Dark Sky API](https://darksky.net/dev) so if you'd like to try it out, you'll need to grab a free API key from there!

## How to use
So to find out how today's weather will compare to yesterday's, you basically just need to:
#### Use your API key
In the server directory, create a `.env` file, inside that you just need to put "`DARKSKY_API_KEY=API_KEY_GOES_HERE`"

#### Start the client
In the client directory:
```
npm install
npm start
```

#### Start the server
In the server directory:
```
npm install
npm start
```

Navigate to `http://localhost:3000/` and there you'll be told about today's fate! :crystal_ball: 
## License

Copyright © 2020 Ninamma Rai

Distributed under the Eclipse Public License version 1.0.
