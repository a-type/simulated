/* tslint:disable */
/* eslint-disable */
/* @relayHash d38c2e6804da53b219c94e9b4b930bb7 */

import { ConcreteRequest } from "relay-runtime";
export type DeleteScenarioInput = {
    scenarioId: string;
};
export type DeleteScenarioButton_deleteScenarioMutationVariables = {
    input: DeleteScenarioInput;
};
export type DeleteScenarioButton_deleteScenarioMutationResponse = {
    readonly deleteScenario: {
        readonly scenarioEdge: {
            readonly node: {
                readonly id: string;
            };
            readonly cursor: string;
        };
    };
};
export type DeleteScenarioButton_deleteScenarioMutation = {
    readonly response: DeleteScenarioButton_deleteScenarioMutationResponse;
    readonly variables: DeleteScenarioButton_deleteScenarioMutationVariables;
};



/*
mutation DeleteScenarioButton_deleteScenarioMutation(
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
            "name": "DeleteScenarioButton_deleteScenarioMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "DeleteScenarioButton_deleteScenarioMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "DeleteScenarioButton_deleteScenarioMutation",
            "id": null,
            "text": "mutation DeleteScenarioButton_deleteScenarioMutation(\n  $input: DeleteScenarioInput!\n) {\n  deleteScenario(input: $input) {\n    scenarioEdge {\n      node {\n        id\n      }\n      cursor\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '46efaa5c564facf0e0dffdfa193a524d';
export default node;
