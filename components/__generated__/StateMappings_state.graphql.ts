/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "body" | "headers" | "methods" | "path" | "%future added value";
export type ResponseBodyKind = "%future added value" | "%future added value" | "template" | "%future added value";
export type StateMappings_state = {
    readonly id: string;
    readonly mappings: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly matchers: ReadonlyArray<{
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
                }>;
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
    var v0 = [
        "mappings"
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "regex",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
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
                    "cursor": "after",
                    "direction": "forward",
                    "path": (v0 /*: any*/)
                }
            ],
            "refetch": {
                "connection": {
                    "forward": {
                        "count": "first",
                        "cursor": "after"
                    },
                    "backward": null,
                    "path": (v0 /*: any*/)
                },
                "operation": require('./StateMappingsPaginationQuery.graphql.ts'),
                "fragmentPathInResult": [
                    "node"
                ]
            }
        },
        "argumentDefinitions": [
            {
                "kind": "LocalArgument",
                "name": "first",
                "type": "Int",
                "defaultValue": 10
            },
            {
                "kind": "LocalArgument",
                "name": "after",
                "type": "String",
                "defaultValue": null
            }
        ],
        "selections": [
            (v1 /*: any*/),
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
                                    (v1 /*: any*/),
                                    {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "matchers",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": null,
                                        "plural": true,
                                        "selections": [
                                            (v2 /*: any*/),
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
                                                    (v3 /*: any*/)
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
                                                    (v3 /*: any*/)
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
                                                            (v4 /*: any*/),
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
                                                    (v2 /*: any*/)
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
(node as any).hash = 'b787c742be42d03af85aac3cfd17a666';
export default node;
