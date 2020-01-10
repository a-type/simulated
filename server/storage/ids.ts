import shortid from 'shortid';

export type NodeType =
  | 'Scenario'
  | 'State'
  | 'Mapping'
  | 'LiteralMatcher'
  | 'Trigger'
  | 'Response';

export const createId = (nodeType: NodeType) => `${nodeType}-${shortid()}`;

export const parseId = (id: string) => {
  const [nodeType, key] = id.split('-');
  return { nodeType: nodeType as NodeType, key };
};
