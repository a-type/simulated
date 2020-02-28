/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioAddButton_viewer = {
    readonly id: string;
    readonly " $refType": "ScenarioAddButton_viewer";
};
export type ScenarioAddButton_viewer$data = ScenarioAddButton_viewer;
export type ScenarioAddButton_viewer$key = {
    readonly " $data"?: ScenarioAddButton_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioAddButton_viewer">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioAddButton_viewer",
    "type": "Viewer",
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
(node as any).hash = 'f64928a13af5936938c2dd9e0a2ac537';
export default node;
