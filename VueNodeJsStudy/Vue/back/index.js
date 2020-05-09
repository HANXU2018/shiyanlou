const Koa = require("koa");
const app = new Koa();
let middle1 = async (ctx, next) => {
  if (ctx.path == "/favicon.ico") return;
  console.log("1 before");
  await next();
  console.log("1 after");
  ctx.body = "Hello Koa Middleware.";
};
let middle2 = async (ctx, next) => {
  console.log("2 before");
  await next();
  console.log("2 after");
};
let middle3 = async (ctx, next) => {
  console.log("3 before");
  await next();
  console.log("3 after");
};

app.use(middle1);
app.use(middle2);
app.use(middle3);
app.listen(8082);
console.log("Server running at http://127.0.0.1:8082/");