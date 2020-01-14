/* tslint:disable */
/* eslint-disable */
/* @relayHash fe34f370857e23d19892e6c83cf533e4 */

import { ConcreteRequest } from "relay-runtime";
export type SetScenarioDetailsInput = {
    scenarioId: string;
    name?: string | null;
};
export type ScenarioDetails_updateScenarioMutationVariables = {
    input: SetScenarioDetailsInput;
};
export type ScenarioDetails_updateScenarioMutationResponse = {
    readonly setScenarioDetails: {
        readonly scenario: {
            readonly id: string;
            readonly name: string;
            readonly createdAt: string;
            readonly updatedAt: string;
        };
    };
};
export type ScenarioDetails_updateScenarioMutation = {
    readonly response: ScenarioDetails_updateScenarioMutationResponse;
    readonly variables: ScenarioDetails_updateScenarioMutationVariables;
};



/*
mutation ScenarioDetails_updateScenarioMutation(
  $input: SetScenarioDetailsInput!
) {
  setScenarioDetails(input: $input) {
    scenario {
      id
      name
      createdAt
      updatedAt
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "SetScenarioDetailsInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "setScenarioDetails",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "SetScenarioDetailsResult",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "scenario",
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
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "createdAt",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "updatedAt",
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
            "name": "ScenarioDetails_updateScenarioMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "ScenarioDetails_updateScenarioMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "ScenarioDetails_updateScenarioMutation",
            "id": null,
            "text": "mutation ScenarioDetails_updateScenarioMutation(\n  $input: SetScenarioDetailsInput!\n) {\n  setScenarioDetails(input: $input) {\n    scenario {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '6e4ba0d00fe4a259c234ff403921809c';
export default node;
