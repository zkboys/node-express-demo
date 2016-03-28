/*
 * 路由映射文件,配置越靠前，优先级越高
 * */
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index.html');
});
router.get('/test-ajax',function(req, res, next){
  console.log(req.query.name);
  console.log(req.query.age);

  res.send([
    {'name':'王小水', age: 12},
    {'name':'李小水', age: 12}
  ]);
});

module.exports = router;
