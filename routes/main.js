module.exports = function (app) {
  app.get('/', function *() {
    this.body = yield this.render('index', {
      title: 'Page Title'
    });
  });
}