import {
  GraphQLSchema
} from 'graphql';
import { BlogQueries } from './queries/blogQueries';
import { BlogMutations } from './queries/blogMutations';

export const BlogSchema = new GraphQLSchema({
  query: BlogQueries,
  mutation: BlogMutations
});
