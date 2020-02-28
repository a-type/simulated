/* tslint:disable */
/* eslint-disable */
/* @relayHash 864e25a6f6c67f63ccfba02a27140251 */

import { ConcreteRequest } from "relay-runtime";
export type DeleteScenarioInput = {
    scenarioId: string;
};
export type ScenarioDeleteButton_deleteScenarioMutationVariables = {
    input: DeleteScenarioInput;
};
export type ScenarioDeleteButton_deleteScenarioMutationResponse = {
    readonly deleteScenario: {
        readonly scenarioEdge: {
            readonly node: {
                readonly id: string;
            };
            readonly cursor: string;
        };
    };
};
export type ScenarioDeleteButton_deleteScenarioMutation = {
    readonly response: ScenarioDeleteButton_deleteScenarioMutationResponse;
    readonly variables: ScenarioDeleteButton_deleteScenarioMutationVariables;
};



/*
mutation ScenarioDeleteButton_deleteScenarioMutation(
  $input: DeleteScenarioInput!
) {
  deleteScenario(input: $input) {
    scenarioEdge {
      node {
        id
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
            "type": "DeleteScenarioInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "deleteScenario",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "DeleteScenarioResult",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "scenarioEdge",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ScenarioEdge",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "id",
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
            "name": "ScenarioDeleteButton_deleteScenarioMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "ScenarioDeleteButton_deleteScenarioMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "ScenarioDeleteButton_deleteScenarioMutation",
            "id": null,
            "text": "mutation ScenarioDeleteButton_deleteScenarioMutation(\n  $input: DeleteScenarioInput!\n) {\n  deleteScenario(input: $input) {\n    scenarioEdge {\n      node {\n        id\n      }\n      cursor\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '1c3ea0472d61faa96d5389ce33663801';
export default node;
