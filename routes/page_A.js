var SATJSON = require('../SATlist.json');
exports.view = function(req, res){
  res.render('page_A',SATJSON);
};
