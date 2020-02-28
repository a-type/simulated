/* tslint:disable */
/* eslint-disable */
/* @relayHash b95fc070eb79957d7a6b4a5235aafb09 */

import { ConcreteRequest } from "relay-runtime";
export type AddScenarioStateInput = {
    scenarioId: string;
    state: AddStateInput;
};
export type AddStateInput = {
    name: string;
};
export type StateAddButton_addStateMutationVariables = {
    input: AddScenarioStateInput;
};
export type StateAddButton_addStateMutationResponse = {
    readonly addScenarioState: {
        readonly stateEdge: {
            readonly node: {
                readonly id: string;
                readonly name: string;
            };
            readonly cursor: string;
        };
    };
};
export type StateAddButton_addStateMutation = {
    readonly response: StateAddButton_addStateMutationResponse;
    readonly variables: StateAddButton_addStateMutationVariables;
};



/*
mutation StateAddButton_addStateMutation(
  $input: AddScenarioStateInput!
) {
  addScenarioState(input: $input) {
    stateEdge {
      node {
        id
        name
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
            "type": "AddScenarioStateInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "addScenarioState",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "AddScenarioStateResult",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stateEdge",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ScenarioStateEdge",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "State",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "id",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "name",
                                    "args": null,
                                    "storageKey": null
                                }
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
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "StateAddButton_addStateMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "StateAddButton_addStateMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "StateAddButton_addStateMutation",
            "id": null,
            "text": "mutation StateAddButton_addStateMutation(\n  $input: AddScenarioStateInput!\n) {\n  addScenarioState(input: $input) {\n    stateEdge {\n      node {\n        id\n        name\n      }\n      cursor\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '8dfd83263dc127baaf09a94b728673af';
export default node;
