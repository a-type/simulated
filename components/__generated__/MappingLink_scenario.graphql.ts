/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MappingLink_scenario = {
    readonly id: string;
    readonly " $refType": "MappingLink_scenario";
};
export type MappingLink_scenario$data = MappingLink_scenario;
export type MappingLink_scenario$key = {
    readonly " $data"?: MappingLink_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingLink_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MappingLink_scenario",
    "type": "Scenario",
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
(node as any).hash = 'baa21e0a8aac8269d81d42238d177c69';
export default node;
