const Koa  = require('koa')
const Router = require('koa-router')
const mongoose = require('mongoose')

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
    ctx.body = {msg: 'Hello Koa!'}
})

mongoose.connect("mongodb://admin:123456@localhost:27017")
        .then(() => {
            console.log('Connected...');
        })
        .catch(err => {
            console.log(err);
        })

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('port:', port);
})