import {
  GraphQLSchema
} from 'graphql';
import { PublicQueries } from './queries/public/publicQueries';
import { PublicMutations } from './queries/public/publicMutations';

export const PublicSchema = new GraphQLSchema({
  query: PublicQueries,
  mutation: PublicMutations
});
