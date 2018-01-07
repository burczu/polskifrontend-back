import {
  GraphQLSchema
} from 'graphql';
import { RestrictedQueries } from './queries/restricted/restrictedQueries';
import { RestrictedMutations } from './queries/restricted/restrictedMutations';

export const RestrictedSchema = new GraphQLSchema({
  query: RestrictedQueries,
  mutation: RestrictedMutations
});
