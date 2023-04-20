# juejue-server

`Egg.js` 初步尝试后端实现

- `Mysql` 数据存储及表单设计
- `egg-jwt` 用户鉴权
- `egg-cors` 跨域实现
- 配合 [前端实现](https://github.com/Jinx-FX/juejue-h5)


## 项目深挖

### egg-jwt 实现用户鉴权

> 用户鉴权，一种用于在通信网络中对试图访问来自服务提供商的服务的用户进行鉴权的方法。
> 用于用户登陆到DSMP或使用数据业务时，业务网关或Portal发送此消息到DSMP，对该用户使用数据业务的合法性和有效性（状态是否为激活）进行检查。

鉴权的机制，分为四种：

- HTTP Basic Authentication
- session-cookie
- Token 令牌
- OAuth(开放授权)

本项目采用的鉴权模式是 token 令牌模式，出于多端考虑，
token 可以运用在如网页、客户端、小程序、浏览器插件等等领域。
如果选用 cookie 的形式鉴权，在客户端和小程序就无法使用这套接口，因为它们没有域的概念，
而 cookie 是需要存在某个域下。

`jwt.verify` 登录验证中间件


### 一套增删改查

### 文件数据上传（图片：用户头像）

`egg-cors` 添加白名单

目前市面上更多的方式，是购买 OSS 服务，将图片等静态资源上传至 CDN，通过内容分发的形式，让使用的用户就近获取在线资源。
这属于网站性能优化的一种方式，减少主域名下的资源请求数量，以此来降低网页加载的延迟。




## Reference

- https://juejin.cn/book/6966551262766563328?enter_from=course_center
- https://github.com/Nick930826/jue-diary-server

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org