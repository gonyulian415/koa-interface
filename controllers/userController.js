const UserModel = require('../modules/user')

class userController {
    static async create(ctx) {
        const req = ctx.request.body

        if (req.username && req.pwd && req.role) {
            try {
                const findResult = await UserModel.findUser({
                    where: {
                        username: req.username
                    }
                })
                if (findResult?.length > 0) {
                    ctx.response.status = 400
                    ctx.body = {
                        code: 400,
                        msg: 'username is already existed!'
                    }
                    return
                }
                const createResult = await UserModel.createUser(req)
                ctx.response.status = 200
                ctx.body = {
                    code: 200,
                    msg: 'create success'
                }
            } catch (error) {
                console.log(error);
                ctx.response.status = 412
                ctx.body = {
                    code: 412,
                    msg: 'create failed',
                    error
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: 'miss param'
            }
        }
    }
}

module.exports = userController