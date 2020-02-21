/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "%future added value" | "Literal" | "%future added value";
export type ResponseBodyKind = "%future added value" | "%future added value" | "%future added value" | "Template" | "%future added value";
export type StateMappings_state = {
    readonly id: string;
    readonly mappings: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly pathMatcher: {
                    readonly kind: MatcherKind;
                    readonly value?: string;
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
            };
        }>;
    };
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
                                        "name": "pathMatcher",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": null,
                                        "plural": false,
                                        "selections": [
                                            (v1 /*: any*/),
                                            {
                                                "kind": "InlineFragment",
                                                "type": "LiteralMatcher",
                                                "selections": [
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
                                                    {
                                                        "kind": "ScalarField",
                                                        "alias": null,
                                                        "name": "name",
                                                        "args": null,
                                                        "storageKey": null
                                                    }
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
            }
        ]
    } as any;
})();
(node as any).hash = '3a95b851bf4692e48b25d5225ea1d1bb';
export default node;
