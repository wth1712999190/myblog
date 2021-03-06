const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const views = require('koa-views')
const router = require('./routers/router')
const logger = require('koa-logger')
const { join } = require('path')
// 生成Koa实例
const app = new Koa
// 注册日志模块
app.use(logger())
// 静态资源目录
app.use(static(join(__dirname, "public")))
// 配置视图模板
app.use(views(join(__dirname, "views"), {
    extension: "pug"
}))


// 注册路由信息
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log("项目启动成功，监听在3000端口");
    
})