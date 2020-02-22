/* tslint:disable */
/* eslint-disable */
/* @relayHash f4cdc402cb80b8971db2dc2480408291 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateIdQueryVariables = {
    stateId: string;
    scenarioId: string;
};
export type StateIdQueryResponse = {
    readonly viewer: {
        readonly scenario: {
            readonly " $fragmentRefs": FragmentRefs<"ScenarioLink_scenario" | "StateLink_scenario" | "StateMappings_scenario">;
        } | null;
        readonly state: {
            readonly " $fragmentRefs": FragmentRefs<"StateDetails_state" | "StateMappings_state" | "StateLink_state">;
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
  $scenarioId: ID!
) {
  viewer {
    scenario(id: $scenarioId) {
      ...ScenarioLink_scenario
      ...StateLink_scenario
      ...StateMappings_scenario
      id
    }
    state(id: $stateId) {
      ...StateDetails_state
      ...StateMappings_state
      ...StateLink_state
      id
    }
    id
  }
}

fragment MappingLink_mapping on Mapping {
  id
}

fragment MappingLink_scenario on Scenario {
  id
}

fragment MappingLink_state on State {
  id
  name
}

fragment ScenarioLink_scenario on Scenario {
  id
  name
}

fragment StateDetails_state on State {
  id
  name
  createdAt
  updatedAt
}

fragment StateLink_scenario on Scenario {
  id
}

fragment StateLink_state on State {
  id
  name
}

fragment StateMappings_scenario on Scenario {
  ...MappingLink_scenario
}

fragment StateMappings_state on State {
  id
  mappings(first: 10) {
    edges {
      node {
        id
        methodMatcher {
          __typename
          kind
          ... on LiteralsMethodMatcher {
            values
          }
        }
        pathMatcher {
          __typename
          kind
          ... on LiteralPathMatcher {
            value
          }
        }
        bodyMatcher {
          __typename
          kind
          ... on LiteralBodyMatcher {
            value
          }
        }
        headersMatcher {
          __typename
          kind
          ... on LiteralsHeadersMatcher {
            values {
              name
              value
            }
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
        ...MappingLink_mapping
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...MappingLink_state
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "stateId",
            "type": "ID!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "scenarioId",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "scenarioId"
        } as any)
    ], v2 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "stateId"
        } as any)
    ], v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedAt",
        "args": null,
        "storageKey": null
    } as any), v7 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any)
    ], v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
        "args": null,
        "storageKey": null
    } as any), v11 = [
        (v10 /*: any*/)
    ];
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
                            "name": "scenario",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "ScenarioLink_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateLink_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateMappings_scenario",
                                    "args": null
                                }
                            ]
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
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
                                    "name": "StateLink_state",
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
                            "name": "scenario",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": [
                                (v3 /*: any*/),
                                (v4 /*: any*/)
                            ]
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "State",
                            "plural": false,
                            "selections": [
                                (v3 /*: any*/),
                                (v4 /*: any*/),
                                (v5 /*: any*/),
                                (v6 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "mappings",
                                    "storageKey": "mappings(first:10)",
                                    "args": (v7 /*: any*/),
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
                                                        (v3 /*: any*/),
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "methodMatcher",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "plural": false,
                                                            "selections": [
                                                                (v8 /*: any*/),
                                                                (v9 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "LiteralsMethodMatcher",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "name": "values",
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
                                                            "name": "pathMatcher",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "plural": false,
                                                            "selections": [
                                                                (v8 /*: any*/),
                                                                (v9 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "LiteralPathMatcher",
                                                                    "selections": (v11 /*: any*/)
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "bodyMatcher",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "plural": false,
                                                            "selections": [
                                                                (v8 /*: any*/),
                                                                (v9 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "LiteralBodyMatcher",
                                                                    "selections": (v11 /*: any*/)
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "headersMatcher",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "plural": false,
                                                            "selections": [
                                                                (v8 /*: any*/),
                                                                (v9 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "LiteralsHeadersMatcher",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "values",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "LiteralHeaderValueMatcher",
                                                                            "plural": true,
                                                                            "selections": [
                                                                                (v4 /*: any*/),
                                                                                (v10 /*: any*/)
                                                                            ]
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
                                                                        (v8 /*: any*/),
                                                                        (v9 /*: any*/)
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
                                                                        (v4 /*: any*/),
                                                                        (v3 /*: any*/)
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
                                                        (v5 /*: any*/),
                                                        (v6 /*: any*/),
                                                        (v8 /*: any*/)
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
                                    "args": (v7 /*: any*/),
                                    "handle": "connection",
                                    "key": "StateMappings_mappings",
                                    "filters": null
                                }
                            ]
                        },
                        (v3 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "StateIdQuery",
            "id": null,
            "text": "query StateIdQuery(\n  $stateId: ID!\n  $scenarioId: ID!\n) {\n  viewer {\n    scenario(id: $scenarioId) {\n      ...ScenarioLink_scenario\n      ...StateLink_scenario\n      ...StateMappings_scenario\n      id\n    }\n    state(id: $stateId) {\n      ...StateDetails_state\n      ...StateMappings_state\n      ...StateLink_state\n      id\n    }\n    id\n  }\n}\n\nfragment MappingLink_mapping on Mapping {\n  id\n}\n\nfragment MappingLink_scenario on Scenario {\n  id\n}\n\nfragment MappingLink_state on State {\n  id\n  name\n}\n\nfragment ScenarioLink_scenario on Scenario {\n  id\n  name\n}\n\nfragment StateDetails_state on State {\n  id\n  name\n  createdAt\n  updatedAt\n}\n\nfragment StateLink_scenario on Scenario {\n  id\n}\n\nfragment StateLink_state on State {\n  id\n  name\n}\n\nfragment StateMappings_scenario on Scenario {\n  ...MappingLink_scenario\n}\n\nfragment StateMappings_state on State {\n  id\n  mappings(first: 10) {\n    edges {\n      node {\n        id\n        methodMatcher {\n          __typename\n          kind\n          ... on LiteralsMethodMatcher {\n            values\n          }\n        }\n        pathMatcher {\n          __typename\n          kind\n          ... on LiteralPathMatcher {\n            value\n          }\n        }\n        bodyMatcher {\n          __typename\n          kind\n          ... on LiteralBodyMatcher {\n            value\n          }\n        }\n        headersMatcher {\n          __typename\n          kind\n          ... on LiteralsHeadersMatcher {\n            values {\n              name\n              value\n            }\n          }\n        }\n        response {\n          body {\n            __typename\n            kind\n          }\n        }\n        trigger {\n          targetState {\n            name\n            id\n          }\n        }\n        priority\n        createdAt\n        updatedAt\n        ...MappingLink_mapping\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...MappingLink_state\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'a875b54b7b05dafd7183d47781c30b3d';
export default node;
