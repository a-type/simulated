/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioDetails_scenario = {
    readonly id: string;
    readonly name: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly " $refType": "ScenarioDetails_scenario";
};
export type ScenarioDetails_scenario$data = ScenarioDetails_scenario;
export type ScenarioDetails_scenario$key = {
    readonly " $data"?: ScenarioDetails_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioDetails_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioDetails_scenario",
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
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "updatedAt",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'f0ad29baa9e12a0a3d37a0b16e842a8d';
export default node;
