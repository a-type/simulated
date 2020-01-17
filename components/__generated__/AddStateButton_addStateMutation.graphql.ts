/* tslint:disable */
/* eslint-disable */
/* @relayHash fdc63971e4ff429030f54cdfb81ffd47 */

import { ConcreteRequest } from "relay-runtime";
export type AddScenarioStateInput = {
    scenarioId: string;
    state: AddStateInput;
};
export type AddStateInput = {
    name: string;
};
export type AddStateButton_addStateMutationVariables = {
    input: AddScenarioStateInput;
};
export type AddStateButton_addStateMutationResponse = {
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
export type AddStateButton_addStateMutation = {
    readonly response: AddStateButton_addStateMutationResponse;
    readonly variables: AddStateButton_addStateMutationVariables;
};



/*
mutation AddStateButton_addStateMutation(
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
            "name": "AddStateButton_addStateMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "AddStateButton_addStateMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "AddStateButton_addStateMutation",
            "id": null,
            "text": "mutation AddStateButton_addStateMutation(\n  $input: AddScenarioStateInput!\n) {\n  addScenarioState(input: $input) {\n    stateEdge {\n      node {\n        id\n        name\n      }\n      cursor\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'b603cf441efd8c2ca9b49eb95b8d3c9a';
export default node;
