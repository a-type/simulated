/* tslint:disable */
/* eslint-disable */
/* @relayHash 5823438e6f978f18597f7ce6e651b911 */

import { ConcreteRequest } from "relay-runtime";
export type SetMappingPriorityInput = {
    mappingId: string;
    priority: number;
};
export type MappingPriorityField_setMappingPriorityMutationVariables = {
    input: SetMappingPriorityInput;
};
export type MappingPriorityField_setMappingPriorityMutationResponse = {
    readonly setMappingPriority: {
        readonly mapping: {
            readonly id: string;
            readonly priority: number;
        };
    };
};
export type MappingPriorityField_setMappingPriorityMutation = {
    readonly response: MappingPriorityField_setMappingPriorityMutationResponse;
    readonly variables: MappingPriorityField_setMappingPriorityMutationVariables;
};



/*
mutation MappingPriorityField_setMappingPriorityMutation(
  $input: SetMappingPriorityInput!
) {
  setMappingPriority(input: $input) {
    mapping {
      id
      priority
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "SetMappingPriorityInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "setMappingPriority",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "SetMappingPriorityResult",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "mapping",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Mapping",
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
                            "name": "priority",
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
            "name": "MappingPriorityField_setMappingPriorityMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "MappingPriorityField_setMappingPriorityMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "MappingPriorityField_setMappingPriorityMutation",
            "id": null,
            "text": "mutation MappingPriorityField_setMappingPriorityMutation(\n  $input: SetMappingPriorityInput!\n) {\n  setMappingPriority(input: $input) {\n    mapping {\n      id\n      priority\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '796e1d579a986954783b7c0a2b192af5';
export default node;
