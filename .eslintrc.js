module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-console": ["error", {
      allow: ["warn", "error", "log"]
    }],
    "no-param-reassign": ["error", {
      "props": false
    }]
  }
};
