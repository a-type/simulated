import Storage from '../storage/Storage';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export type Context = {
  storage: Storage;
};

export const getContext = (integrationContext: ExpressContext) => ({
  storage: new Storage(),
});
