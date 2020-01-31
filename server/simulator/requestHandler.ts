import { Request, Response } from 'express';
import match from './match';
import { logger } from '../logger';
import prepareResponse from './prepareResponse';

export default async (req: Request, res: Response) => {
  const mapping = await match(req);

  if (!mapping) {
    logger.fatal(`No eligible mapping found for ${req.path}`);
    logger.debug({
      path: req.path,
      params: req.params,
      headers: req.headers,
      body: req.body,
    });

    return;
  }

  const response = await prepareResponse(mapping, req);
  res.status(response.status).send(response.body);
};
