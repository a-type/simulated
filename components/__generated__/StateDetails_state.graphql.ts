/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateDetails_state = {
    readonly id: string;
    readonly name: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly " $refType": "StateDetails_state";
};
export type StateDetails_state$data = StateDetails_state;
export type StateDetails_state$key = {
    readonly " $data"?: StateDetails_state$data;
    readonly " $fragmentRefs": FragmentRefs<"StateDetails_state">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "StateDetails_state",
    "type": "State",
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
(node as any).hash = '8cdb5d830f8babe9cba5247d586e3fdc';
export default node;
