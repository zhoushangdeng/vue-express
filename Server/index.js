
const express = require('express');
const app = express();
const session = require("express-session");
//配置中间件，是每个请求带上BodyParser，req会增加body参数，获取post请求传过来的数据，
const bodyParser = require('body-parser');
const loginApi = require('./api/login');
const userApi = require('./api/user');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const publicFunc = require('./public/publicFun')
const tokenMatching = publicFunc.tokenMatching


//配置请求头, 跨域， 用了proxy代理服务就不需要该请求头
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.originalUrl != '/api/login/userLogin') {
        tokenMatching(req, res, next);
        return
    }
    next();
};
app.use(allowCrossDomain);
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    cookie: { maxAge: 90000 },
    saveUninitialized: true
}))
app.use('/api/login', loginApi);
app.use('/api/user', userApi);

app.listen(3001);
console.log('success listen at port:http://localhost:3001');