const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const hpp = require("hpp");
const helmet = require("helmet");

//보안상 올리면 안되는 정보 .env 로 관리
dotenv.config();
// initializing
const app = express();
//cross-origin resouce sharing
app.use(cors());

// 배포 서버는 production
if (process.env.NODE_ENV === "production") {
    app.use(hpp());
    app.use(helmet());
}
// request에 담긴 정보를 json 형태로 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 라우팅을 routes 폴더로 관리
app.use("/", require("./routes"));

// route 폴더에 지정한 경로가 아닌 다른 경로로 요청이 올 경우 
// 잘못된 경로라고 클라이언트에게 알려줌
app.use("*", (req, res) => {
    res.status(404).json({
        status: 404,
        success: false,
        message: "잘못된 경로입니다.",
    });
});

//express를 firebase functions로 감싸주는 코드
module.exports = functions
    .runWith({
        timeoutSeconds: 300,   // 요청 처리시 300초 초과하면 타임아웃 시킴
        memory: "512MB",  // 서버에 할당할 메모리
    })
    .region("asia-northeast3")   //서버가 돌아갈 region
    .https.onRequest(async (req, res) => {
        // 디버깅을 위해 들어오는 요청에 대한 로그를 콘솔에 찍기
        console.log("\n\n", "[api]", `[${req.method.toUpperCase()}]`, req.originalUrl, req.body);
        // 맨 위에 선언된 express app 객체를 리턴
        // 이것이 functions/index.js 안의 api: require("./api")에 들어감
        return app(req, res);
    });