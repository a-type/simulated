/* tslint:disable */
/* eslint-disable */
/* @relayHash c22b7df42facb17b90ebb827379b1b2f */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioListPaginationQueryVariables = {
    first?: number | null;
    after?: string | null;
};
export type ScenarioListPaginationQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"ScenarioList_viewer">;
    };
};
export type ScenarioListPaginationQuery = {
    readonly response: ScenarioListPaginationQueryResponse;
    readonly variables: ScenarioListPaginationQueryVariables;
};



/*
query ScenarioListPaginationQuery(
  $first: Int = 10
  $after: String
) {
  viewer {
    ...ScenarioList_viewer_2HEEH6
    id
  }
}

fragment ScenarioCard_scenario on Scenario {
  id
  name
  createdAt
}

fragment ScenarioList_viewer_2HEEH6 on Viewer {
  scenarios(first: $first, after: $after) {
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
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "after",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "after"
        } as any),
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
            "name": "ScenarioListPaginationQuery",
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
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "ScenarioListPaginationQuery",
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
            "name": "ScenarioListPaginationQuery",
            "id": null,
            "text": "query ScenarioListPaginationQuery(\n  $first: Int = 10\n  $after: String\n) {\n  viewer {\n    ...ScenarioList_viewer_2HEEH6\n    id\n  }\n}\n\nfragment ScenarioCard_scenario on Scenario {\n  id\n  name\n  createdAt\n}\n\nfragment ScenarioList_viewer_2HEEH6 on Viewer {\n  scenarios(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        ...ScenarioCard_scenario\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {
                "derivedFrom": "ScenarioList_viewer",
                "isRefetchableQuery": true
            }
        }
    } as any;
})();
(node as any).hash = '2ee062d0e212f15d97920fc9afa16c6b';
export default node;
