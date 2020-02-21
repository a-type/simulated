/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "Literal" | "%future added value";
export type ResponseBodyKind = "%future added value" | "%future added value" | "Template" | "%future added value";
export type MappingEditor_mapping = {
    readonly id: string;
    readonly pathMatcher: {
        readonly kind: MatcherKind;
        readonly value?: string;
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
    } as any), v1 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "value",
            "args": null,
            "storageKey": null
        } as any)
    ];
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
                "name": "pathMatcher",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "InlineFragment",
                        "type": "LiteralMatcher",
                        "selections": (v1 /*: any*/)
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
                                "selections": (v1 /*: any*/)
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
            }
        ]
    } as any;
})();
(node as any).hash = 'a4760c6a6aec006c6b868395553f978b';
export default node;
