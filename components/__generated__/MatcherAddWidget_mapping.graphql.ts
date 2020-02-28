/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherAddWidget_mapping = {
    readonly id: string;
    readonly " $refType": "MatcherAddWidget_mapping";
};
export type MatcherAddWidget_mapping$data = MatcherAddWidget_mapping;
export type MatcherAddWidget_mapping$key = {
    readonly " $data"?: MatcherAddWidget_mapping$data;
    readonly " $fragmentRefs": FragmentRefs<"MatcherAddWidget_mapping">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MatcherAddWidget_mapping",
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
(node as any).hash = '648a4fae46e938da865bdfa15e991a51';
export default node;
