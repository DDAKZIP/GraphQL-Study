import poolPromise from "./config";
// pool을 생성하여 각각의 과정에서 아래와 같이 auth release 사용
// pool.query() = pool.getConnection() + connection.query() + connection.release()

const pool = {
    query: async (query, value) => {
        let result;
        const pool = await poolPromise;
        try {
            var connection = await pool.getConnection();
            result = value
                ? await connection.query(query, value)
                : (await connection.query(query)) || null;
        } catch (err) {
            console.log(err);
            connection.rollback(() => {});
        } finally {
            connection.release; // ERR : pool.releaseConnection(connection);
            return result;
        }
    },
};

export default pool;
