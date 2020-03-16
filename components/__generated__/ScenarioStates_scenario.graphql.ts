/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioStates_scenario = {
    readonly id: string;
    readonly defaultState: {
        readonly id: string;
        readonly name: string;
    } | null;
    readonly possibleStates: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
            };
        }>;
    };
    readonly " $refType": "ScenarioStates_scenario";
};
export type ScenarioStates_scenario$data = ScenarioStates_scenario;
export type ScenarioStates_scenario$key = {
    readonly " $data"?: ScenarioStates_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioStates_scenario">;
};



const node: ReaderFragment = (function () {
    var v0 = [
        "possibleStates"
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "ScenarioStates_scenario",
        "type": "Scenario",
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
                "operation": require('./ScenarioStatesPaginationQuery.graphql.ts'),
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
                "alias": null,
                "name": "defaultState",
                "storageKey": null,
                "args": null,
                "concreteType": "State",
                "plural": false,
                "selections": [
                    (v1 /*: any*/),
                    (v2 /*: any*/)
                ]
            },
            {
                "kind": "LinkedField",
                "alias": "possibleStates",
                "name": "__ScenarioStates_possibleStates_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "ScenarioStateConnection",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ScenarioStateEdge",
                        "plural": true,
                        "selections": [
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "State",
                                "plural": false,
                                "selections": [
                                    (v1 /*: any*/),
                                    (v2 /*: any*/),
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
                        "concreteType": "ScenarioStatePageInfo",
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
(node as any).hash = 'c755c80076f4a29e9e70b667b4f237a7';
export default node;
