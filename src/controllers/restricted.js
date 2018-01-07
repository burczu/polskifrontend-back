import express from 'express';
import graphqlHttp from 'express-graphql';
import { RestrictedSchema } from '../graphql/restrictedSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: RestrictedSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
