'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var News = AV.Object.extend('News');


router.post('/', function(req, res, next) {

  var newsa = new News();
  newsa.set('title', req.body.title);
  newsa.set('summary', req.body.summary);
  newsa.set('eauthor', req.body.eauthor);
  newsa.set('tips', req.body.tips);
  newsa.set('tag', req.body.tag);
  newsa.set('lgPic', req.body.lgPic);
  newsa.set('smPic', req.body.smPic);
  newsa.set('textBody', req.body.textBody);

  newsa.save().then(function(suc) {
    res.send({'code':200 , 'msg':'SUCCES'});
  },function(err){

  	res.send({'code':501 , 'msg':'FAIL'});
  }).catch(next);
});


// 查询 News 列表
router.get('/',(req, res, next)=>{
  var query = new AV.Query(News);
  query.descending('createdAt');
  query.find().then(function(results) {
    res.send({'stat':200,'results':results});
  }, function(err) {
    if (err.code === 101) {
      // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 News 数据表还未创建，所以返回空的 News 列表。
      res.send({'stat':-1,'desc':'数据未创建'});
    } else {
      next(err);
    }
  }).catch(next);
});



module.exports = router;






