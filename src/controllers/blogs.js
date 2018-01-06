import express from 'express';
import graphqlHttp from 'express-graphql';
import { BlogSchema } from '../graphql/blogSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: BlogSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
