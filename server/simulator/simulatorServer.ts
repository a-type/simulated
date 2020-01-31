import express from 'express';
import { logger } from '../logger';
import requestHandler from './requestHandler';

const app = express();

app.all('*', requestHandler);

export default (port = process.env.PORT || 8090) => {
  return new Promise(resolve => {
    app.listen({ port }, () => {
      logger.info(`Simulated API ready at http://localhost:${port}`);
      resolve(app);
    });
  });
};
