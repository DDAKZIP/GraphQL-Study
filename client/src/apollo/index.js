import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache(), // gql의 결과를 InMemoryCache에 저장하고 불필요한 네트워크 요청을 하지 않음
});

export default client;
