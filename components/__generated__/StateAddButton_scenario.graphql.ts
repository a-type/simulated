/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateAddButton_scenario = {
    readonly id: string;
    readonly " $refType": "StateAddButton_scenario";
};
export type StateAddButton_scenario$data = StateAddButton_scenario;
export type StateAddButton_scenario$key = {
    readonly " $data"?: StateAddButton_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"StateAddButton_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "StateAddButton_scenario",
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
(node as any).hash = '67789737ac276804fb450335a948bf43';
export default node;
