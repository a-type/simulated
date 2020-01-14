import { toCursor } from '../../../storage/cursors';

export type RelayNode = {
  id: string;
};

export const relayConnection = <T extends RelayNode>(
  list: T[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
) => {
  const startCursor = list.length > 0 ? toCursor(list[0]?.id || '') : null;
  const endCursor =
    list.length > 0 ? toCursor(list[list.length - 1]?.id || '') : null;

  return {
    edges: list.map(state => ({
      node: state,
      cursor: toCursor(state.id),
    })),
    pageInfo: {
      startCursor,
      endCursor,
      hasNextPage,
      hasPreviousPage,
    },
  };
};
