import jwt from 'jsonwebtoken';
import app from '../main';

export default function adminAuth(req, res, next) {
  // check header or url parameters or post parameters for token
  const token = req.headers['X-Access-Token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, app.get('secret'), (err, decoded) => {
      if (err) {
        return res.status(403).send({
          message: 'This resource is forbidden. Do you pass suitable authentication?'
        });
      }

      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      next();
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      message: 'This resource is forbidden. Do you pass suitable authentication?'
    });
  }
}
