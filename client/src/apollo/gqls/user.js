import { gql } from "@apollo/client";

const GET_USERS = gql`
    query {
        users {
            userName
            userId
        }
    }
`;

const ADD_USER = gql`
    mutation AddUser($userId: String!, $userName: String!) {
        addUser(userId: $userId, userName: $userName)
    }
`;

export { GET_USERS, ADD_USER };
