const fs = require('fs');
const path = require('path');
const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()

const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.readFileSync('./index.html')
}
// app.use(main)

app.use(static(path.join(__dirname)))
app.use(main)
console.log('开始监听3000端口');
app.listen(3000)