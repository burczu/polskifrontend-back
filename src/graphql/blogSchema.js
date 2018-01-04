import {
  GraphQLSchema
} from 'graphql';
import { BlogQueries } from './queries/blogQueries';

export const BlogSchema = new GraphQLSchema({
  query: BlogQueries
});
