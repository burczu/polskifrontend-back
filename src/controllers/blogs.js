import express from 'express';
import graphqlHttp from 'express-graphql';
import sendMail from '../utils/emailer';
import { BlogSchema } from '../graphql/blogSchema';

const router = new express.Router();

router.use('/graphql', graphqlHttp({
  schema: BlogSchema,
  graphiql: process.env.NODE_ENV === 'develop'
}));

router.post('/submit', async (req, res) => {
  try {
    const body = `<p style="font-size: 1.4em;">
      Adres bloga: ${req.body.blogName},<br /> 
      Email: ${req.body.email || 'nie podano'}
      </p>`;
    const sendingResult = await sendMail(body);
    res.send(sendingResult);
  } catch (error) {
    res.send({ success: false, message: error });
  }
});

export default router;
