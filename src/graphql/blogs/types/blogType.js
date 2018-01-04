import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import GraphQLDate from 'graphql-date';

export const BlogType = new GraphQLObjectType({
  name: 'Blog',
  description: 'Blog item type.',
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
