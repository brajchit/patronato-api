module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "consistent-return": [
      "warn", // to controllers.update|create
    ],
    "no-console": ["error", {
      allow: ["warn", "error", "log"]
    }],
    "no-param-reassign": ["error", {
      "props": false
    }],
    "no-underscore-dangle": ["error", {
      "allow": ["_id"] // to mongodb _id
    }]
  }
};
