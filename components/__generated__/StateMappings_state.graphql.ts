/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BodyMatcherKind = "%future added value" | "%future added value" | "Literal" | "%future added value";
export type HeadersMatcherKind = "%future added value" | "%future added value" | "Literals" | "%future added value";
export type MethodMatcherKind = "%future added value" | "%future added value" | "Literals" | "%future added value";
export type PathMatcherKind = "%future added value" | "%future added value" | "Literal" | "%future added value";
export type ResponseBodyKind = "%future added value" | "%future added value" | "Template" | "%future added value";
export type StateMappings_state = {
    readonly id: string;
    readonly mappings: {
        readonly edges: ReadonlyArray<{
            readonly node: {
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
                readonly " $fragmentRefs": FragmentRefs<"MappingLink_mapping">;
            };
        }>;
    };
    readonly " $fragmentRefs": FragmentRefs<"MappingLink_state">;
    readonly " $refType": "StateMappings_state";
};
export type StateMappings_state$data = StateMappings_state;
export type StateMappings_state$key = {
    readonly " $data"?: StateMappings_state$data;
    readonly " $fragmentRefs": FragmentRefs<"StateMappings_state">;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "value",
        "args": null,
        "storageKey": null
    } as any), v3 = [
        (v2 /*: any*/)
    ], v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "StateMappings_state",
        "type": "State",
        "metadata": {
            "connection": [
                {
                    "count": "first",
                    "cursor": null,
                    "direction": "forward",
                    "path": [
                        "mappings"
                    ]
                }
            ]
        },
        "argumentDefinitions": [
            {
                "kind": "LocalArgument",
                "name": "first",
                "type": "Int",
                "defaultValue": 10
            }
        ],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": "mappings",
                "name": "__StateMappings_mappings_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "StateMappingConnection",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StateMappingEdge",
                        "plural": true,
                        "selections": [
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Mapping",
                                "plural": false,
                                "selections": [
                                    (v0 /*: any*/),
                                    {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "methodMatcher",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": null,
                                        "plural": false,
                                        "selections": [
                                            (v1 /*: any*/),
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
                                            (v1 /*: any*/),
                                            {
                                                "kind": "InlineFragment",
                                                "type": "LiteralPathMatcher",
                                                "selections": (v3 /*: any*/)
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
                                            (v1 /*: any*/),
                                            {
                                                "kind": "InlineFragment",
                                                "type": "LiteralBodyMatcher",
                                                "selections": (v3 /*: any*/)
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
                                            (v1 /*: any*/),
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
                                                            (v4 /*: any*/),
                                                            (v2 /*: any*/)
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
                                                    (v1 /*: any*/)
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
                                                    (v4 /*: any*/)
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
                                    },
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "__typename",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "FragmentSpread",
                                        "name": "MappingLink_mapping",
                                        "args": null
                                    }
                                ]
                            },
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "cursor",
                                "args": null,
                                "storageKey": null
                            }
                        ]
                    },
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "pageInfo",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StateMappingPageInfo",
                        "plural": false,
                        "selections": [
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "endCursor",
                                "args": null,
                                "storageKey": null
                            },
                            {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "hasNextPage",
                                "args": null,
                                "storageKey": null
                            }
                        ]
                    }
                ]
            },
            {
                "kind": "FragmentSpread",
                "name": "MappingLink_state",
                "args": null
            }
        ]
    } as any;
})();
(node as any).hash = 'cbf19d04bcc798804da053d151459056';
export default node;
