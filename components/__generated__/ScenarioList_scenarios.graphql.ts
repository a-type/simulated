/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioList_scenarios = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly name: string;
        };
    }>;
    readonly " $refType": "ScenarioList_scenarios";
};
export type ScenarioList_scenarios$data = ScenarioList_scenarios;
export type ScenarioList_scenarios$key = {
    readonly " $data"?: ScenarioList_scenarios$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioList_scenarios">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "ScenarioList_scenarios",
    "type": "ScenarioConnection",
    "metadata": null,
    "argumentDefinitions": [],
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
                            "name": "name",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = '0729b443bb9d04391f795a2e51035c5a';
export default node;
