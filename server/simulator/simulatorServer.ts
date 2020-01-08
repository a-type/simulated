import express from 'express';
import { logger } from '../logger';

const app = express();

export default (port = process.env.PORT || 8090) => {
  return new Promise(resolve => {
    app.listen({ port }, () => {
      logger.info(`Simulated API ready at http://localhost:${port}`);
      resolve(app);
    });
  });
};
