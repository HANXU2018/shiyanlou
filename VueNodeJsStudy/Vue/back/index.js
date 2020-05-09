var http = require("http"); //加载内置 http 模块，无需安装
const Koa = require("koa");
const app = new Koa();
// var db = require("./db");
let { Users } = require("./model"); //引入 model.js

app.use(async ctx => {
  ctx.body = "Hello Koa.";
});
app.listen(8082);
console.log("Server running at http://127.0.0.1:8082/");

// http
//   .createServer(function(request, response) {
//       var newUser = new Users({
//       name: "Steven",
//       info: { age: 30, height: 170 }
//     });
//     newUser.save(function(err, res) {
//       console.log("保存结束");
//     });
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     response.end("Node Server is OK. \n"); // 发送数据
//   })
//   .listen(8082);

// // 终端打印如下信息
// console.log("Server running at http://127.0.0.1:8082/");