/* tslint:disable */
/* eslint-disable */
/* @relayHash ecfa231cdadc18a67e05ada3daa113f2 */

import { ConcreteRequest } from "relay-runtime";
export type MatcherKind = "Literal" | "%future added value";
export type ResponseBodyKind = "Template" | "%future added value";
export type AddStateMappingInput = {
    stateId: string;
    mapping: AddMappingInput;
};
export type AddMappingInput = {
    pathMatcher?: AddMatcherInput | null;
    response?: AddResponseInput | null;
    trigger?: AddTriggerInput | null;
    priority: number;
};
export type AddMatcherInput = {
    literal?: AddLiteralMatcherInput | null;
};
export type AddLiteralMatcherInput = {
    value: string;
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
export type AddMappingButton_addMappingMutationVariables = {
    input: AddStateMappingInput;
};
export type AddMappingButton_addMappingMutationResponse = {
    readonly addStateMapping: {
        readonly mappingEdge: {
            readonly node: {
                readonly id: string;
                readonly pathMatcher: {
                    readonly kind: MatcherKind;
                    readonly value?: string;
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
export type AddMappingButton_addMappingMutation = {
    readonly response: AddMappingButton_addMappingMutationResponse;
    readonly variables: AddMappingButton_addMappingMutationVariables;
};



/*
mutation AddMappingButton_addMappingMutation(
  $input: AddStateMappingInput!
) {
  addStateMapping(input: $input) {
    mappingEdge {
      node {
        id
        pathMatcher {
          __typename
          kind
          ... on LiteralMatcher {
            value
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
        "type": "LiteralMatcher",
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "value",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "priority",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "createdAt",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "updatedAt",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
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
            "name": "AddMappingButton_addMappingMutation",
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
                                            "name": "pathMatcher",
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
                                                        (v5 /*: any*/)
                                                    ]
                                                }
                                            ]
                                        },
                                        (v6 /*: any*/),
                                        (v7 /*: any*/),
                                        (v8 /*: any*/)
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
            "name": "AddMappingButton_addMappingMutation",
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
                                            "name": "pathMatcher",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": null,
                                            "plural": false,
                                            "selections": [
                                                (v9 /*: any*/),
                                                (v3 /*: any*/),
                                                (v4 /*: any*/)
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
                                                        (v9 /*: any*/),
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
                                                        (v5 /*: any*/),
                                                        (v2 /*: any*/)
                                                    ]
                                                }
                                            ]
                                        },
                                        (v6 /*: any*/),
                                        (v7 /*: any*/),
                                        (v8 /*: any*/)
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
            "name": "AddMappingButton_addMappingMutation",
            "id": null,
            "text": "mutation AddMappingButton_addMappingMutation(\n  $input: AddStateMappingInput!\n) {\n  addStateMapping(input: $input) {\n    mappingEdge {\n      node {\n        id\n        pathMatcher {\n          __typename\n          kind\n          ... on LiteralMatcher {\n            value\n          }\n        }\n        response {\n          body {\n            __typename\n            kind\n          }\n        }\n        trigger {\n          targetState {\n            name\n            id\n          }\n        }\n        priority\n        createdAt\n        updatedAt\n      }\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '3859cf407a82de50d727d9381747fb82';
export default node;
