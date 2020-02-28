/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PathMatcherEditWidget_matcher = {
    readonly path?: string;
    readonly regex?: boolean;
    readonly " $refType": "PathMatcherEditWidget_matcher";
};
export type PathMatcherEditWidget_matcher$data = PathMatcherEditWidget_matcher;
export type PathMatcherEditWidget_matcher$key = {
    readonly " $data"?: PathMatcherEditWidget_matcher$data;
    readonly " $fragmentRefs": FragmentRefs<"PathMatcherEditWidget_matcher">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "PathMatcherEditWidget_matcher",
    "type": "Matcher",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "InlineFragment",
            "type": "PathMatcher",
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "path",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "regex",
                    "args": null,
                    "storageKey": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'ae30cd76969626ab0f33c394df7594c0';
export default node;
