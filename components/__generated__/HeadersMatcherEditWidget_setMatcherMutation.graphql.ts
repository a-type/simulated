/* tslint:disable */
/* eslint-disable */
/* @relayHash 1f3de62cc3c4a095bb303b8da41ad66d */

import { ConcreteRequest } from "relay-runtime";
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
export type HeadersMatcherEditWidget_setMatcherMutationVariables = {
    input: AddMappingMatcherInput;
};
export type HeadersMatcherEditWidget_setMatcherMutationResponse = {
    readonly addMappingMatcher: {
        readonly mapping: {
            readonly matchers: ReadonlyArray<{
                readonly headers?: ReadonlyArray<{
                    readonly name: string;
                    readonly value: string | null;
                }>;
            }>;
        };
    };
};
export type HeadersMatcherEditWidget_setMatcherMutation = {
    readonly response: HeadersMatcherEditWidget_setMatcherMutationResponse;
    readonly variables: HeadersMatcherEditWidget_setMatcherMutationVariables;
};



/*
mutation HeadersMatcherEditWidget_setMatcherMutation(
  $input: AddMappingMatcherInput!
) {
  addMappingMatcher(input: $input) {
    mapping {
      matchers {
        __typename
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
            "name": "HeadersMatcherEditWidget_setMatcherMutation",
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
                                        (v2 /*: any*/)
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
            "name": "HeadersMatcherEditWidget_setMatcherMutation",
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
                                        (v2 /*: any*/)
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
            "name": "HeadersMatcherEditWidget_setMatcherMutation",
            "id": null,
            "text": "mutation HeadersMatcherEditWidget_setMatcherMutation(\n  $input: AddMappingMatcherInput!\n) {\n  addMappingMatcher(input: $input) {\n    mapping {\n      matchers {\n        __typename\n        ... on HeadersMatcher {\n          headers {\n            name\n            value\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '6b6338cf32becbaf94c8c960852bc8bb';
export default node;
