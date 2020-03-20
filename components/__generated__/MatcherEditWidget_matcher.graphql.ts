/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "body" | "headers" | "methods" | "path" | "%future added value";
export type MatcherEditWidget_matcher = {
    readonly kind: MatcherKind;
    readonly " $fragmentRefs": FragmentRefs<"PathMatcherEditWidget_matcher" | "MethodsMatcherEditWidget_matcher" | "BodyMatcherEditWidget_matcher" | "HeadersMatcherEditWidget_matcher">;
    readonly " $refType": "MatcherEditWidget_matcher";
};
export type MatcherEditWidget_matcher$data = MatcherEditWidget_matcher;
export type MatcherEditWidget_matcher$key = {
    readonly " $data"?: MatcherEditWidget_matcher$data;
    readonly " $fragmentRefs": FragmentRefs<"MatcherEditWidget_matcher">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MatcherEditWidget_matcher",
    "type": "Matcher",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "kind",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "FragmentSpread",
            "name": "PathMatcherEditWidget_matcher",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "MethodsMatcherEditWidget_matcher",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "BodyMatcherEditWidget_matcher",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "HeadersMatcherEditWidget_matcher",
            "args": null
        }
    ]
} as any);
(node as any).hash = 'c5d6d9a9e15636a61e0a26e9c2fc97e7';
export default node;
