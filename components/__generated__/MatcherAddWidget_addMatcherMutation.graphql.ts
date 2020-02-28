/* tslint:disable */
/* eslint-disable */
/* @relayHash 80f2ba496c305646c60f26e24d6da562 */

import { ConcreteRequest } from "relay-runtime";
export type MatcherKind = "body" | "headers" | "methods" | "path" | "%future added value";
export type AddMappingMatcherInput = {
    mappingId: string;
    matcher: AddMatcherInput;
};
export type AddMatcherInput = {
    methods?: AddMethodsMatcherInput | null;
    path?: AddPathMatcherInput | null;
    body?: AddBodyMatcherInput | null;
    headers?: AddHeadersMatcherInput | null;
};
export type AddMethodsMatcherInput = {
    methods: Array<string>;
};
export type AddPathMatcherInput = {
    path: string;
    regex?: boolean | null;
};
export type AddBodyMatcherInput = {
    body: string;
    ignoreWhitespace?: boolean | null;
    regex?: boolean | null;
};
export type AddHeadersMatcherInput = {
    headers: Array<AddHeaderNameValuePairInput>;
};
export type AddHeaderNameValuePairInput = {
    name: string;
    value?: string | null;
};
export type MatcherAddWidget_addMatcherMutationVariables = {
    input: AddMappingMatcherInput;
};
export type MatcherAddWidget_addMatcherMutationResponse = {
    readonly addMappingMatcher: {
        readonly mapping: {
            readonly matchers: ReadonlyArray<{
                readonly kind: MatcherKind;
                readonly methods?: ReadonlyArray<string>;
                readonly path?: string;
                readonly regex?: boolean;
                readonly body?: string;
                readonly ignoreWhitespace?: boolean;
                readonly headers?: ReadonlyArray<{
                    readonly name: string;
                    readonly value: string | null;
                }>;
            }>;
        };
    };
};
export type MatcherAddWidget_addMatcherMutation = {
    readonly response: MatcherAddWidget_addMatcherMutationResponse;
    readonly variables: MatcherAddWidget_addMatcherMutationVariables;
};



/*
mutation MatcherAddWidget_addMatcherMutation(
  $input: AddMappingMatcherInput!
) {
  addMappingMatcher(input: $input) {
    mapping {
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
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "AddMappingMatcherInput!",
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
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
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
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "regex",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
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
            (v4 /*: any*/)
        ]
    } as any), v6 = ({
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
            (v4 /*: any*/)
        ]
    } as any), v7 = ({
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
                        "name": "value",
                        "args": null,
                        "storageKey": null
                    }
                ]
            }
        ]
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "MatcherAddWidget_addMatcherMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "addMappingMatcher",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "AddMappingMatcherResult",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "mapping",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Mapping",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "matchers",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": null,
                                    "plural": true,
                                    "selections": [
                                        (v2 /*: any*/),
                                        (v3 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/)
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
            "name": "MatcherAddWidget_addMatcherMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "addMappingMatcher",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "AddMappingMatcherResult",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "mapping",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Mapping",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "matchers",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": null,
                                    "plural": true,
                                    "selections": [
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "__typename",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v2 /*: any*/),
                                        (v3 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/)
                                    ]
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "id",
                                    "args": null,
                                    "storageKey": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "MatcherAddWidget_addMatcherMutation",
            "id": null,
            "text": "mutation MatcherAddWidget_addMatcherMutation(\n  $input: AddMappingMatcherInput!\n) {\n  addMappingMatcher(input: $input) {\n    mapping {\n      matchers {\n        __typename\n        kind\n        ... on MethodsMatcher {\n          methods\n        }\n        ... on PathMatcher {\n          path\n          regex\n        }\n        ... on BodyMatcher {\n          body\n          ignoreWhitespace\n          regex\n        }\n        ... on HeadersMatcher {\n          headers {\n            name\n            value\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'feda9e657a1c9c2b884dd3b4e1613a9f';
export default node;
