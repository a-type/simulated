/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MappingPriorityField_mapping = {
    readonly id: string;
    readonly priority: number;
    readonly " $refType": "MappingPriorityField_mapping";
};
export type MappingPriorityField_mapping$data = MappingPriorityField_mapping;
export type MappingPriorityField_mapping$key = {
    readonly " $data"?: MappingPriorityField_mapping$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingPriorityField_mapping">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MappingPriorityField_mapping",
    "type": "Mapping",
    "metadata": null,
    "argumentDefinitions": [],
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
} as any);
(node as any).hash = 'ed0c34e1354b6f07757578552ca7e41c';
export default node;
