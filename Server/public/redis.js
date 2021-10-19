const redis = require('redis');
const client = redis.createClient({port: 6379, host:'127.0.0.1',password:"foobared"});
client.on("error", function (error) {
    console.error(error);
});
const db = {
    /* token */
    setToken(key, token) {
        client.set(key, token)
        client.expire(key, 28800)
    },
    getToken(key) {
        return new Promise((resolve, reject) => {
            client.get(key, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    },
    quit() {
        client.quit();
    }

}


module.exports = db;