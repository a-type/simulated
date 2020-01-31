/* tslint:disable */
/* eslint-disable */
/* @relayHash 0e95f6ddd518d77910344cd12c882867 */

import { ConcreteRequest } from "relay-runtime";
export type SetStateDetailsInput = {
    stateId: string;
    name?: string | null;
};
export type StateDetails_updateStateMutationVariables = {
    input: SetStateDetailsInput;
};
export type StateDetails_updateStateMutationResponse = {
    readonly setStateDetails: {
        readonly state: {
            readonly id: string;
            readonly name: string;
            readonly createdAt: string;
            readonly updatedAt: string;
        };
    };
};
export type StateDetails_updateStateMutation = {
    readonly response: StateDetails_updateStateMutationResponse;
    readonly variables: StateDetails_updateStateMutationVariables;
};



/*
mutation StateDetails_updateStateMutation(
  $input: SetStateDetailsInput!
) {
  setStateDetails(input: $input) {
    state {
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
            "type": "SetStateDetailsInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "setStateDetails",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "SetStateDetailsResult",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "state",
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
            "name": "StateDetails_updateStateMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "StateDetails_updateStateMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "StateDetails_updateStateMutation",
            "id": null,
            "text": "mutation StateDetails_updateStateMutation(\n  $input: SetStateDetailsInput!\n) {\n  setStateDetails(input: $input) {\n    state {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '982be4bd24eb4e972c07a91c50b65d89';
export default node;
