import shortid from 'shortid';

const ID_SEPARATOR = '~';

export type NodeType =
  | 'Scenario'
  | 'State'
  | 'Mapping'
  | 'LiteralMatcher'
  | 'Trigger'
  | 'Response';

export const createId = (nodeType: NodeType) =>
  `${nodeType}${ID_SEPARATOR}${shortid()}`;

export const parseId = (id: string) => {
  const [nodeType, ...key] = id.split(ID_SEPARATOR);
  return { nodeType: nodeType as NodeType, key: key.join() };
};
