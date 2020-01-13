import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { logger } from '../logger';
import { getContext } from './context';
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
import next from 'next';

const app = express();

const apolloServer = new ApolloServer({
  context: getContext,
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app });

const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
const nextHandle = nextApp.getRequestHandler();

export default async (port = process.env.ADMIN_PORT || 8091) => {
  await nextApp.prepare();

  app.all('*', (req, res) => nextHandle(req, res));

  await new Promise(resolve => {
    app.listen({ port }, () => {
      logger.info(
        `Admin API ready at http://localhost:${port}${apolloServer.graphqlPath}`,
      );
      resolve();
    });
  });

  return app;
};
