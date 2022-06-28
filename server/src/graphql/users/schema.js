import { gql } from "apollo-server-micro";
const typeDefs = gql`
    type User {
        iduser: Int
        userId: String
        userName: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(userId: String!, userName: String!): Boolean
    }
`;
export default typeDefs;
