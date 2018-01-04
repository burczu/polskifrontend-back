import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} from 'graphql';
import GraphQLDate from 'graphql-date';
import { Blogs } from '../models';

export const blogRoot = {
  getAll: async () => await Blogs.getAllBlogs()
};

// generate qraphql types
export const BlogType = new GraphQLObjectType({
  name: 'Blog',
  description: 'Blog type',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    href: { type: GraphQLString },
    rss: { type: GraphQLString },
    favicon: { type: GraphQLString },
    slug: { type: GraphQLString },
    publishedDate: { type: GraphQLDate }
  })
});

// generate graphql schema
export const BlogSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'BlogQuery',
    description: 'Blog queries',
    fields: {
      blogs: {
        type: new GraphQLList(BlogType),
        description: 'List of all blogs',
        resolve: blogRoot.getAll
      }
    }
  })
});
