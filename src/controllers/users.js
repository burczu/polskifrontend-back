import express from 'express';
import graphqlHttp from 'express-graphql';
import { UserSchema } from '../graphql/userSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: UserSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
