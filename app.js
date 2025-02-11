const express = require("express");
const app = express();
const port = 3000;

// body-parser
// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

app.set("view engine", "ejs");
app.set("views", "./views");

//req: 프론트에서 요청하는 것들
app.get("/", (req, res) => {
  res.render("practice");
});

let data = [];

// 회원 검색
app.get("/getForm", (req, res) => {
  const nameSearched = req.query.id;
  const matching = data.filter(user => user.username === nameSearched);
  res.render("search", { userList : matching });
});

// 회원 등록
app.post("/postForm", (req, res) =>{
  data.push(req.body);
  res.render("userlist", {title: 'post 요청결과', userinfo:data});
});

// 저장된 사용자 목록 JSON 형태로 반환 (등록)
app.get("/userinfo", (req, res) =>{
  res.json(data);
});

// 페이지 이동
// app.get("/test2", (req, res) => {
//     res.render("test2");
//   });

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});