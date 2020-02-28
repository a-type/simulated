/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MappingAddButton_state = {
    readonly id: string;
    readonly " $refType": "MappingAddButton_state";
};
export type MappingAddButton_state$data = MappingAddButton_state;
export type MappingAddButton_state$key = {
    readonly " $data"?: MappingAddButton_state$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingAddButton_state">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MappingAddButton_state",
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
(node as any).hash = '291d819ab3e709ce25e7b3c94bd15a8f';
export default node;
