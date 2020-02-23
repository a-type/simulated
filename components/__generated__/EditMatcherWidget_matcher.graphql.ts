/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "body" | "headers" | "methods" | "path" | "%future added value";
export type EditMatcherWidget_matcher = {
    readonly kind: MatcherKind;
    readonly methods?: ReadonlyArray<string>;
    readonly path?: string;
    readonly regex?: boolean;
    readonly body?: string;
    readonly ignoreWhitespace?: boolean;
    readonly headers?: ReadonlyArray<{
        readonly name: string;
        readonly value: string | null;
    }>;
    readonly " $refType": "EditMatcherWidget_matcher";
};
export type EditMatcherWidget_matcher$data = EditMatcherWidget_matcher;
export type EditMatcherWidget_matcher$key = {
    readonly " $data"?: EditMatcherWidget_matcher$data;
    readonly " $fragmentRefs": FragmentRefs<"EditMatcherWidget_matcher">;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "regex",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "EditMatcherWidget_matcher",
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
                "type": "PathMatcher",
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "path",
                        "args": null,
                        "storageKey": null
                    },
                    (v0 /*: any*/)
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
                    (v0 /*: any*/)
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
            }
        ]
    } as any;
})();
(node as any).hash = '2b250a1b656fe42415da3d8b1a8df71c';
export default node;
