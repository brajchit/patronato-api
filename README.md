## Aquasolutions API RESTful
# initial setups
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

- add mongoose-gen REST CRUD company example
- add controller into routes as middleware
- update controller and model es6


# next possible bugs
- when a category.code is updated, then subcategories codes should be updateds
-

# next possible issues
- when DB can't connect but req, res is on listening
-


# questions
- a product could be store without units or packagin?
  - resp: store with packaging
- where set max and min stock?
- is possible move a farm from a companyA to companyB
