import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { logger } from '../logger';

const app = express();

const apolloServer = new ApolloServer({});

apolloServer.applyMiddleware({ app });

export default (port = process.env.ADMIN_PORT || 8091) => {
  return new Promise(resolve => {
    app.listen({ port }, () => {
      logger.info(
        `Admin API ready at http://localhost:${port}${apolloServer.graphqlPath}`,
      );
      resolve(app);
    });
  });
};
