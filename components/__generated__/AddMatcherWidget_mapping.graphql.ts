/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddMatcherWidget_mapping = {
    readonly id: string;
    readonly " $refType": "AddMatcherWidget_mapping";
};
export type AddMatcherWidget_mapping$data = AddMatcherWidget_mapping;
export type AddMatcherWidget_mapping$key = {
    readonly " $data"?: AddMatcherWidget_mapping$data;
    readonly " $fragmentRefs": FragmentRefs<"AddMatcherWidget_mapping">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "AddMatcherWidget_mapping",
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
(node as any).hash = '2584072e254ff18ea7643a5583f906c1';
export default node;
