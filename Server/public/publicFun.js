
const db = require('./redis')
const publicFunc = {
    async tokenMatching(req, res, next) {
        const token = req.headers.authorization || '';
        const userID = req.headers.id || 0;

        if (token === await db.getToken(userID)) {
            const data = { token: token, userID: userID }
            next()
            return data;
        } else {
            res.json({ 'success': false, 'code': 1, 'msg': '登录超时，请重新登录！' });
            res.end();
            return;
        }
    }
}

module.exports = publicFunc;
