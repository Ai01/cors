# CORS跨域

## CORS简介
CORS是一个W3C标准，全称是**“跨域资源共享”**(Cross-origin resource sharing)。
CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，ie浏览器不能低于ie10。
整个CORS通信过程，都是浏览器自动完成，不需要用户参与。**对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样**。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。
因此，**实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信**。

## 两种请求
浏览器将CORS请求分成两类：简单请求和非简单请求。

### 简单请求
只要同时满足以下两大条件，就属于简单请求。对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段。
```
    (1) 请求方式是以下三种方法之一
        1. post
        2. get
        3. head
    (2) http的头信息不超出以下几种字段
        1. Accept
        2. Accept-Language
        3. Content-Language
        4. Last-Event-ID
        5. Content-Type:只限于三个值:application/x-www-form-urlencoded、multipart/form-data、text/plain
```
### 非简单请求
不是简单请求就是非简单请求。非简单请求会在正式请求前，增加一次HTTP查询请求，称为**‘预检’请求**

## 服务端必须的设置
1. **Access-Control-Allow-Origin**:该字段是必须的。它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。
2. **Access-Control-Allow-Method**:对非简单请求，该字段是必须的。它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不是浏览器请求的那个方法。而是为了避免多次‘预检’请求。
3. **Access-Control-Allow-Headers**:如果浏览器请求包括Access-Control-Request-Headers字段，则该字段是必须的。值是一个逗号分隔的字符串。
4. **Access-Control-Max-Age**:设置预请求有效期。以秒为单位的数字。
5. **Access-Control-Expose-Headers**:XMLHttpRequest对象的getRequestHeader()方法只可以拿到6个基本子段。如果想拿到其他子段就必须定义该字段。
3. **Access-Control-Allow-Crendentials**:CORS默认不发送cookie和http认证信息。如果要把cookie发动服务器，该子段必须设为true。同时Ajax中必须打开withCredentials。
```javascript
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
```
**如果要发送cookie，Access-Control-Allow-Origin就不能设为星号**


## 参考
[阮一峰cors](http://www.ruanyifeng.com/blog/2016/04/cors.html)

## 自我实现例子代码地址
[柏海辉的cors实例](https://github.com/Ai01/cors) 







