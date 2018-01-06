import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} from 'graphql';
import { BlogType } from './blogType';

export const BlogsResultType = new GraphQLObjectType({
  name: 'BlogsResultType',
  description: 'Result of getting all blogs, contains blogs + next page info.',
  fields: () => ({
    blogs: { type: GraphQLList(BlogType) },
    nextPage: { type: GraphQLInt }
  })
});
