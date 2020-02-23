/* tslint:disable */
/* eslint-disable */
/* @relayHash 1cbc1bc76c5d40bec40812b567765ca6 */

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
export type AddMatcherWidget_addMatcherMutationVariables = {
    input: AddMappingMatcherInput;
};
export type AddMatcherWidget_addMatcherMutationResponse = {
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
export type AddMatcherWidget_addMatcherMutation = {
    readonly response: AddMatcherWidget_addMatcherMutationResponse;
    readonly variables: AddMatcherWidget_addMatcherMutationVariables;
};



/*
mutation AddMatcherWidget_addMatcherMutation(
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
            "name": "AddMatcherWidget_addMatcherMutation",
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
            "name": "AddMatcherWidget_addMatcherMutation",
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
            "name": "AddMatcherWidget_addMatcherMutation",
            "id": null,
            "text": "mutation AddMatcherWidget_addMatcherMutation(\n  $input: AddMappingMatcherInput!\n) {\n  addMappingMatcher(input: $input) {\n    mapping {\n      matchers {\n        __typename\n        kind\n        ... on MethodsMatcher {\n          methods\n        }\n        ... on PathMatcher {\n          path\n          regex\n        }\n        ... on BodyMatcher {\n          body\n          ignoreWhitespace\n          regex\n        }\n        ... on HeadersMatcher {\n          headers {\n            name\n            value\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'cfc9d1acd03441b2fc07359b0c45f9aa';
export default node;
