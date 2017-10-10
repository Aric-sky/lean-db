'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var News = AV.Object.extend('News');
var fs = require('fs');


router.post('/', async function(req, res, next) {
  console.log(req.body);
  var newsa = new News();
  newsa.set('title', req.body.title);
  newsa.set('summary', req.body.summary);
  newsa.set('eauthor', req.body.eauthor);
  newsa.set('tips', req.body.tips);
  newsa.set('tag', req.body.tag);
  var bodyContent = await addFile(req.body.textBody);

  newsa.set('textBody', bodyContent);

  newsa.save().then(function(suc) {
    console.log(bodyContent);
    res.send({'code':200 , 'msg':'SUCCES'});
  },function(err){

  	res.send({'code':501 , 'msg':'FAIL'});
  }).catch(next);
});


router.get('/',(req, res, next)=>{
  res.render('newsup');
});


function addFile(data){
	var dataNew = data || 'mock';
  //生成新的静态页
  var d=new Date();
  d=d.getTime();
  var pathStr='./public/news/'+d+'.txt';//通常是根据某种算法算出来的不重复的文件名
  fs.writeFile(pathStr,dataNew.toString(),(err)=>{
      if(err){
          console.log('文件写入失败'+err);
      }else{
          console.log('文件写入成功');
      }
  });
  return pathStr.slice(1);
}


module.exports = router;






