/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioDeleteButton_scenario = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "ScenarioDeleteButton_scenario";
};
export type ScenarioDeleteButton_scenario$data = ScenarioDeleteButton_scenario;
export type ScenarioDeleteButton_scenario$key = {
    readonly " $data"?: ScenarioDeleteButton_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioDeleteButton_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioDeleteButton_scenario",
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
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '4cf2074ecf8b9d042ccb487618373ba1';
export default node;
