/* tslint:disable */
/* eslint-disable */
/* @relayHash 16897029e4c7943de6ac3c38624a3d0c */

import { ConcreteRequest } from "relay-runtime";
export type AddScenarioButton_addScenarioMutationVariables = {};
export type AddScenarioButton_addScenarioMutationResponse = {
    readonly createScenario: {
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
export type AddScenarioButton_addScenarioMutation = {
    readonly response: AddScenarioButton_addScenarioMutationResponse;
    readonly variables: AddScenarioButton_addScenarioMutationVariables;
};



/*
mutation AddScenarioButton_addScenarioMutation {
  createScenario(input: {}) {
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
            "name": "createScenario",
            "storageKey": "createScenario(input:{})",
            "args": [
                {
                    "kind": "Literal",
                    "name": "input",
                    "value": {}
                }
            ],
            "concreteType": "CreateScenarioResult",
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
            "name": "AddScenarioButton_addScenarioMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": [],
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "AddScenarioButton_addScenarioMutation",
            "argumentDefinitions": [],
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "AddScenarioButton_addScenarioMutation",
            "id": null,
            "text": "mutation AddScenarioButton_addScenarioMutation {\n  createScenario(input: {}) {\n    scenarioEdge {\n      node {\n        id\n        name\n      }\n      cursor\n    }\n    scenario {\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'f42e78574055aa1fa23372cc5c23d7bd';
export default node;
