import user from "../../db/models/user";
import StatusCode from "../../constants/statusCode";

const resolvers = {
    Query: {
        users: async () => {
            const result = await user.selectAll();
            return result.data;
        },
    },

    Mutation: {
        addUser: async (_, { USER_LOGIN_TYPE, USER_PHONE, USER_EMAIL }) => {
            const result = await user.insert(
                USER_LOGIN_TYPE,
                USER_PHONE,
                USER_EMAIL
            );
            return result.code === StatusCode.OK ? true : false;
        },
    },
};

export default resolvers;
