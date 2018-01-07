import express from 'express';
import graphqlHttp from 'express-graphql';
import { MiscSchema } from '../graphql/miscSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: MiscSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
