/* tslint:disable */
/* eslint-disable */
/* @relayHash 7750dd2cf2a7b79f8fd721c9c9666452 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateMappingsPaginationQueryVariables = {
    first?: number | null;
    after?: string | null;
    id: string;
};
export type StateMappingsPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"StateMappings_state">;
    } | null;
};
export type StateMappingsPaginationQuery = {
    readonly response: StateMappingsPaginationQueryResponse;
    readonly variables: StateMappingsPaginationQueryVariables;
};



/*
query StateMappingsPaginationQuery(
  $first: Int = 10
  $after: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...StateMappings_state_2HEEH6
    id
  }
}

fragment MappingLink_mapping on Mapping {
  id
}

fragment MappingLink_state on State {
  id
  name
}

fragment StateMappings_state_2HEEH6 on State {
  id
  mappings(first: $first, after: $after) {
    edges {
      node {
        id
        matchers {
          __typename
          kind
          ... on MethodsMatcher {
            methods
          }
          ... on PathMatcher {
            path
            regex
          }
          ... on BodyMatcher {
            body
            ignoreWhitespace
            regex
          }
          ... on HeadersMatcher {
            headers {
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
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "regex",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "StateMappingsPaginationQuery",
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
                            "name": "StateMappings_state",
                            "args": (v2 /*: any*/)
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "StateMappingsPaginationQuery",
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
                            "type": "State",
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "mappings",
                                    "storageKey": null,
                                    "args": (v2 /*: any*/),
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
                                                        (v4 /*: any*/),
                                                        {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "name": "matchers",
                                                            "storageKey": null,
                                                            "args": null,
                                                            "concreteType": null,
                                                            "plural": true,
                                                            "selections": [
                                                                (v3 /*: any*/),
                                                                (v5 /*: any*/),
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "MethodsMatcher",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "name": "methods",
                                                                            "args": null,
                                                                            "storageKey": null
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "PathMatcher",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "name": "path",
                                                                            "args": null,
                                                                            "storageKey": null
                                                                        },
                                                                        (v6 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "BodyMatcher",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "name": "body",
                                                                            "args": null,
                                                                            "storageKey": null
                                                                        },
                                                                        {
                                                                            "kind": "ScalarField",
                                                                            "alias": null,
                                                                            "name": "ignoreWhitespace",
                                                                            "args": null,
                                                                            "storageKey": null
                                                                        },
                                                                        (v6 /*: any*/)
                                                                    ]
                                                                },
                                                                {
                                                                    "kind": "InlineFragment",
                                                                    "type": "HeadersMatcher",
                                                                    "selections": [
                                                                        {
                                                                            "kind": "LinkedField",
                                                                            "alias": null,
                                                                            "name": "headers",
                                                                            "storageKey": null,
                                                                            "args": null,
                                                                            "concreteType": "HeaderKeyValuePair",
                                                                            "plural": true,
                                                                            "selections": [
                                                                                (v7 /*: any*/),
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
                                                                        (v3 /*: any*/),
                                                                        (v5 /*: any*/)
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
                                                                        (v7 /*: any*/),
                                                                        (v4 /*: any*/)
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
                                    "args": (v2 /*: any*/),
                                    "handle": "connection",
                                    "key": "StateMappings_mappings",
                                    "filters": null
                                },
                                (v7 /*: any*/)
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "StateMappingsPaginationQuery",
            "id": null,
            "text": "query StateMappingsPaginationQuery(\n  $first: Int = 10\n  $after: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...StateMappings_state_2HEEH6\n    id\n  }\n}\n\nfragment MappingLink_mapping on Mapping {\n  id\n}\n\nfragment MappingLink_state on State {\n  id\n  name\n}\n\nfragment StateMappings_state_2HEEH6 on State {\n  id\n  mappings(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        matchers {\n          __typename\n          kind\n          ... on MethodsMatcher {\n            methods\n          }\n          ... on PathMatcher {\n            path\n            regex\n          }\n          ... on BodyMatcher {\n            body\n            ignoreWhitespace\n            regex\n          }\n          ... on HeadersMatcher {\n            headers {\n              name\n              value\n            }\n          }\n        }\n        response {\n          body {\n            __typename\n            kind\n          }\n        }\n        trigger {\n          targetState {\n            name\n            id\n          }\n        }\n        priority\n        createdAt\n        updatedAt\n        ...MappingLink_mapping\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...MappingLink_state\n}\n",
            "metadata": {
                "derivedFrom": "StateMappings_state",
                "isRefetchableQuery": true
            }
        }
    } as any;
})();
(node as any).hash = 'b787c742be42d03af85aac3cfd17a666';
export default node;
