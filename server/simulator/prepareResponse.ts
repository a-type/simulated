import { EligibleMapping } from './match';
import { Request } from 'express';
import { isTemplateResponseBody } from '../utils/guards';
import { ResponseBody } from '../admin/schema/generated/graphql';

export default async (mapping: EligibleMapping, _req: Request) => {
  const body = await prepareResponseBody(mapping.response.body, _req);
  return {
    // TODO: configurable statuses
    status: 200,
    body,
  };
};

const prepareResponseBody = async (body: ResponseBody, _req: Request) => {
  if (isTemplateResponseBody(body)) {
    // TODO: templating
    return body.value;
  }
};
