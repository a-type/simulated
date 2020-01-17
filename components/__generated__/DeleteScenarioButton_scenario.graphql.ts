/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteScenarioButton_scenario = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "DeleteScenarioButton_scenario";
};
export type DeleteScenarioButton_scenario$data = DeleteScenarioButton_scenario;
export type DeleteScenarioButton_scenario$key = {
    readonly " $data"?: DeleteScenarioButton_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"DeleteScenarioButton_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "DeleteScenarioButton_scenario",
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
(node as any).hash = '930997f9e2ebdb996e023160a2ae5435';
export default node;
