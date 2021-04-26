//连接池
var mysql = require("mysql");
var pool = mysql.createPool({
    host: '39.106.164.1',
    user: 'root',
    password: 'root',
    database: 'dengruo',
    port: 3306
});
var query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接,关闭--
                conn.release();
                //事件驱动回调
                callback(qerr, vals, fields);
            });
        }
    });
};

module.exports = query;