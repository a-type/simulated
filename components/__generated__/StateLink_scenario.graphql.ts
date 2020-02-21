/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateLink_scenario = {
    readonly id: string;
    readonly " $refType": "StateLink_scenario";
};
export type StateLink_scenario$data = StateLink_scenario;
export type StateLink_scenario$key = {
    readonly " $data"?: StateLink_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"StateLink_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "StateLink_scenario",
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
(node as any).hash = '35a890946138379c88062aa3bdaf9be3';
export default node;
