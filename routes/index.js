
/*
 * GET home page.
 */
var _ = require("underscore");

exports.index = function(req, res){
  res.sendfile("public/index.html");
};

exports.templatize = function(req, res){
  var data = JSON.parse(req.body.json);
  var template = req.body.template;
  var result = _.template(template, data);
  res.send(result);
};
