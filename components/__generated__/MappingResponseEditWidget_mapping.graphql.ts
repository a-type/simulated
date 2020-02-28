/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ResponseBodyKind = "%future added value" | "template" | "%future added value";
export type MappingResponseEditWidget_mapping = {
    readonly id: string;
    readonly response: {
        readonly body: {
            readonly kind: ResponseBodyKind;
            readonly value?: string;
        };
    } | null;
    readonly " $refType": "MappingResponseEditWidget_mapping";
};
export type MappingResponseEditWidget_mapping$data = MappingResponseEditWidget_mapping;
export type MappingResponseEditWidget_mapping$key = {
    readonly " $data"?: MappingResponseEditWidget_mapping$data;
    readonly " $fragmentRefs": FragmentRefs<"MappingResponseEditWidget_mapping">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "MappingResponseEditWidget_mapping",
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
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "kind",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "InlineFragment",
                            "type": "TemplateResponseBody",
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
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'a1654e93f9c1efeaf5a185afd9c98930';
export default node;
