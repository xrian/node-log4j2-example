var express = require('express');
var router = express.Router();
var logger = require('log4js').getLogger("index");

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.info('用户进入主页!测试日志等级info');
  res.render('index', { title: 'Express' });
  logger.error('返回数据成功,测试日志等级error');
});

module.exports = router;
