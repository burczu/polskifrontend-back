import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';

export const UserAuthResultType = new GraphQLObjectType({
  name: 'UserAuthResultType',
  description: 'User token result type.',
  fields: () => ({
    success: { type: GraphQLBoolean },
    token: { type: GraphQLString }
  })
});
