/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateMappings_scenario = {
    readonly " $fragmentRefs": FragmentRefs<"MappingLink_scenario">;
    readonly " $refType": "StateMappings_scenario";
};
export type StateMappings_scenario$data = StateMappings_scenario;
export type StateMappings_scenario$key = {
    readonly " $data"?: StateMappings_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"StateMappings_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "StateMappings_scenario",
    "type": "Scenario",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "FragmentSpread",
            "name": "MappingLink_scenario",
            "args": null
        }
    ]
} as any);
(node as any).hash = '96fae9784f7e2649de57f5a601fd12c3';
export default node;
