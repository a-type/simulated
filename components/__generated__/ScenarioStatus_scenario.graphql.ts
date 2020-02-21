/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ScenarioStatus_scenario = {
    readonly id: string;
    readonly currentState: {
        readonly id: string;
        readonly name: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"StateSelector_scenario">;
    readonly " $refType": "ScenarioStatus_scenario";
};
export type ScenarioStatus_scenario$data = ScenarioStatus_scenario;
export type ScenarioStatus_scenario$key = {
    readonly " $data"?: ScenarioStatus_scenario$data;
    readonly " $fragmentRefs": FragmentRefs<"ScenarioStatus_scenario">;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Fragment",
        "name": "ScenarioStatus_scenario",
        "type": "Scenario",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "currentState",
                "storageKey": null,
                "args": null,
                "concreteType": "State",
                "plural": false,
                "selections": [
                    (v0 /*: any*/),
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                    }
                ]
            },
            {
                "kind": "FragmentSpread",
                "name": "StateSelector_scenario",
                "args": null
            }
        ]
    } as any;
})();
(node as any).hash = 'f3cb893b02960cc8896548cecd013ac9';
export default node;
