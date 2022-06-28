import statusUtil from "../../utils/statusUtil";
import pool from "../pool";

// 테이블 이름
const tableName = "USER_TB";

// 유저에 대한 모델 설정, 본 모델은 /src/graphql/resolers.js 와 연결되어, 명령을 받아 수행한다.
const user = {
    selectAll: async () => {
        const query = `SELECT * FROM ${tableName}`;
        const result = await pool.query(query);

        return result ? statusUtil.success(result) : statusUtil.false();
    },
    insert: async (USER_LOGIN_TYPE, USER_PHONE, USER_EMAIL) => {
        const query = `INSERT INTO ${tableName} (USER_LOGIN_TYPE, USER_PHONE, USER_EMAIL) VALUES (?, ?, ?)`;
        const result = await pool.query(query, [
            USER_LOGIN_TYPE,
            USER_PHONE,
            USER_EMAIL,
        ]);

        return result ? statusUtil.success(result) : statusUtil.false();
    },
};

export default user;
