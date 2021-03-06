/* tslint:disable */
/* eslint-disable */
/* @relayHash 47278c34f6be71cc6f5ba20f1ab52dd4 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pages_indexQueryVariables = {};
export type pages_indexQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"ScenarioList_viewer" | "ScenarioAddButton_viewer">;
    };
};
export type pages_indexQuery = {
    readonly response: pages_indexQueryResponse;
    readonly variables: pages_indexQueryVariables;
};



/*
query pages_indexQuery {
  viewer {
    ...ScenarioList_viewer
    ...ScenarioAddButton_viewer
    id
  }
}

fragment ScenarioAddButton_viewer on Viewer {
  id
}

fragment ScenarioCard_scenario on Scenario {
  id
  name
  createdAt
}

fragment ScenarioList_viewer on Viewer {
  scenarios(first: 10) {
    edges {
      node {
        id
        ...ScenarioCard_scenario
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
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any)
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "pages_indexQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": [],
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
                            "kind": "FragmentSpread",
                            "name": "ScenarioList_viewer",
                            "args": null
                        },
                        {
                            "kind": "FragmentSpread",
                            "name": "ScenarioAddButton_viewer",
                            "args": null
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "pages_indexQuery",
            "argumentDefinitions": [],
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
                            "name": "scenarios",
                            "storageKey": "scenarios(first:10)",
                            "args": (v0 /*: any*/),
                            "concreteType": "ScenarioConnection",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "ScenarioEdge",
                                    "plural": true,
                                    "selections": [
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "node",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "Scenario",
                                            "plural": false,
                                            "selections": [
                                                (v1 /*: any*/),
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "name",
                                                    "args": null,
                                                    "storageKey": null
                                                },
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
                                    "concreteType": "ScenarioPageInfo",
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
                            "name": "scenarios",
                            "args": (v0 /*: any*/),
                            "handle": "connection",
                            "key": "ScenarioList_scenarios",
                            "filters": null
                        },
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "pages_indexQuery",
            "id": null,
            "text": "query pages_indexQuery {\n  viewer {\n    ...ScenarioList_viewer\n    ...ScenarioAddButton_viewer\n    id\n  }\n}\n\nfragment ScenarioAddButton_viewer on Viewer {\n  id\n}\n\nfragment ScenarioCard_scenario on Scenario {\n  id\n  name\n  createdAt\n}\n\nfragment ScenarioList_viewer on Viewer {\n  scenarios(first: 10) {\n    edges {\n      node {\n        id\n        ...ScenarioCard_scenario\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'd5bcbc8398debdf1b5b9a792560454dd';
export default node;
