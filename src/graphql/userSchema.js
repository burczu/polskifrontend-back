import {
  GraphQLSchema
} from 'graphql';
import { UserQueries } from './queries/userQueries';
import { UserMutations } from './queries/userMutations';

export const UserSchema = new GraphQLSchema({
  query: UserQueries,
  mutation: UserMutations
});
