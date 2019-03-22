// Initializes the `tree-view` service on path `/tree-view`
const createService = require("./tree-view.class.js");
const hooks = require("./tree-view.hooks");

module.exports = function(app) {
  const paginate = app.get("paginate");

  const options = {
    paginate
  }

  const conv = app.service("conversation");
  const tgs = app.service("tags");

  const ts = createService(options);
  ts.setConversation(conv);
  ts.setTags(tgs);

  // Initialize our service with any options it requires
  app.use("/tree-view", ts);

  // Get our initialized service so that we can register hooks
  const service = app.service("tree-view");

  service.hooks(hooks)
}
