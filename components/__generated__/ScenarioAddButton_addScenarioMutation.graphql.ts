/* tslint:disable */
/* eslint-disable */
/* @relayHash dfa38337f233a38951e92f4b3bac8535 */

import { ConcreteRequest } from "relay-runtime";
export type ScenarioAddButton_addScenarioMutationVariables = {};
export type ScenarioAddButton_addScenarioMutationResponse = {
    readonly addScenario: {
        readonly scenarioEdge: {
            readonly node: {
                readonly id: string;
                readonly name: string;
            };
            readonly cursor: string;
        };
        readonly scenario: {
            readonly id: string;
        };
    };
};
export type ScenarioAddButton_addScenarioMutation = {
    readonly response: ScenarioAddButton_addScenarioMutationResponse;
    readonly variables: ScenarioAddButton_addScenarioMutationVariables;
};



/*
mutation ScenarioAddButton_addScenarioMutation {
  addScenario(input: {}) {
    scenarioEdge {
      node {
        id
        name
      }
      cursor
    }
    scenario {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "addScenario",
            "storageKey": "addScenario(input:{})",
            "args": [
                {
                    "kind": "Literal",
                    "name": "input",
                    "value": {}
                }
            ],
            "concreteType": "AddScenarioResult",
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
                                (v0 /*: any*/),
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
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "scenario",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Scenario",
                    "plural": false,
                    "selections": [
                        (v0 /*: any*/)
                    ]
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "ScenarioAddButton_addScenarioMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": [],
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "ScenarioAddButton_addScenarioMutation",
            "argumentDefinitions": [],
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "ScenarioAddButton_addScenarioMutation",
            "id": null,
            "text": "mutation ScenarioAddButton_addScenarioMutation {\n  addScenario(input: {}) {\n    scenarioEdge {\n      node {\n        id\n        name\n      }\n      cursor\n    }\n    scenario {\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '94c4f7571f8149edcd496ef241d59690';
export default node;
