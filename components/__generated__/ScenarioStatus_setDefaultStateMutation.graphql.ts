/* tslint:disable */
/* eslint-disable */
/* @relayHash fc1f813b7b46ccab271baf23ca581927 */

import { ConcreteRequest } from "relay-runtime";
export type SetScenarioDefaultStateInput = {
    scenarioId: string;
    stateId: string;
};
export type ScenarioStatus_setDefaultStateMutationVariables = {
    input: SetScenarioDefaultStateInput;
};
export type ScenarioStatus_setDefaultStateMutationResponse = {
    readonly setScenarioDefaultState: {
        readonly scenario: {
            readonly defaultState: {
                readonly id: string;
                readonly name: string;
            } | null;
            readonly currentState: {
                readonly id: string;
                readonly name: string;
            } | null;
        };
    };
};
export type ScenarioStatus_setDefaultStateMutation = {
    readonly response: ScenarioStatus_setDefaultStateMutationResponse;
    readonly variables: ScenarioStatus_setDefaultStateMutationVariables;
};



/*
mutation ScenarioStatus_setDefaultStateMutation(
  $input: SetScenarioDefaultStateInput!
) {
  setScenarioDefaultState(input: $input) {
    scenario {
      defaultState {
        id
        name
      }
      currentState {
        id
        name
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
            "type": "SetScenarioDefaultStateInput!",
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
    } as any), v3 = [
        (v2 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
        } as any)
    ], v4 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "defaultState",
        "storageKey": null,
        "args": null,
        "concreteType": "State",
        "plural": false,
        "selections": (v3 /*: any*/)
    } as any), v5 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "currentState",
        "storageKey": null,
        "args": null,
        "concreteType": "State",
        "plural": false,
        "selections": (v3 /*: any*/)
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "ScenarioStatus_setDefaultStateMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "setScenarioDefaultState",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SetScenarioDefaultStateResult",
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
                                (v4 /*: any*/),
                                (v5 /*: any*/)
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "ScenarioStatus_setDefaultStateMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "setScenarioDefaultState",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SetScenarioDefaultStateResult",
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
                                (v4 /*: any*/),
                                (v5 /*: any*/),
                                (v2 /*: any*/)
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "mutation",
            "name": "ScenarioStatus_setDefaultStateMutation",
            "id": null,
            "text": "mutation ScenarioStatus_setDefaultStateMutation(\n  $input: SetScenarioDefaultStateInput!\n) {\n  setScenarioDefaultState(input: $input) {\n    scenario {\n      defaultState {\n        id\n        name\n      }\n      currentState {\n        id\n        name\n      }\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'd99cf0f16b789209f4e9fc079d1de49c';
export default node;
