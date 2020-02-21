/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateLink_state = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "StateLink_state";
};
export type StateLink_state$data = StateLink_state;
export type StateLink_state$key = {
    readonly " $data"?: StateLink_state$data;
    readonly " $fragmentRefs": FragmentRefs<"StateLink_state">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "StateLink_state",
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
        }
    ]
} as any);
(node as any).hash = '42a9c272f1aeb01e378e3356f32f51ae';
export default node;
