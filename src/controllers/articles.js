import express from 'express';
import graphqlHttp from 'express-graphql';
import { Articles } from '../models';
import { ArticleSchema } from '../graphql/articleSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: ArticleSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
