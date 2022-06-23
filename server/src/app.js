import express from "express";
import { ApolloServer } from "apollo-server-express"; // GraphQL 서버 인스턴스를 만들어주는 생성자
import { bodyParserGraphQL } from "body-parser-graphql"; // GraphQL 쿼리를 해석하기 위해 사용.
import compression from "compression"; // gzip 압축을 사용하여 웹 앱의 속도를 높이기 위하여 사용.
import resolvers from "../src/graphql/resolvers";
import fs from "fs"; // Node file system을 사용하여 gql schema 가져옴
import { express as voyagerMiddleware } from "graphql-voyager/middleware"; // express에서 graphql-voyager 사용

const typeDefs = fs.readFileSync("src/graphql/schema.graphql", {
    encoding: "utf-8",
});

const port = 8000;
const app = express();

app.use(bodyParserGraphQL());
app.use(compression());
// 스키마를 ERD 형태로 보여줌
app.use("/voyager", voyagerMiddleware({ endpointUrl: "/graphql" }));

// Apollo Server Object Create
const server = new ApolloServer({
    typeDefs, // schema.graphql 내에 쿼리와 뮤테이션 정의
    resolvers, // query, mutation 등의 타입이 실제로 일하는 부분
    introspection: true, // 스키마 검사 활성화 default: true
    playground: true, // playgorund 활성화 default: true
});

// To integrate the required logic with Express, you need to call await server.start()
server.start().then((res) => {
    server.applyMiddleware({
        app,
        path: "/graphql",
    });

    app.listen(port, async () => {
        console.log(`GraphQL API server open on ${port}`);
    });
});
