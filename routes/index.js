router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});