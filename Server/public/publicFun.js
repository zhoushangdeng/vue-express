
const db = require('./redis')
const publicFunc = {

    async tokenMatching(req, res, callback) {

        const token = req.headers.authorization;
        const userID = req.headers.id;

        if (token === await db.getToken(userID)) {

            callback({
                token: token,
                userID: userID
            });

        } else {

            res.json({
                'success': false,
                'code': 1,
                'msg': '登录超时，请重新登录！'
            });
            res.end();
            return;

        }

    }

}

module.exports = publicFunc;