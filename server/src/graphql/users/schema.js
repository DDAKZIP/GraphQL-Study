import { gql } from "apollo-server-micro";
const typeDefs = gql`
    type User {
        USER_PK: Int
        USER_LOGIN_TYPE: String
        USER_CREATE_DT: String
        USER_USE_DT: String
        USER_STATE: Int
        USER_CL_CNT: Int
        USER_RP_CNT: Int
        USER_BP_CNT: Int
        USER_GRADE: Int
        USER_PHONE: String
        USER_EMAIL: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(
            USER_LOGIN_TYPE: String!
            USER_PHONE: String
            USER_EMAIL: String
        ): Boolean
    }
`;
export default typeDefs;
