const Router = require('koa-router')
const router = new Router

// 设计主页 
router.get("/", async(ctx) => {
    await ctx.render("index", {
        title: "德玛西亚"
    })
})

// 用来处理用户登录 注册 推出
router.get(/^\/user\/(?=reg|login)/, async (ctx) => {
    // ctx.body = ctx.params.id 动态路由 ("/user/:id")
    // show 为true 显示注册 false 登陆 匹配成功 包含reg
    const show = /reg$/.test(ctx.path)
    await ctx.render("register", {show})

})






module.exports = router