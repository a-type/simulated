/* tslint:disable */
/* eslint-disable */
/* @relayHash e26373fc9e5802489b46bd428890f4e9 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioIdQueryVariables = {
    scenarioId: string;
};
export type ScenarioIdQueryResponse = {
    readonly viewer: {
        readonly scenario: {
            readonly " $fragmentRefs": FragmentRefs<"ScenarioDetails_scenario" | "ScenarioStates_scenario" | "AddStateButton_scenario" | "DeleteScenarioButton_scenario">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"DeleteScenarioButton_viewer">;
    };
};
export type ScenarioIdQuery = {
    readonly response: ScenarioIdQueryResponse;
    readonly variables: ScenarioIdQueryVariables;
};



/*
query ScenarioIdQuery(
  $scenarioId: ID!
) {
  viewer {
    ...DeleteScenarioButton_viewer
    scenario(id: $scenarioId) {
      ...ScenarioDetails_scenario
      ...ScenarioStates_scenario
      ...AddStateButton_scenario
      ...DeleteScenarioButton_scenario
      id
    }
    id
  }
}

fragment AddStateButton_scenario on Scenario {
  id
}

fragment DeleteScenarioButton_scenario on Scenario {
  id
  name
}

fragment DeleteScenarioButton_viewer on Viewer {
  id
}

fragment ScenarioDetails_scenario on Scenario {
  id
  name
  createdAt
  updatedAt
}

fragment ScenarioStates_scenario on Scenario {
  id
  defaultState {
    id
    name
  }
  possibleStates(first: 10) {
    edges {
      node {
        id
        name
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
    } as any), v4 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "ScenarioIdQuery",
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
                                    "name": "ScenarioDetails_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "ScenarioStates_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "AddStateButton_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "DeleteScenarioButton_scenario",
                                    "args": null
                                }
                            ]
                        },
                        {
                            "kind": "FragmentSpread",
                            "name": "DeleteScenarioButton_viewer",
                            "args": null
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "ScenarioIdQuery",
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
                        (v2 /*: any*/),
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "scenario",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": [
                                (v2 /*: any*/),
                                (v3 /*: any*/),
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "createdAt",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "updatedAt",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "defaultState",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "State",
                                    "plural": false,
                                    "selections": [
                                        (v2 /*: any*/),
                                        (v3 /*: any*/)
                                    ]
                                },
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "possibleStates",
                                    "storageKey": "possibleStates(first:10)",
                                    "args": (v4 /*: any*/),
                                    "concreteType": "ScenarioStateConnection",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "edges",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "ScenarioStateEdge",
                                            "plural": true,
                                            "selections": [
                                                {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "node",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "State",
                                                    "plural": false,
                                                    "selections": [
                                                        (v2 /*: any*/),
                                                        (v3 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "__typename",
                                                            "args": null,
                                                            "storageKey": null
                                                        }
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
                                            "concreteType": "ScenarioStatePageInfo",
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
                                    "name": "possibleStates",
                                    "args": (v4 /*: any*/),
                                    "handle": "connection",
                                    "key": "ScenarioStates_possibleStates",
                                    "filters": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "ScenarioIdQuery",
            "id": null,
            "text": "query ScenarioIdQuery(\n  $scenarioId: ID!\n) {\n  viewer {\n    ...DeleteScenarioButton_viewer\n    scenario(id: $scenarioId) {\n      ...ScenarioDetails_scenario\n      ...ScenarioStates_scenario\n      ...AddStateButton_scenario\n      ...DeleteScenarioButton_scenario\n      id\n    }\n    id\n  }\n}\n\nfragment AddStateButton_scenario on Scenario {\n  id\n}\n\nfragment DeleteScenarioButton_scenario on Scenario {\n  id\n  name\n}\n\nfragment DeleteScenarioButton_viewer on Viewer {\n  id\n}\n\nfragment ScenarioDetails_scenario on Scenario {\n  id\n  name\n  createdAt\n  updatedAt\n}\n\nfragment ScenarioStates_scenario on Scenario {\n  id\n  defaultState {\n    id\n    name\n  }\n  possibleStates(first: 10) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '2cd7aa73d7eacfdb5a2b3316f755a2d9';
export default node;
