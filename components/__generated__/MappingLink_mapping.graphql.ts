/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MappingLink_mapping = {
    readonly id: string;
    readonly " $refType": "MappingLink_mapping";
};
export type MappingLink_mapping$data = MappingLink_mapping;
export type MappingLink_mapping$key = {
    readonly " $data"?: MappingLink_mapping$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingLink_mapping">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MappingLink_mapping",
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
        }
    ]
} as any);
(node as any).hash = 'a5f1c08633418d1d6732bbb10a0951fc';
export default node;
