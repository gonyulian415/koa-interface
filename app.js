const Koa = require('koa')
const Cors = require('@koa/cors')
const KoaBody = require('koa-body')
const KoaJson = require('koa-json')
const router = require('./routes/router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(KoaBody())
// app.use(bodyParser())
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