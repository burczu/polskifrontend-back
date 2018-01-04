import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import GraphQLDate from 'graphql-date';
import { ArticleType } from './articleType';

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
    publishedDate: { type: GraphQLDate },
    articles: { type: GraphQLList(ArticleType) }
  })
});
