/* tslint:disable */
/* eslint-disable */
/* @relayHash 3afdfd91c43b5785677c731c86cf9aeb */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateIdQueryVariables = {
    stateId: string;
};
export type StateIdQueryResponse = {
    readonly viewer: {
        readonly state: {
            readonly " $fragmentRefs": FragmentRefs<"StateDetails_state" | "StateMappings_state" | "AddMappingButton_state">;
        } | null;
    };
};
export type StateIdQuery = {
    readonly response: StateIdQueryResponse;
    readonly variables: StateIdQueryVariables;
};



/*
query StateIdQuery(
  $stateId: ID!
) {
  viewer {
    state(id: $stateId) {
      ...StateDetails_state
      ...StateMappings_state
      ...AddMappingButton_state
      id
    }
    id
  }
}

fragment AddMappingButton_state on State {
  id
}

fragment StateDetails_state on State {
  id
  name
  createdAt
  updatedAt
}

fragment StateMappings_state on State {
  id
  mappings(first: 10) {
    edges {
      node {
        id
        pathMatcher {
          __typename
          kind
          ... on LiteralMatcher {
            value
          }
        }
        response {
          body {
            __typename
            kind
          }
        }
        trigger {
          targetState {
            name
            id
          }
        }
        priority
        createdAt
        updatedAt
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "stateId",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "stateId"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedAt",
        "args": null,
        "storageKey": null
    } as any), v6 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any)
    ], v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "StateIdQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "viewer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "State",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateDetails_state",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateMappings_state",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "AddMappingButton_state",
                                    "args": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "StateIdQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "viewer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "State",
                            "plural": false,
                            "selections": [
                                (v2 /*: any*/),
                                (v3 /*: any*/),
                                (v4 /*: any*/),
                                (v5 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "mappings",
                                    "storageKey": "mappings(first:10)",
                                    "args": (v6 /*: any*/),
                                    "concreteType": "StateMappingConnection",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "edges",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "StateMappingEdge",
                                            "plural": true,
                                            "selections": [
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "node",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "Mapping",
                                                    "plural": false,
                                                    "selections": [
                                                        (v2 /*: any*/),
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "pathMatcher",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "plural": false,
                                                            "selections": [
                                                                (v7 /*: any*/),
                                                                (v8 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "LiteralMatcher",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "name": "value",
                                                                            "args": null,
                                                                            "storageKey": null
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "response",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": "Response",
                                                            "plural": false,
                                                            "selections": [
                                                                {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "name": "body",
                                                                    "storageKey": null,
                                                                    "args": null,
                                                                    "concreteType": null,
                                                                    "plural": false,
                                                                    "selections": [
                                                                        (v7 /*: any*/),
                                                                        (v8 /*: any*/)
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "trigger",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": "Trigger",
                                                            "plural": false,
                                                            "selections": [
                                                                {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "name": "targetState",
                                                                    "storageKey": null,
                                                                    "args": null,
                                                                    "concreteType": "State",
                                                                    "plural": false,
                                                                    "selections": [
                                                                        (v3 /*: any*/),
                                                                        (v2 /*: any*/)
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "priority",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        (v4 /*: any*/),
                                                        (v5 /*: any*/),
                                                        (v7 /*: any*/)
                                                    ]
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "cursor",
                                                    "args": null,
                                                    "storageKey": null
                                                }
                                            ]
                                        },
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "pageInfo",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "StateMappingPageInfo",
                                            "plural": false,
                                            "selections": [
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "endCursor",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "hasNextPage",
                                                    "args": null,
                                                    "storageKey": null
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "kind": "LinkedHandle",
                                    "alias": null,
                                    "name": "mappings",
                                    "args": (v6 /*: any*/),
                                    "handle": "connection",
                                    "key": "StateMappings_mappings",
                                    "filters": null
                                }
                            ]
                        },
                        (v2 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "StateIdQuery",
            "id": null,
            "text": "query StateIdQuery(\n  $stateId: ID!\n) {\n  viewer {\n    state(id: $stateId) {\n      ...StateDetails_state\n      ...StateMappings_state\n      ...AddMappingButton_state\n      id\n    }\n    id\n  }\n}\n\nfragment AddMappingButton_state on State {\n  id\n}\n\nfragment StateDetails_state on State {\n  id\n  name\n  createdAt\n  updatedAt\n}\n\nfragment StateMappings_state on State {\n  id\n  mappings(first: 10) {\n    edges {\n      node {\n        id\n        pathMatcher {\n          __typename\n          kind\n          ... on LiteralMatcher {\n            value\n          }\n        }\n        response {\n          body {\n            __typename\n            kind\n          }\n        }\n        trigger {\n          targetState {\n            name\n            id\n          }\n        }\n        priority\n        createdAt\n        updatedAt\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '0cbbb294856b5c1fa24732593ad0635e';
export default node;
