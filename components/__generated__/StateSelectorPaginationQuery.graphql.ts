/* tslint:disable */
/* eslint-disable */
/* @relayHash 3eeb29b0660a2ecc072d43d282e18ff0 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateSelectorPaginationQueryVariables = {
    first?: number | null;
    after?: string | null;
    id: string;
};
export type StateSelectorPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"StateSelector_scenario">;
    } | null;
};
export type StateSelectorPaginationQuery = {
    readonly response: StateSelectorPaginationQueryResponse;
    readonly variables: StateSelectorPaginationQueryVariables;
};



/*
query StateSelectorPaginationQuery(
  $first: Int = 10
  $after: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...StateSelector_scenario_2HEEH6
    id
  }
}

fragment StateSelector_scenario_2HEEH6 on Scenario {
  id
  possibleStates(first: $first, after: $after) {
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
            "name": "first",
            "type": "Int",
            "defaultValue": 10
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "after",
            "type": "String",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "id",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
        } as any)
    ], v2 = [
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
    ], v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
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
            "name": "StateSelectorPaginationQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "StateSelector_scenario",
                            "args": (v2 /*: any*/)
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "StateSelectorPaginationQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        {
                            "kind": "InlineFragment",
                            "type": "Scenario",
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "possibleStates",
                                    "storageKey": null,
                                    "args": (v2 /*: any*/),
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
                                                        (v4 /*: any*/),
                                                        {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "name": "name",
                                                            "args": null,
                                                            "storageKey": null
                                                        },
                                                        (v3 /*: any*/)
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
                                    "args": (v2 /*: any*/),
                                    "handle": "connection",
                                    "key": "StateSelector_possibleStates",
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
            "name": "StateSelectorPaginationQuery",
            "id": null,
            "text": "query StateSelectorPaginationQuery(\n  $first: Int = 10\n  $after: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...StateSelector_scenario_2HEEH6\n    id\n  }\n}\n\nfragment StateSelector_scenario_2HEEH6 on Scenario {\n  id\n  possibleStates(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {
                "derivedFrom": "StateSelector_scenario",
                "isRefetchableQuery": true
            }
        }
    } as any;
})();
(node as any).hash = '46fdcb95c3d37d0186dac7f69ba4038a';
export default node;
