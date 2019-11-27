var index = function(req, res) {
  res.render('index', { title: 'Welcome to my movie store' });
};

module.exports = {
    index
}