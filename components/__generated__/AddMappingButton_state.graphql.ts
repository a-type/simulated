/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddMappingButton_state = {
    readonly id: string;
    readonly " $refType": "AddMappingButton_state";
};
export type AddMappingButton_state$data = AddMappingButton_state;
export type AddMappingButton_state$key = {
    readonly " $data"?: AddMappingButton_state$data;
    readonly " $fragmentRefs": FragmentRefs<"AddMappingButton_state">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "AddMappingButton_state",
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
        }
    ]
} as any);
(node as any).hash = '789d83534e6c0bb11308dcc8ae35bb23';
export default node;
