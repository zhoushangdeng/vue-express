
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

/* 首页菜单 */
app.get('/getNavList', (req, res) => {
    tokenMatching(req, res, (data) => {

        console.log('req.query', req.query);


        const menusArr = [
            /* 模拟后端返回路由表 */

            {
                path: '/test',
                name: 'test',
                meta: {
                    title: '测试',
                    keepAlive: true,
                },
                indexNum: '4',
                component: "../views/testTree/index.vue",
                children: [
                    {
                        path: '/test/test1',
                        name: 'test1',
                        meta: {
                            title: '测试1',
                            keepAlive: true,
                        },
                        component: '../views/testTree/test1/index.vue',
                        children: [

                        ],
                        indexNum: '4'
                    },
                    {
                        path: '/test/test2',
                        name: 'test2',
                        meta: {
                            title: '测试2',
                            keepAlive: true
                        },
                        component: "../views/testTree/test2/index.vue",
                        children: [

                        ],
                        indexNum: '5'
                    }
                ],
            },
            {
                path: '/',
                name: '用户管理',
                meta: {
                    title: '用户管理',
                    keepAlive: true,
                },
                component: "../Layout/index.vue",
                indexNum: '1',
                children: [
                    {
                        path: '/Home',
                        name: '首页',
                        meta: {
                            title: '首页',
                            keepAlive: true,
                        },
                        component: "../views/Home/index.vue",
                        children: [

                        ],
                        indexNum: '1'
                    },
                    {
                        path: '/menus',
                        name: '菜单管理',
                        meta: {
                            title: '菜单管理',
                            keepAlive: true,
                        },
                        component: "../views/Menus/index.vue",
                        children: [

                        ]
                        , indexNum: '3'
                    }
                ]
            },
        ]
        res.json({
            code: 200,
            data: menusArr,
            msg: 'success'
        });
        res.end();
        return;

    })
})




module.exports = app;