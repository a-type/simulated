/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioDeleteButton_viewer = {
    readonly id: string;
    readonly " $refType": "ScenarioDeleteButton_viewer";
};
export type ScenarioDeleteButton_viewer$data = ScenarioDeleteButton_viewer;
export type ScenarioDeleteButton_viewer$key = {
    readonly " $data"?: ScenarioDeleteButton_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioDeleteButton_viewer">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioDeleteButton_viewer",
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
(node as any).hash = 'a91902ba5755b00659ecbc394b4e99d9';
export default node;
