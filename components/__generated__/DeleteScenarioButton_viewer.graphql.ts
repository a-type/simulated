/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteScenarioButton_viewer = {
    readonly id: string;
    readonly " $refType": "DeleteScenarioButton_viewer";
};
export type DeleteScenarioButton_viewer$data = DeleteScenarioButton_viewer;
export type DeleteScenarioButton_viewer$key = {
    readonly " $data"?: DeleteScenarioButton_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"DeleteScenarioButton_viewer">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "DeleteScenarioButton_viewer",
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
(node as any).hash = 'bdfb838c9200c03112943e4605e53d6a';
export default node;
