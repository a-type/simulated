/* tslint:disable */
/* eslint-disable */
/* @relayHash 68216e13ee62a34565e3b679d35dac4b */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioIdQueryVariables = {
    scenarioId: string;
};
export type ScenarioIdQueryResponse = {
    readonly viewer: {
        readonly scenario: {
            readonly " $fragmentRefs": FragmentRefs<"ScenarioDetails_scenario" | "ScenarioStatus_scenario" | "ScenarioStates_scenario" | "StateAddButton_scenario" | "ScenarioDeleteButton_scenario" | "ScenarioLink_scenario">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"ScenarioDeleteButton_viewer">;
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
    ...ScenarioDeleteButton_viewer
    scenario(id: $scenarioId) {
      ...ScenarioDetails_scenario
      ...ScenarioStatus_scenario
      ...ScenarioStates_scenario
      ...StateAddButton_scenario
      ...ScenarioDeleteButton_scenario
      ...ScenarioLink_scenario
      id
    }
    id
  }
}

fragment ScenarioDeleteButton_scenario on Scenario {
  id
  name
}

fragment ScenarioDeleteButton_viewer on Viewer {
  id
}

fragment ScenarioDetails_scenario on Scenario {
  id
  name
  createdAt
  updatedAt
}

fragment ScenarioLink_scenario on Scenario {
  id
  name
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

fragment ScenarioStatus_scenario on Scenario {
  id
  currentState {
    id
    name
  }
  ...StateSelector_scenario
}

fragment StateAddButton_scenario on Scenario {
  id
}

fragment StateSelector_scenario on Scenario {
  id
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
        (v2 /*: any*/),
        (v3 /*: any*/)
    ], v5 = [
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
                                    "name": "ScenarioStatus_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "ScenarioStates_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateAddButton_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "ScenarioDeleteButton_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "ScenarioLink_scenario",
                                    "args": null
                                }
                            ]
                        },
                        {
                            "kind": "FragmentSpread",
                            "name": "ScenarioDeleteButton_viewer",
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
                                    "name": "currentState",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "State",
                                    "plural": false,
                                    "selections": (v4 /*: any*/)
                                },
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "possibleStates",
                                    "storageKey": "possibleStates(first:10)",
                                    "args": (v5 /*: any*/),
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
                                    "args": (v5 /*: any*/),
                                    "handle": "connection",
                                    "key": "StateSelector_possibleStates",
                                    "filters": null
                                },
                                {
                                    "kind": "LinkedHandle",
                                    "alias": null,
                                    "name": "possibleStates",
                                    "args": (v5 /*: any*/),
                                    "handle": "connection",
                                    "key": "ScenarioStates_possibleStates",
                                    "filters": null
                                },
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "defaultState",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "State",
                                    "plural": false,
                                    "selections": (v4 /*: any*/)
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
            "text": "query ScenarioIdQuery(\n  $scenarioId: ID!\n) {\n  viewer {\n    ...ScenarioDeleteButton_viewer\n    scenario(id: $scenarioId) {\n      ...ScenarioDetails_scenario\n      ...ScenarioStatus_scenario\n      ...ScenarioStates_scenario\n      ...StateAddButton_scenario\n      ...ScenarioDeleteButton_scenario\n      ...ScenarioLink_scenario\n      id\n    }\n    id\n  }\n}\n\nfragment ScenarioDeleteButton_scenario on Scenario {\n  id\n  name\n}\n\nfragment ScenarioDeleteButton_viewer on Viewer {\n  id\n}\n\nfragment ScenarioDetails_scenario on Scenario {\n  id\n  name\n  createdAt\n  updatedAt\n}\n\nfragment ScenarioLink_scenario on Scenario {\n  id\n  name\n}\n\nfragment ScenarioStates_scenario on Scenario {\n  id\n  defaultState {\n    id\n    name\n  }\n  possibleStates(first: 10) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ScenarioStatus_scenario on Scenario {\n  id\n  currentState {\n    id\n    name\n  }\n  ...StateSelector_scenario\n}\n\nfragment StateAddButton_scenario on Scenario {\n  id\n}\n\nfragment StateSelector_scenario on Scenario {\n  id\n  possibleStates(first: 10) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '0c96f352e1fcbfe5f4f074d7ece60227';
export default node;
