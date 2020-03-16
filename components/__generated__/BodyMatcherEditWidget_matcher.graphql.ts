/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BodyMatcherEditWidget_matcher = {
    readonly body?: string;
    readonly ignoreWhitespace?: boolean;
    readonly regex?: boolean;
    readonly " $refType": "BodyMatcherEditWidget_matcher";
};
export type BodyMatcherEditWidget_matcher$data = BodyMatcherEditWidget_matcher;
export type BodyMatcherEditWidget_matcher$key = {
    readonly " $data"?: BodyMatcherEditWidget_matcher$data;
    readonly " $fragmentRefs": FragmentRefs<"BodyMatcherEditWidget_matcher">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "BodyMatcherEditWidget_matcher",
    "type": "Matcher",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "InlineFragment",
            "type": "BodyMatcher",
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "body",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "ignoreWhitespace",
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
(node as any).hash = '56c0e0056ae55328d8f8683a655b0acd';
export default node;
