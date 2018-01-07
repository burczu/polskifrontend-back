import {
  GraphQLSchema
} from 'graphql';
import { MiscQueries } from './queries/misc/miscQueries';

export const MiscSchema = new GraphQLSchema({
  query: MiscQueries
});
