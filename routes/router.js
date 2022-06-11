const Router = require('koa-router')
const router = new Router()
const UserController = require('../controllers/userController')

router.prefix('/app')
router.get('/', async ctx => {
    ctx.body = { msg: 'Hello Koa!' }
})
router.get('/home', async ctx => {
    ctx.body = 'this is home page'
})

router.post('/createUser', UserController.create)

module.exports = router