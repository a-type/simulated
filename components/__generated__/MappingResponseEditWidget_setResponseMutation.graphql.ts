/* tslint:disable */
/* eslint-disable */
/* @relayHash 494ac2220eb64a3d1312f8acf29e6bd8 */

import { ConcreteRequest } from "relay-runtime";
export type ResponseBodyKind = "template" | "%future added value";
export type SetMappingResponseInput = {
    mappingId: string;
    response: AddResponseInput;
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
export type MappingResponseEditWidget_setResponseMutationVariables = {
    input: SetMappingResponseInput;
};
export type MappingResponseEditWidget_setResponseMutationResponse = {
    readonly setMappingResponse: {
        readonly mapping: {
            readonly response: {
                readonly body: {
                    readonly kind: ResponseBodyKind;
                    readonly value?: string;
                };
            } | null;
        };
    };
};
export type MappingResponseEditWidget_setResponseMutation = {
    readonly response: MappingResponseEditWidget_setResponseMutationResponse;
    readonly variables: MappingResponseEditWidget_setResponseMutationVariables;
};



/*
mutation MappingResponseEditWidget_setResponseMutation(
  $input: SetMappingResponseInput!
) {
  setMappingResponse(input: $input) {
    mapping {
      response {
        body {
          __typename
          kind
          ... on TemplateResponseBody {
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
            "type": "SetMappingResponseInput!",
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
        "type": "TemplateResponseBody",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "value",
                "args": null,
                "storageKey": null
            }
        ]
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "MappingResponseEditWidget_setResponseMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "setMappingResponse",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SetMappingResponseResult",
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
                                                (v2 /*: any*/),
                                                (v3 /*: any*/)
                                            ]
                                        }
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
            "name": "MappingResponseEditWidget_setResponseMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "setMappingResponse",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SetMappingResponseResult",
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
                                                {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "__typename",
                                                    "args": null,
                                                    "storageKey": null
                                                },
                                                (v2 /*: any*/),
                                                (v3 /*: any*/)
                                            ]
                                        }
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
            "name": "MappingResponseEditWidget_setResponseMutation",
            "id": null,
            "text": "mutation MappingResponseEditWidget_setResponseMutation(\n  $input: SetMappingResponseInput!\n) {\n  setMappingResponse(input: $input) {\n    mapping {\n      response {\n        body {\n          __typename\n          kind\n          ... on TemplateResponseBody {\n            value\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '9459ad03a34f9b7714b1fc74ef25d3d6';
export default node;
