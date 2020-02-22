/* tslint:disable */
/* eslint-disable */
/* @relayHash 0e358a38550134cc14775f5248a4f1e0 */

import { ConcreteRequest } from "relay-runtime";
export type BodyMatcherKind = "Literal" | "%future added value";
export type HeadersMatcherKind = "Literals" | "%future added value";
export type MethodMatcherKind = "Literals" | "%future added value";
export type PathMatcherKind = "Literal" | "%future added value";
export type ResponseBodyKind = "Template" | "%future added value";
export type AddStateMappingInput = {
    stateId: string;
    mapping: AddMappingInput;
};
export type AddMappingInput = {
    methodMatcher?: AddMethodMatcherInput | null;
    pathMatcher?: AddPathMatcherInput | null;
    bodyMatcher?: AddBodyMatcherInput | null;
    headersMatcher?: AddHeadersMatcherInput | null;
    response?: AddResponseInput | null;
    trigger?: AddTriggerInput | null;
    priority: number;
};
export type AddMethodMatcherInput = {
    literals?: AddLiteralsMethodMatcherInput | null;
};
export type AddLiteralsMethodMatcherInput = {
    values: Array<string>;
};
export type AddPathMatcherInput = {
    literal?: AddLiteralPathMatcherInput | null;
};
export type AddLiteralPathMatcherInput = {
    value: string;
};
export type AddBodyMatcherInput = {
    literal?: AddLiteralBodyMatcherInput | null;
};
export type AddLiteralBodyMatcherInput = {
    value: string;
};
export type AddHeadersMatcherInput = {
    literals?: AddLiteralsHeadersMatcherInput | null;
};
export type AddLiteralsHeadersMatcherInput = {
    values: Array<AddLiteralHeaderValueInput>;
};
export type AddLiteralHeaderValueInput = {
    name: string;
    value?: string | null;
};
export type AddResponseInput = {
    body: AddResponseBodyInput;
};
export type AddResponseBodyInput = {
    template?: AddTemplateResponseBodyInput | null;
};
export type AddTemplateResponseBodyInput = {
    value: string;
};
export type AddTriggerInput = {
    targetState: string;
};
export type create_addMappingMutationVariables = {
    input: AddStateMappingInput;
};
export type create_addMappingMutationResponse = {
    readonly addStateMapping: {
        readonly mappingEdge: {
            readonly node: {
                readonly id: string;
                readonly methodMatcher: {
                    readonly kind: MethodMatcherKind;
                    readonly values?: ReadonlyArray<string>;
                } | null;
                readonly pathMatcher: {
                    readonly kind: PathMatcherKind;
                    readonly value?: string;
                } | null;
                readonly bodyMatcher: {
                    readonly kind: BodyMatcherKind;
                    readonly value?: string;
                } | null;
                readonly headersMatcher: {
                    readonly kind: HeadersMatcherKind;
                    readonly values?: ReadonlyArray<{
                        readonly name: string;
                        readonly value: string | null;
                    }>;
                } | null;
                readonly response: {
                    readonly body: {
                        readonly kind: ResponseBodyKind;
                    };
                } | null;
                readonly trigger: {
                    readonly targetState: {
                        readonly name: string;
                    };
                } | null;
                readonly priority: number;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
        };
    };
};
export type create_addMappingMutation = {
    readonly response: create_addMappingMutationResponse;
    readonly variables: create_addMappingMutationVariables;
};



/*
mutation create_addMappingMutation(
  $input: AddStateMappingInput!
) {
  addStateMapping(input: $input) {
    mappingEdge {
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
      }
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "AddStateMappingInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "input",
            "variableName": "input"
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
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
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
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
        "args": null,
        "storageKey": null
    } as any), v6 = [
        (v5 /*: any*/)
    ], v7 = ({
        "kind": "InlineFragment",
        "type": "LiteralPathMatcher",
        "selections": (v6 /*: any*/)
    } as any), v8 = ({
        "kind": "InlineFragment",
        "type": "LiteralBodyMatcher",
        "selections": (v6 /*: any*/)
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
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
                    (v9 /*: any*/),
                    (v5 /*: any*/)
                ]
            }
        ]
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "priority",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
    } as any), v13 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedAt",
        "args": null,
        "storageKey": null
    } as any), v14 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "create_addMappingMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "addStateMapping",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "AddStateMappingResult",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "mappingEdge",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "StateMappingEdge",
                            "plural": false,
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
                                            "name": "methodMatcher",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": null,
                                            "plural": false,
                                            "selections": [
                                                (v3 /*: any*/),
                                                (v4 /*: any*/)
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
                                                (v3 /*: any*/),
                                                (v7 /*: any*/)
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
                                                (v3 /*: any*/),
                                                (v8 /*: any*/)
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
                                                (v3 /*: any*/),
                                                (v10 /*: any*/)
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
                                                        (v3 /*: any*/)
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
                                                        (v9 /*: any*/)
                                                    ]
                                                }
                                            ]
                                        },
                                        (v11 /*: any*/),
                                        (v12 /*: any*/),
                                        (v13 /*: any*/)
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "create_addMappingMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "addStateMapping",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "AddStateMappingResult",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "mappingEdge",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "StateMappingEdge",
                            "plural": false,
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
                                            "name": "methodMatcher",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": null,
                                            "plural": false,
                                            "selections": [
                                                (v14 /*: any*/),
                                                (v3 /*: any*/),
                                                (v4 /*: any*/)
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
                                                (v14 /*: any*/),
                                                (v3 /*: any*/),
                                                (v7 /*: any*/)
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
                                                (v14 /*: any*/),
                                                (v3 /*: any*/),
                                                (v8 /*: any*/)
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
                                                (v14 /*: any*/),
                                                (v3 /*: any*/),
                                                (v10 /*: any*/)
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
                                                        (v14 /*: any*/),
                                                        (v3 /*: any*/)
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
                                                        (v9 /*: any*/),
                                                        (v2 /*: any*/)
                                                    ]
                                                }
                                            ]
                                        },
                                        (v11 /*: any*/),
                                        (v12 /*: any*/),
                                        (v13 /*: any*/)
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "create_addMappingMutation",
            "id": null,
            "text": "mutation create_addMappingMutation(\n  $input: AddStateMappingInput!\n) {\n  addStateMapping(input: $input) {\n    mappingEdge {\n      node {\n        id\n        methodMatcher {\n          __typename\n          kind\n          ... on LiteralsMethodMatcher {\n            values\n          }\n        }\n        pathMatcher {\n          __typename\n          kind\n          ... on LiteralPathMatcher {\n            value\n          }\n        }\n        bodyMatcher {\n          __typename\n          kind\n          ... on LiteralBodyMatcher {\n            value\n          }\n        }\n        headersMatcher {\n          __typename\n          kind\n          ... on LiteralsHeadersMatcher {\n            values {\n              name\n              value\n            }\n          }\n        }\n        response {\n          body {\n            __typename\n            kind\n          }\n        }\n        trigger {\n          targetState {\n            name\n            id\n          }\n        }\n        priority\n        createdAt\n        updatedAt\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '8621c2b416986cd00d7d8d10b2169e85';
export default node;
