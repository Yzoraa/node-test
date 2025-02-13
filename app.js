const express = require("express");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination:(req, file, cb) =>{
    cb(null, "uploads/");
  },
  filename: (req, file, cb) =>{
    const ext = path.extname(file.originalname); // 원본 파일 명에서 확장자 추출
    cb(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일명에 타임스탬프+확장자 포함시켜 저장
  },
});

const upload = multer({storage});

const app = express();
const port = 3000;

// body-parser
// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"))

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("main3");
});

app.post("/dynamicFile", upload.single('dynamic-file'), (req, res) =>{
  console.log(req.file, '파일');
  res.send(req.file);
})

app.post("/dynamicFile2", upload.array('dynamic-file2'), (req, res) =>{
  console.log(req.files, '파일');
  res.send(req.files.map(x =>({ path: `/uploads/${x.filename}`})));
})

// app.post("/upload", upload.single('files'), (req, res) =>{
//     console.log(req.file, "파일");
//     console.log(req.body, '잘담겨라');
//     // res.send(req.file.filename);
//     res.render("check", {url: `/uploads/${req.file.filename}`})
// });

// app.get("/axiosget",(req, res) =>{
//   console.log(req.query, '백엔드 들어옴!');
//   res.send(req.query);
// });

// app.post("/axiospost",(req, res) =>{
//   // 저장된 값
//   const coreectData = {id: "123", pwd:"123"};
//   const userData = {id: req.body.id, pwd: req.body.pwd};

//   if(coreectData.id === userData.id && coreectData.pwd === userData.pwd){
//     res.send('성공')
//   } else{
//     res.send('실패')
//   }
//   console.log(req.body, '로그인 정보다!');
// });

// let data = [];

// // 회원 검색
// app.get("/getForm", (req, res) => {
//   const nameSearched = req.query.id;
//   const matching = data.filter(user => user.username === nameSearched);
//   res.render("search", { userList : matching });
// });

// // 회원 등록
// app.post("/postForm", (req, res) =>{
//   data.push(req.body);
//   res.render("userlist", {title: 'post 요청결과', userinfo:data});
// });

// // 저장된 사용자 목록 JSON 형태로 반환 (등록)
// app.get("/userinfo", (req, res) =>{
//   res.json(data);
// });

// // 페이지 이동
// app.get("/test2", (req, res) => {
//     res.render("test2");
//   });

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});