import { Router } from 'express';

const ApiRouter = Router();

ApiRouter.use((req, res, next) => {
  req.url = '/api' + req.url;
  next();
});

export default ApiRouter;
