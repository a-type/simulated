/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddStateButton_scenario = {
    readonly id: string;
    readonly " $refType": "AddStateButton_scenario";
};
export type AddStateButton_scenario$data = AddStateButton_scenario;
export type AddStateButton_scenario$key = {
    readonly " $data"?: AddStateButton_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"AddStateButton_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "AddStateButton_scenario",
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
(node as any).hash = 'f61d9e1e2a18b0744aa23df5b91a18fc';
export default node;
