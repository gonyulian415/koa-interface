const Koa = require('koa')
const Router = require('koa-router')
const Cors = require('@koa/cors')
const KoaBody = require('koa-body')
const KoaJson = require('koa-json')

const app = new Koa()
const router = new Router()

router.prefix('/app')
router.get('/', async ctx => {
    ctx.body = { msg: 'Hello Koa!' }
})

router.get('/home', async ctx => {
    ctx.body = 'this is home page'
})

app.use(KoaBody())
app.use(Cors())
app.use(KoaJson({
    pretty: false,
    param: 'pretty'
}))
app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5001

app.listen(port, () => {
    console.log('port:', port);
})