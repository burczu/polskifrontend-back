import {
  GraphQLSchema
} from 'graphql';
import { ArticleQueries } from './queries/articleQueries';

export const ArticleSchema = new GraphQLSchema({
  query: ArticleQueries
});
