'use strict';
var router = require('express').Router();
var AV = require('leanengine');
var News = AV.Object.extend('News');


router.post('/', function(req, res, next) {
  console.log(req.body);
  var newsa = new News();
  newsa.set('title', req.body.title);
  newsa.set('summary', req.body.summary);
  newsa.set('eauthor', req.body.eauthor);
  newsa.set('tips', req.body.tips);
  newsa.set('tag', req.body.tag);
  newsa.set('textBody', req.body.textBody);

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



module.exports = router;






