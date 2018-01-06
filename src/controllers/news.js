import express from 'express';
import graphqlHttp from 'express-graphql';
import { NewsSchema } from '../graphql/newsSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: NewsSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
