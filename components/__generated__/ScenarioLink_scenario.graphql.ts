/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioLink_scenario = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "ScenarioLink_scenario";
};
export type ScenarioLink_scenario$data = ScenarioLink_scenario;
export type ScenarioLink_scenario$key = {
    readonly " $data"?: ScenarioLink_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioLink_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioLink_scenario",
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
(node as any).hash = '244d169d13733a60bc83122112811b24';
export default node;
