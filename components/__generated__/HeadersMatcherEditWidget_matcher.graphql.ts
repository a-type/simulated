/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HeadersMatcherEditWidget_matcher = {
    readonly headers?: ReadonlyArray<{
        readonly name: string;
        readonly value: string | null;
    }>;
    readonly " $refType": "HeadersMatcherEditWidget_matcher";
};
export type HeadersMatcherEditWidget_matcher$data = HeadersMatcherEditWidget_matcher;
export type HeadersMatcherEditWidget_matcher$key = {
    readonly " $data"?: HeadersMatcherEditWidget_matcher$data;
    readonly " $fragmentRefs": FragmentRefs<"HeadersMatcherEditWidget_matcher">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "HeadersMatcherEditWidget_matcher",
    "type": "Matcher",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
} as any);
(node as any).hash = '87ffd6bbaae792f55920c72096a7b4c6';
export default node;
