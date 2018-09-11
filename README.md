## Aquasolutions API RESTful
- express-generator base
- add nodemon and add script in package.json
- add `eslint --init` with general installed (Airbnb standard)
- add some rules in .eslintrc
- update app.js to es6 (not remove `next` in `//herror handler`)
- uddate www to es6
- add debug script to package.json

- install mongoose,chalk and dotenv-safe(similar to dotenv but ensure variables)
- add `.env` and `.env.example` files
- add config.js that load from `.env` variables
- connect mongoose in app.js from `.env` config

- add a path '/err' to test //error handler with custon error
- update `//error handler` to respond json instead of view, (API RESTful)
