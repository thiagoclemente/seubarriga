module.exports = (app) => {
  app.route('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);

  app.route('/accounts')
    // .get(app.routes.users.findAll)
    .post(app.routes.accounts.create);
};