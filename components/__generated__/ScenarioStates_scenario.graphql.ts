/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioStates_scenario = {
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
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v1 = ({
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
                    "cursor": null,
                    "direction": "forward",
                    "path": [
                        "possibleStates"
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
                "alias": null,
                "name": "defaultState",
                "storageKey": null,
                "args": null,
                "concreteType": "State",
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    (v1 /*: any*/)
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
                                    (v0 /*: any*/),
                                    (v1 /*: any*/),
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
(node as any).hash = '0cfccd57dd483602cc337480ed7c06d9';
export default node;
