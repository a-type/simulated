/* tslint:disable */
/* eslint-disable */
/* @relayHash dae7ff2e02dc0af2bc0f8da43dd92b30 */

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
export type BodyMatcherEditWidget_setMatcherMutationVariables = {
    input: AddMappingMatcherInput;
};
export type BodyMatcherEditWidget_setMatcherMutationResponse = {
    readonly addMappingMatcher: {
        readonly mapping: {
            readonly matchers: ReadonlyArray<{
                readonly body?: string;
                readonly ignoreWhitespace?: boolean;
                readonly regex?: boolean;
            }>;
        };
    };
};
export type BodyMatcherEditWidget_setMatcherMutation = {
    readonly response: BodyMatcherEditWidget_setMatcherMutationResponse;
    readonly variables: BodyMatcherEditWidget_setMatcherMutationVariables;
};



/*
mutation BodyMatcherEditWidget_setMatcherMutation(
  $input: AddMappingMatcherInput!
) {
  addMappingMatcher(input: $input) {
    mapping {
      matchers {
        __typename
        ... on BodyMatcher {
          body
          ignoreWhitespace
          regex
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
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "regex",
                "args": null,
                "storageKey": null
            }
        ]
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "BodyMatcherEditWidget_setMatcherMutation",
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
            "name": "BodyMatcherEditWidget_setMatcherMutation",
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
            "name": "BodyMatcherEditWidget_setMatcherMutation",
            "id": null,
            "text": "mutation BodyMatcherEditWidget_setMatcherMutation(\n  $input: AddMappingMatcherInput!\n) {\n  addMappingMatcher(input: $input) {\n    mapping {\n      matchers {\n        __typename\n        ... on BodyMatcher {\n          body\n          ignoreWhitespace\n          regex\n        }\n      }\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'bdf737b93cb808ab1322ef0d071987ee';
export default node;
