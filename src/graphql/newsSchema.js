import {
  GraphQLSchema
} from 'graphql';
import { NewsQueries } from './queries/newsQueries';

export const NewsSchema = new GraphQLSchema({
  query: NewsQueries
});
