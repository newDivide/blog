module.exports = function(app) {
 app.get('/', function (req, res) {
    res.render('index');
  });
  app.get('/article', function (req, res) {
    res.render('article');
  });
  app.get('/timeline', function (req, res) {
    res.render('timeline');
  });
  app.get('/messageBoard', function (req, res) {
    res.render('messageBoard');
  });
  app.get('/tag', function (req, res) {
    res.render('tag');
  });
};