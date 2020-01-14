/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioList_viewer = {
    readonly scenarios: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"ScenarioCard_scenario">;
            };
        }>;
    };
    readonly " $refType": "ScenarioList_viewer";
};
export type ScenarioList_viewer$data = ScenarioList_viewer;
export type ScenarioList_viewer$key = {
    readonly " $data"?: ScenarioList_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioList_viewer">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioList_viewer",
    "type": "Viewer",
    "metadata": {
        "connection": [
            {
                "count": "first",
                "cursor": null,
                "direction": "forward",
                "path": [
                    "scenarios"
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
        {
            "kind": "LinkedField",
            "alias": "scenarios",
            "name": "__ScenarioList_scenarios_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "ScenarioConnection",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ScenarioEdge",
                    "plural": true,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "id",
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
                                    "name": "ScenarioCard_scenario",
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
                    "concreteType": "ScenarioPageInfo",
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
} as any);
(node as any).hash = '688218751a4a4a2ba8e176f3573f23ab';
export default node;
