const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://hb-test.stage.sirenltd.dev",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
