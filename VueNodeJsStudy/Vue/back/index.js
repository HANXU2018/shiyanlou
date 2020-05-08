var http = require("http"); //加载内置 http 模块，无需安装

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    response.end("Node Server is OK. \n"); // 发送数据
  })
  .listen(8080);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8080/");