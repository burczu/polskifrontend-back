import express from 'express';
import graphqlHttp from 'express-graphql';
import { FeedbackSchema } from '../graphql/feedbackSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: FeedbackSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
