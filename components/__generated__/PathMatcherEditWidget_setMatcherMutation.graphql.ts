/* tslint:disable */
/* eslint-disable */
/* @relayHash 06695ece78c652845b3b36c9ce778155 */

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
export type PathMatcherEditWidget_setMatcherMutationVariables = {
    input: AddMappingMatcherInput;
};
export type PathMatcherEditWidget_setMatcherMutationResponse = {
    readonly addMappingMatcher: {
        readonly mapping: {
            readonly matchers: ReadonlyArray<{
                readonly path?: string;
                readonly regex?: boolean;
            }>;
        };
    };
};
export type PathMatcherEditWidget_setMatcherMutation = {
    readonly response: PathMatcherEditWidget_setMatcherMutationResponse;
    readonly variables: PathMatcherEditWidget_setMatcherMutationVariables;
};



/*
mutation PathMatcherEditWidget_setMatcherMutation(
  $input: AddMappingMatcherInput!
) {
  addMappingMatcher(input: $input) {
    mapping {
      matchers {
        __typename
        ... on PathMatcher {
          path
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
        "type": "PathMatcher",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "path",
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
            "name": "PathMatcherEditWidget_setMatcherMutation",
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
            "name": "PathMatcherEditWidget_setMatcherMutation",
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
            "name": "PathMatcherEditWidget_setMatcherMutation",
            "id": null,
            "text": "mutation PathMatcherEditWidget_setMatcherMutation(\n  $input: AddMappingMatcherInput!\n) {\n  addMappingMatcher(input: $input) {\n    mapping {\n      matchers {\n        __typename\n        ... on PathMatcher {\n          path\n          regex\n        }\n      }\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '5a40c0ea0f00df8a930c82126310abc7';
export default node;
