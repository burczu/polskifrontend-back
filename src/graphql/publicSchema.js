import {
  GraphQLSchema
} from 'graphql';
import { PublicQueries } from './queries/publicQueries';
import { PublicMutations } from './queries/publicMutations';

export const PublicSchema = new GraphQLSchema({
  query: PublicQueries,
  mutation: PublicMutations
});
