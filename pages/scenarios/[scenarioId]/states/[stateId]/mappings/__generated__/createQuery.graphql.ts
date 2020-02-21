/* tslint:disable */
/* eslint-disable */
/* @relayHash d98a17dc2fc96ca04a7ea02f78ef7bc2 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type createQueryVariables = {
    scenarioId: string;
    stateId: string;
};
export type createQueryResponse = {
    readonly viewer: {
        readonly scenario: {
            readonly " $fragmentRefs": FragmentRefs<"ScenarioLink_scenario" | "StateLink_scenario">;
        } | null;
        readonly state: {
            readonly " $fragmentRefs": FragmentRefs<"StateLink_state">;
        } | null;
    };
};
export type createQuery = {
    readonly response: createQueryResponse;
    readonly variables: createQueryVariables;
};



/*
query createQuery(
  $scenarioId: ID!
  $stateId: ID!
) {
  viewer {
    scenario(id: $scenarioId) {
      ...ScenarioLink_scenario
      ...StateLink_scenario
      id
    }
    state(id: $stateId) {
      ...StateLink_state
      id
    }
    id
  }
}

fragment ScenarioLink_scenario on Scenario {
  id
  name
}

fragment StateLink_scenario on Scenario {
  id
}

fragment StateLink_state on State {
  id
  name
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "scenarioId",
            "type": "ID!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "stateId",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "scenarioId"
        } as any)
    ], v2 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "stateId"
        } as any)
    ], v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v4 = [
        (v3 /*: any*/),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "createQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "viewer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "scenario",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "ScenarioLink_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateLink_scenario",
                                    "args": null
                                }
                            ]
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "State",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateLink_state",
                                    "args": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "createQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "viewer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "scenario",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": (v4 /*: any*/)
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "State",
                            "plural": false,
                            "selections": (v4 /*: any*/)
                        },
                        (v3 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "createQuery",
            "id": null,
            "text": "query createQuery(\n  $scenarioId: ID!\n  $stateId: ID!\n) {\n  viewer {\n    scenario(id: $scenarioId) {\n      ...ScenarioLink_scenario\n      ...StateLink_scenario\n      id\n    }\n    state(id: $stateId) {\n      ...StateLink_state\n      id\n    }\n    id\n  }\n}\n\nfragment ScenarioLink_scenario on Scenario {\n  id\n  name\n}\n\nfragment StateLink_scenario on Scenario {\n  id\n}\n\nfragment StateLink_state on State {\n  id\n  name\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '22aee4783fd12c66b53904683cd323a0';
export default node;
