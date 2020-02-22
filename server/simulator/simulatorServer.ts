import express from 'express';
import { logger } from '../logger';
import requestHandler from './requestHandler';
import { Request, Response } from 'express';

const app = express();

function rawBody(req: Request, res: Response, next: Function) {
  req.setEncoding('utf8');
  req.body = '';
  req.on('data', function(chunk) {
    req.body += chunk;
  });
  req.on('end', function() {
    next();
  });
}

app.use(rawBody);

app.all('*', requestHandler);

export default (port = process.env.PORT || 8090) => {
  return new Promise(resolve => {
    app.listen({ port }, () => {
      logger.info(`Simulated API ready at http://localhost:${port}`);
      resolve(app);
    });
  });
};
