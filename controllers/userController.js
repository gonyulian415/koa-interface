const UserModel = require('../modules/user')

class userController {
    static async create(ctx) {
        const req = ctx.request.body
        console.log(req, typeof(req));
        if (req.username && req.pwd && req.role) {
            try {
                console.log('user controller');
                const res = await UserModel.createUser(req)
                console.log('usermodel create res:', res);
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