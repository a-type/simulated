/* tslint:disable */
/* eslint-disable */
/* @relayHash 2e389d8e3e15f41d1bc2731c05446de6 */

import { ConcreteRequest } from "relay-runtime";
export type ScenarioIdQueryVariables = {
    scenarioId: string;
};
export type ScenarioIdQueryResponse = {
    readonly viewer: {
        readonly scenario: {
            readonly id: string;
            readonly name: string;
        } | null;
    };
};
export type ScenarioIdQuery = {
    readonly response: ScenarioIdQueryResponse;
    readonly variables: ScenarioIdQueryVariables;
};



/*
query ScenarioIdQuery(
  $scenarioId: ID!
) {
  viewer {
    scenario(id: $scenarioId) {
      id
      name
    }
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "scenarioId",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "scenario",
        "storageKey": null,
        "args": [
            {
                "kind": "Variable",
                "name": "id",
                "variableName": "scenarioId"
            }
        ],
        "concreteType": "Scenario",
        "plural": false,
        "selections": [
            (v1 /*: any*/),
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
            }
        ]
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "ScenarioIdQuery",
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
                        (v2 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "ScenarioIdQuery",
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
                        (v2 /*: any*/),
                        (v1 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "ScenarioIdQuery",
            "id": null,
            "text": "query ScenarioIdQuery(\n  $scenarioId: ID!\n) {\n  viewer {\n    scenario(id: $scenarioId) {\n      id\n      name\n    }\n    id\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '82b409847ad5c0dcae1b274235ffa809';
export default node;
