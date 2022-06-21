import mysql from "promise-mysql"; // 비동기시 mysql 처리
// 동기식으로 처리하면, 모든 로직에 대해서 콜백함수를 통해 에러 처리를 해줘야하기 때문에 코드가 길고 이해하기 어렵다.
require("dotenv").config();

// README.md 참조, 디렉토리 최상단에 .env 폴더에서 관리
const dbConfig = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};

// 미리 pool(커넥션)을 만들어놓고, 가져다 써서 과부하를 줄이는 방식
export default mysql.createPool(dbConfig);
