/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MappingLink_state = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "MappingLink_state";
};
export type MappingLink_state$data = MappingLink_state;
export type MappingLink_state$key = {
    readonly " $data"?: MappingLink_state$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingLink_state">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MappingLink_state",
    "type": "State",
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
            "name": "name",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '698b07efb35ec89fc625235ede22a81a';
export default node;
