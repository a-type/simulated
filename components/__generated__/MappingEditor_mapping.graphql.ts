/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MatcherKind = "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "%future added value" | "body" | "headers" | "methods" | "path" | "%future added value";
export type MappingEditor_mapping = {
    readonly id: string;
    readonly matchers: ReadonlyArray<{
        readonly kind: MatcherKind;
        readonly " $fragmentRefs": FragmentRefs<"MatcherEditWidget_matcher">;
    }>;
    readonly trigger: {
        readonly targetState: {
            readonly name: string;
        };
    } | null;
    readonly priority: number;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly " $fragmentRefs": FragmentRefs<"MatcherAddWidget_mapping" | "MappingPriorityField_mapping" | "MappingResponseEditWidget_mapping">;
    readonly " $refType": "MappingEditor_mapping";
};
export type MappingEditor_mapping$data = MappingEditor_mapping;
export type MappingEditor_mapping$key = {
    readonly " $data"?: MappingEditor_mapping$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingEditor_mapping">;
};



const node: ReaderFragment = ({
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
            "name": "matchers",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
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
                    "name": "MatcherEditWidget_matcher",
                    "args": null
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
            "kind": "FragmentSpread",
            "name": "MatcherAddWidget_mapping",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "MappingPriorityField_mapping",
            "args": null
        },
        {
            "kind": "FragmentSpread",
            "name": "MappingResponseEditWidget_mapping",
            "args": null
        }
    ]
} as any);
(node as any).hash = '6013b63e35e904f876043f12508a84f7';
export default node;
