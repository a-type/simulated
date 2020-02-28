/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "%future added value" | "body" | "headers" | "methods" | "path" | "%future added value";
export type MatcherEditWidget_matcher = {
    readonly kind: MatcherKind;
    readonly methods?: ReadonlyArray<string>;
    readonly body?: string;
    readonly ignoreWhitespace?: boolean;
    readonly regex?: boolean;
    readonly headers?: ReadonlyArray<{
        readonly name: string;
        readonly value: string | null;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"PathMatcherEditWidget_matcher">;
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
        },
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
        },
        {
            "kind": "InlineFragment",
            "type": "HeadersMatcher",
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "headers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HeaderKeyValuePair",
                    "plural": true,
                    "selections": [
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
                            "name": "value",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        },
        {
            "kind": "FragmentSpread",
            "name": "PathMatcherEditWidget_matcher",
            "args": null
        }
    ]
} as any);
(node as any).hash = '1d2afde775ab0d819c3dd968c00971ae';
export default node;
