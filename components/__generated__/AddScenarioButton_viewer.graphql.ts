/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddScenarioButton_viewer = {
    readonly id: string;
    readonly " $refType": "AddScenarioButton_viewer";
};
export type AddScenarioButton_viewer$data = AddScenarioButton_viewer;
export type AddScenarioButton_viewer$key = {
    readonly " $data"?: AddScenarioButton_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"AddScenarioButton_viewer">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "AddScenarioButton_viewer",
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
(node as any).hash = '24507bc5393663ec722f23af5883a2d7';
export default node;
