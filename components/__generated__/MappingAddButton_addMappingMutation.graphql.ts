/* tslint:disable */
/* eslint-disable */
/* @relayHash d5f8e48ecee738123354f7a7dcb6d37a */

import { ConcreteRequest } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "body" | "headers" | "methods" | "path" | "%future added value";
export type AddStateMappingInput = {
    stateId: string;
    mapping: AddMappingInput;
};
export type AddMappingInput = {
    priority: number;
};
export type MappingAddButton_addMappingMutationVariables = {
    input: AddStateMappingInput;
};
export type MappingAddButton_addMappingMutationResponse = {
    readonly addStateMapping: {
        readonly mappingEdge: {
            readonly node: {
                readonly id: string;
                readonly priority: number;
                readonly matchers: ReadonlyArray<{
                    readonly kind: MatcherKind;
                }>;
            };
            readonly cursor: string;
        };
    };
};
export type MappingAddButton_addMappingMutation = {
    readonly response: MappingAddButton_addMappingMutationResponse;
    readonly variables: MappingAddButton_addMappingMutationVariables;
};



/*
mutation MappingAddButton_addMappingMutation(
  $input: AddStateMappingInput!
) {
  addStateMapping(input: $input) {
    mappingEdge {
      node {
        id
        priority
        matchers {
          __typename
          kind
        }
      }
      cursor
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
        "name": "priority",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "MappingAddButton_addMappingMutation",
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
                                        (v3 /*: any*/),
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "matchers",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": null,
                                            "plural": true,
                                            "selections": [
                                                (v4 /*: any*/)
                                            ]
                                        }
                                    ]
                                },
                                (v5 /*: any*/)
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "MappingAddButton_addMappingMutation",
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
                                        (v3 /*: any*/),
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
                                                (v4 /*: any*/)
                                            ]
                                        }
                                    ]
                                },
                                (v5 /*: any*/)
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "MappingAddButton_addMappingMutation",
            "id": null,
            "text": "mutation MappingAddButton_addMappingMutation(\n  $input: AddStateMappingInput!\n) {\n  addStateMapping(input: $input) {\n    mappingEdge {\n      node {\n        id\n        priority\n        matchers {\n          __typename\n          kind\n        }\n      }\n      cursor\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '8a3f31649b2f9f26aeaa811dd82082b8';
export default node;
