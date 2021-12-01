
const query = require('../public/mysqlPool')
const express = require('express');
const app = express.Router();


app.get('/getInfo', async (req, res) => {
    const { type } = req.query;
    let sql = `select * from menus;`
    const data = await query(sql)
    const menus = []
    try {
        if (type === '1') {/* type 为 '1'时返回menus表里的数据，其他值则返回处理过的树形 */
            res.json(data)
            res.end()
            return
        }
        data.map(item => {
            if (item.parentID === 0) {
                menus.push({ ...item, children: [] });
            }
        })
        const filters = (menusArr) => {
            menusArr.map(item => {
                data.map(item2 => {
                    if (item2.parentID === item.id) {
                        item.children.push({ ...item2, children: [] });
                    }
                })
                if (item.children.length > 0) {
                    filters(item.children)
                }
            })
        }
        filters(menus)
        res.json(menus)
        res.end()
    } catch (error) {
        res.json({ code: 500, data: '服务器出错了!', msg: error });
        res.end();
        return;
    }
})

app.post('/insertMenus', async (req, res) => {
    try {
        const { title, menusName, path, icon, parentID, type } = req.body;
        let sql = `select * from menus where menusName = '${menusName}' or path = '${path}'`;
        const val = await query(sql);
        if (val.length > 0) {
            res.json({ code: 200, data: [], msg: '菜单路径重复或者菜单唯一名称标识符menusName重复！' });
            res.end()
            return
        }

        sql = `insert into menus (title,menusName,path,icon,parentID,type) values('${title}','${menusName}','${path}','${icon}',${parentID},${type})`
        const data = await query(sql)
        if (data.affectedRows === 1) {
            res.json({ code: 200, data: '新增成功', msg: 'success' });
        } else {
            res.json(data);
        }
        res.end();
    } catch (error) {
        res.json({ code: 500, data: '更新失败', msg: error });
        res.end();
        return;
    }
})
// 删除
app.post('/delMenus', async (req, res) => {
    try {
        const { id } = req.body
        let sql = `delete from menus where id=${id}`
        const data = await query(sql)
        if (data.affectedRows === 1) {
            res.json({ code: 200, data: '删除成功', msg: 'success' });
        } else {
            res.json({ code: 201, data: data, msg: '删除失败，数据不存在或者数据库错误' });
        }
        res.end();

    } catch (error) {
        res.json({ code: 500, data: '服务器出错了!', msg: error });
        res.end();
        return;
    }
})
// 修改
app.post('/updateMenus', async (req, res) => {
    try {
        const { id, title, menusName, path, icon, parentID, type } = req.body;
        let sql = `update menus set title='${title}',menusName='${menusName}',path='${path}',icon='${icon}',parentID=${parentID},type=${type} where id=${id}`
        const data = await query(sql)
        if (data.affectedRows === 1) {
            res.json({ code: 200, data: '修改成功', msg: 'success' });
        } else {
            res.json({ code: 201, data: '修改失败', msg: data });
        }
        res.end();
    } catch (error) {
        res.json({ code: 500, data: '服务器出错了!', msg: error });
        res.end();
        return;
    }
})

module.exports = app;
