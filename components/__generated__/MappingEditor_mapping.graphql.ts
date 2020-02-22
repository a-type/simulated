/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BodyMatcherKind = "%future added value" | "Literal" | "%future added value";
export type HeadersMatcherKind = "%future added value" | "Literals" | "%future added value";
export type MethodMatcherKind = "%future added value" | "Literals" | "%future added value";
export type PathMatcherKind = "%future added value" | "Literal" | "%future added value";
export type ResponseBodyKind = "%future added value" | "Template" | "%future added value";
export type MappingEditor_mapping = {
    readonly id: string;
    readonly methodMatcher: {
        readonly kind: MethodMatcherKind;
        readonly values?: ReadonlyArray<string>;
    } | null;
    readonly pathMatcher: {
        readonly kind: PathMatcherKind;
        readonly value?: string;
    } | null;
    readonly bodyMatcher: {
        readonly kind: BodyMatcherKind;
        readonly value?: string;
    } | null;
    readonly headersMatcher: {
        readonly kind: HeadersMatcherKind;
        readonly values?: ReadonlyArray<{
            readonly name: string;
            readonly value: string | null;
        }>;
    } | null;
    readonly response: {
        readonly body: {
            readonly kind: ResponseBodyKind;
            readonly value?: string;
        };
    } | null;
    readonly trigger: {
        readonly targetState: {
            readonly name: string;
        };
    } | null;
    readonly priority: number;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly " $refType": "MappingEditor_mapping";
};
export type MappingEditor_mapping$data = MappingEditor_mapping;
export type MappingEditor_mapping$key = {
    readonly " $data"?: MappingEditor_mapping$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingEditor_mapping">;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
        "args": null,
        "storageKey": null
    } as any), v2 = [
        (v1 /*: any*/)
    ], v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "MappingEditor_mapping",
        "type": "Mapping",
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
                "kind": "LinkedField",
                "alias": null,
                "name": "methodMatcher",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "InlineFragment",
                        "type": "LiteralsMethodMatcher",
                        "selections": [
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "values",
                                "args": null,
                                "storageKey": null
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "pathMatcher",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "InlineFragment",
                        "type": "LiteralPathMatcher",
                        "selections": (v2 /*: any*/)
                    }
                ]
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "bodyMatcher",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "InlineFragment",
                        "type": "LiteralBodyMatcher",
                        "selections": (v2 /*: any*/)
                    }
                ]
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "headersMatcher",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "InlineFragment",
                        "type": "LiteralsHeadersMatcher",
                        "selections": [
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "values",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "LiteralHeaderValueMatcher",
                                "plural": true,
                                "selections": [
                                    (v3 /*: any*/),
                                    (v1 /*: any*/)
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "response",
                "storageKey": null,
                "args": null,
                "concreteType": "Response",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "body",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": false,
                        "selections": [
                            (v0 /*: any*/),
                            {
                                "kind": "InlineFragment",
                                "type": "TemplateResponseBody",
                                "selections": (v2 /*: any*/)
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "trigger",
                "storageKey": null,
                "args": null,
                "concreteType": "Trigger",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "targetState",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "State",
                        "plural": false,
                        "selections": [
                            (v3 /*: any*/)
                        ]
                    }
                ]
            },
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "priority",
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
    } as any;
})();
(node as any).hash = 'be1bc1440bb5b95a822fca96ee123693';
export default node;
