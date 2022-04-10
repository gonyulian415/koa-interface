const Koa  = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
    ctx.body = {msg: 'Hello Koa!'}
})

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('port:', port);
})