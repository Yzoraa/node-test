const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");

//req: 프론트에서 요청하는 것들
app.get("/", (req, res) => {
  //req.body
  res.send("Hello world!"); //보내는것
  //render: 페이지로 이동
});

app.get("/test", (req, res) => {
  res.render("test");
});
app.get("/test2", (req, res) => {
    res.render("test2");
  });

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});