
const query = require('../public/mysqlPool')
const express = require('express');
const app = express.Router();
const session = require("express-session");
const bodyParser = require('body-parser');
const aes = require('../public/aes')
const db = require('../public/redis')
const publicFunc = require('../public/publicFun')
const tokenMatching = publicFunc.tokenMatching
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
    secret: 'keyboard cat',
    //强制保存 session 即使它并没有变化,。默认为 true
    resave: true,
    //过期时间
    cookie: { maxAge: 90000 }, //单位为妙
    //强制将未初始化的 session 存储。  默认值是true  建议设置成true
    saveUninitialized: true
}))

/* 登录 */
app.post('/userLogin', (req, res) => {

    try {
        let body = req.body;
        let sql = `select * from user where email='${body.email}' and password = '${aes.encryption(body.password)}'`;
        query(sql, (error, vals) => {
            let obj = {};
            if (vals.length > 0) {
                var timestamp = Date.parse(new Date());
                let token = vals[0].id + vals[0].password + timestamp
                let userID = vals[0].id;
                obj = {
                    code: 200,
                    data: {
                        id: userID,
                        token: token
                    },
                    msg: 'success'
                }
                /* token写进redis */
                db.setToken(userID, token);

            } else {
                obj = {
                    code: 401,
                    data: '用户名或密码无效!',
                    msg: error
                }

            }
            res.json(obj);
            res.end();
            return;
        })
    } catch (error) {
        res.json({
            code: 500,
            data: '服务器出错了!',
            msg: error
        });
        res.end();
        return;
    }

})

/* 首页菜单 */
app.get('/getNavList', (req, res) => {
    console.log('req.query', req);
    /*  tokenMatching(req, res, (data) => {
 
     }) */
})




module.exports = app;