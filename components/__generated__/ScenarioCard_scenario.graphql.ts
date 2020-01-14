/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioCard_scenario = {
    readonly id: string;
    readonly name: string;
    readonly createdAt: string;
    readonly " $refType": "ScenarioCard_scenario";
};
export type ScenarioCard_scenario$data = ScenarioCard_scenario;
export type ScenarioCard_scenario$key = {
    readonly " $data"?: ScenarioCard_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioCard_scenario">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioCard_scenario",
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
        }
    ]
} as any);
(node as any).hash = '83ee0b5464a9cbca02c049e836c71d2e';
export default node;
