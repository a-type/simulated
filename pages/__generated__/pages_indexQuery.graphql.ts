/* tslint:disable */
/* eslint-disable */
/* @relayHash 69c1a033efd2acc7301ac15a0233b89b */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pages_indexQueryVariables = {
    first?: number | null;
};
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
query pages_indexQuery(
  $first: Int = 10
) {
  viewer {
    ...ScenarioList_viewer_3ASum4
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

fragment ScenarioList_viewer_3ASum4 on Viewer {
  scenarios(first: $first) {
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
            "kind": "LocalArgument",
            "name": "first",
            "type": "Int",
            "defaultValue": 10
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "first"
        } as any)
    ], v2 = ({
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
                            "kind": "FragmentSpread",
                            "name": "ScenarioList_viewer",
                            "args": (v1 /*: any*/)
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
                            "name": "scenarios",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
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
                                                (v2 /*: any*/),
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
                            "args": (v1 /*: any*/),
                            "handle": "connection",
                            "key": "ScenarioList_scenarios",
                            "filters": null
                        },
                        (v2 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "pages_indexQuery",
            "id": null,
            "text": "query pages_indexQuery(\n  $first: Int = 10\n) {\n  viewer {\n    ...ScenarioList_viewer_3ASum4\n    ...ScenarioAddButton_viewer\n    id\n  }\n}\n\nfragment ScenarioAddButton_viewer on Viewer {\n  id\n}\n\nfragment ScenarioCard_scenario on Scenario {\n  id\n  name\n  createdAt\n}\n\nfragment ScenarioList_viewer_3ASum4 on Viewer {\n  scenarios(first: $first) {\n    edges {\n      node {\n        id\n        ...ScenarioCard_scenario\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '4a9e0eb56ed37831e00798e3cb185d90';
export default node;
