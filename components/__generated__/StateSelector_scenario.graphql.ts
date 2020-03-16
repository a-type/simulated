/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StateSelector_scenario = {
    readonly id: string;
    readonly possibleStates: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
            };
        }>;
    };
    readonly " $refType": "StateSelector_scenario";
};
export type StateSelector_scenario$data = StateSelector_scenario;
export type StateSelector_scenario$key = {
    readonly " $data"?: StateSelector_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"StateSelector_scenario">;
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
    } as any);
    return {
        "kind": "Fragment",
        "name": "StateSelector_scenario",
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
                "operation": require('./StateSelectorPaginationQuery.graphql.ts'),
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
                "alias": "possibleStates",
                "name": "__StateSelector_possibleStates_connection",
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
(node as any).hash = '46fdcb95c3d37d0186dac7f69ba4038a';
export default node;
