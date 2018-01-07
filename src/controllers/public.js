import express from 'express';
import graphqlHttp from 'express-graphql';
import { PublicSchema } from '../graphql/publicSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: PublicSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

export default router;
