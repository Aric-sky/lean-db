'use strict';
var router = require('express').Router();
var multiparty = require('multiparty');
var AV = require('leanengine');



var fs = require('fs');
router.post('/', function(req, res, next){
  var form = new multiparty.Form();
  form.parse(req, function(err, fields, files) {
    var iconFile = files.myFile[0];
    if(iconFile.size !== 0){
      fs.readFile(iconFile.path, function(err, data){
        if(err) {
          return res.send('读取文件失败');
        }
        var theFile = new AV.File(iconFile.originalFilename, data);
        theFile.save().then(function(result){
          
        res.send('上传成功！<br/>文件名：'+result.attributes.name+'<br/>文件地址：'+result.attributes.url);
        }).catch(console.error);
      });
    } else {
      res.send('请选择一个文件，内容必须大于0 kb。');
    }
  });
});


router.get('/',(req, res, next)=>{
	res.render('uploadimg');
});



module.exports = router;






