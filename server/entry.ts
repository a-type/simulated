import adminServer from './admin/adminServer';
import simulatorServer from './simulator/simulatorServer';
import { logger } from './logger';

export default () =>
  Promise.all([adminServer(), simulatorServer()]).then(
    ([adminApp, simulatorApp]) => {
      logger.info('All services are up and running');
      return {
        adminApp,
        simulatorApp,
      };
    },
  );
