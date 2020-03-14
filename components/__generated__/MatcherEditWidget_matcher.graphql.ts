/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "body" | "headers" | "methods" | "path" | "%future added value";
export type MatcherEditWidget_matcher = {
    readonly kind: MatcherKind;
    readonly body?: string;
    readonly ignoreWhitespace?: boolean;
    readonly regex?: boolean;
    readonly headers?: ReadonlyArray<{
        readonly name: string;
        readonly value: string | null;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"PathMatcherEditWidget_matcher" | "MethodsMatcherEditWidget_matcher">;
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
        },
        {
            "kind": "FragmentSpread",
            "name": "MethodsMatcherEditWidget_matcher",
            "args": null
        }
    ]
} as any);
(node as any).hash = '885852d298e90ec6c6566b3240c2c907';
export default node;
