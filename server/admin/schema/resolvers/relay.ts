import { toCursor } from '../../../storage/cursors';

export type RelayNode = {
  id: string;
};

export const relayConnection = (
  list: RelayNode[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
) => {
  const startCursor = list.length > 0 ? toCursor(list.shift()?.id || '') : null;
  const endCursor = list.length > 0 ? toCursor(list.pop()?.id || '') : null;

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
