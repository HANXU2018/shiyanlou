const Koa = require("koa");
const app = new Koa();
let allMiddleGroup = require("./mutimidd");
app.use(allMiddleGroup);
// 全局错误捕获
app.use(async (ctx, next) => {
  try {
    await next();
    console.log("handler 通过");
  } catch (err) {
    console.log("handler 处理错误");
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
});

// 记录请求地址和时间
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(`${ctx.method} ${ctx.url} in at ${start}.`);
  await next();
  const end = Date.now();
  console.log(
    `${ctx.method} ${ctx.url} out at ${end}.Time use: ${end - start}`
  );
});

// 路由
app.use(async (ctx, next) => {
  if (ctx.path == "/login") {
    ctx.body = "login";
  } else if (ctx.path == "/signup") {
    ctx.body = "signup";
  } else {
    await next();
  }
});

app.listen(8082);
console.log("Server running at http://127.0.0.1:8082/");