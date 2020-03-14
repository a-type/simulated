/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MethodsMatcherEditWidget_matcher = {
    readonly methods?: ReadonlyArray<string>;
    readonly " $refType": "MethodsMatcherEditWidget_matcher";
};
export type MethodsMatcherEditWidget_matcher$data = MethodsMatcherEditWidget_matcher;
export type MethodsMatcherEditWidget_matcher$key = {
    readonly " $data"?: MethodsMatcherEditWidget_matcher$data;
    readonly " $fragmentRefs": FragmentRefs<"MethodsMatcherEditWidget_matcher">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MethodsMatcherEditWidget_matcher",
    "type": "Matcher",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "InlineFragment",
            "type": "MethodsMatcher",
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "methods",
                    "args": null,
                    "storageKey": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'ae69693620aaa5f78f4bd39b9ccd26ce';
export default node;
