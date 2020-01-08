import chalk from 'chalk';
import { ApolloError } from 'apollo-server-express';

export type Loggable = any;

const DEBUG = process.env.NODE_ENV !== 'production';

const isApolloError = (err: Error): err is ApolloError =>
  !!(err as ApolloError).originalError;

const keyBlacklist = ['password', 'secret'];
const convert = (item: Loggable): string | number => {
  if (item instanceof Error) {
    if (isApolloError(item)) {
      return `${item.name}: ${item.message}
      Path: ${item['path']}, Pos: ${item['positions']}
      Original Error:
      ${convert(item['originalError'])}
      `;
    }

    return `${item.name}: ${item.message}
    ${item.stack}
    `;
  }
  if (typeof item === 'object') {
    return JSON.stringify(
      item,
      (key, val) => (keyBlacklist.includes(key) ? '******' : val),
      '  ',
    );
  } else if (typeof item !== 'string') {
    return JSON.stringify(item);
  }
  return item;
};

const info = (...items: Loggable[]) =>
  console.info(chalk.blue(...items.map(convert)));
info.important = (...items: Loggable[]) =>
  console.info(
    chalk.whiteBright.bgBlue.bold('\n', ...items.map(convert), '\n'),
  );

const warn = (...items: Loggable[]) =>
  console.warn(chalk.yellow(...items.map(convert)));
warn.important = (...items: Loggable[]) =>
  console.warn(
    chalk.whiteBright.bgYellow.bold('\n', ...items.map(convert), '\n'),
  );

const fatal = (...items: Loggable[]) =>
  console.error(
    chalk.whiteBright.bgRed.bold('\n', ...items.map(convert), '\n'),
  );

const debug = (...items: Loggable[]) => {
  if (DEBUG) {
    console.debug(
      chalk.black.bgWhiteBright.bold('\n', ...items.map(convert), '\n'),
    );
  }
};

export const logger = {
  info,
  warn,
  fatal,
  debug,
};
