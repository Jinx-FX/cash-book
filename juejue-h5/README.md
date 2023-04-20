# juejue-h5

移动端记账本设计

涉及技术：
- react hooks
- react-router-dom
- zarm 移动端 UI 框架(对 react18 适配不好)
- 移动端适配
  - lib-flexible
  - rem

实现功能：
- 用户登录或注册
- 账单分类列表展示
- 账单数据可视化
- 个人中心
- 都可进行实时编辑修改

接口：http://api.chennick.wang 或见 [后端代码实现](https://github.com/Jinx-FX/juejue-server)

## 项目深挖

### 登录和注册用户

### forwardRef 的使用 ** -> 原理

forwardRef 用于拿到父组件传入的 ref 属性，这样在父组件便能通过 ref 控制子组件。

用于各种弹窗操控

- 时间筛选
- 类型筛选
- 新增编辑

### 移动端适配 rem

- `lib-flexible`
- `postcss-pxtorem` : 它的作用是在你编写完 css 后，将你的单位自动转化为 rem 单位。

### 下拉刷新、上滑无限加载 ** -> 实现

封装 Pull 组件

### 数据可视化

- 饼图
- 进度条比较

### 其他优化

- 按需引入

`vite-plugin-style-import`: 减小 css 静态资源的打包体积

- 代理配置


## Reference

- https://juejin.cn/book/6966551262766563328?enter_from=course_center
- https://github.com/Nick930826/juejue-vite-h5