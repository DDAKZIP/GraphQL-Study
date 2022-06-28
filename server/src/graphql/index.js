import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import UsersSchema from "./users/schema";
import UsersResolvers from "./users/resolvers";

export const typeDefs = mergeTypeDefs([UsersSchema]);
export const resolvers = mergeResolvers([UsersResolvers]);
