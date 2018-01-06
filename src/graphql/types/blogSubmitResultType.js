import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString
} from 'graphql';

export const BlogSubmitResultType = new GraphQLObjectType({
  name: 'BlogSubmitResultType',
  description: 'Result of sending the new blog submit.',
  fields: () => ({
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString }
  })
});
