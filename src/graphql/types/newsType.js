import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import GraphQLDate from 'graphql-date';

export const NewsType = new GraphQLObjectType({
  name: 'News',
  description: 'News item type.',
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    message: { type: GraphQLString },
    date: { type: GraphQLDate }
  })
});
