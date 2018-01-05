import express from 'express';
import graphqlHttp from 'express-graphql';
import { Articles } from '../models';
import { ArticleSchema } from '../graphql/articleSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: ArticleSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const article = await Articles.getBySlug(slug);

    res.send({ success: true, article });
  } catch (error) {
    res.send({ success: false, message: error });
  }
});

export default router;
