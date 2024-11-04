const express = require("express");
const app = express();
const port = 8000;

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "react_bbs",
  password: "12345",
  database: "react_bbs",
});

db.connect(); // db와 연결

// "/" 요청을 하면 두번째 인수(res)가 res.send('성공');을 클라이언트한테 보여 줌
app.get("/", (req, res) => {
  // ↓ sql을 변수에 담아서 사용
  const sql = "INSERT INTO requested (rowno) VALUES (1)";

  // query의 결과가 나오는 부분
  db.query(sql, (err, rows, fields) => {
    if (err) throw err;
    res.send("성공");
    console.log("데이터 추가 성공");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// db.end(); db와 연결 종료
