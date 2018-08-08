
## 数据接口
### 接口文档说明
```

域名: http://aric.leanapp.cn
端口: 80
说明：测试类接口，有请求次数限制。

```

### 1、二维码生成接口

#### 请求URL:  
```
http://aric.leanapp.cn/qrimg/create_qrcode?url=www.google.com
```

#### 示例：
 [http://aric.leanapp.cn/qrimg/create_qrcode?url=www.google.com](http://aric.leanapp.cn/qrimg/create_qrcode?url=www.google.com)

#### 请求方式: 
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|url  |Y  |string  | url='xxx' |
#### 返回示例：

![qrcode](http://p8dyokgbm.bkt.clouddn.com/qrcode.png)


