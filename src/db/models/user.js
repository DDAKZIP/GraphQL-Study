import statusUtil from "../../utils/statusUtil";
import pool from "../pool";

// 테이블 이름
const tableName = "user";

// 유저에 대한 모델 설정, 본 모델은 /src/graphql/resolers.js 와 연결되어, 명령을 받아 수행한다.
const user = {
    selectAll: async () => {
        const query = `SELECT * FROM ${tableName}`;
        const result = await pool.query(query);

        return result ? statusUtil.success(result) : statusUtil.false();
    },
    insert: async (userId, userName) => {
        const query = `INSERT INTO ${tableName} (userId, userName) VALUES (?, ?)`;
        const result = await pool.query(query, [userId, userName]);

        return result ? statusUtil.success(result) : statusUtil.false();
    },
};

export default user;
