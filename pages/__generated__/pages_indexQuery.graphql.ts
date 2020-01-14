/* tslint:disable */
/* eslint-disable */
/* @relayHash 3c0cbe78b1ffd138c2b5f003ac6c693a */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pages_indexQueryVariables = {};
export type pages_indexQueryResponse = {
    readonly scenarios: {
        readonly " $fragmentRefs": FragmentRefs<"ScenarioList_scenarios">;
    };
};
export type pages_indexQuery = {
    readonly response: pages_indexQueryResponse;
    readonly variables: pages_indexQueryVariables;
};



/*
query pages_indexQuery {
  scenarios {
    ...ScenarioList_scenarios
  }
}

fragment ScenarioList_scenarios on ScenarioConnection {
  edges {
    node {
      id
      name
    }
  }
}
*/

const node: ConcreteRequest = ({
    "kind": "Request",
    "fragment": {
        "kind": "Fragment",
        "name": "pages_indexQuery",
        "type": "Query",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "scenarios",
                "storageKey": null,
                "args": null,
                "concreteType": "ScenarioConnection",
                "plural": false,
                "selections": [
                    {
                        "kind": "FragmentSpread",
                        "name": "ScenarioList_scenarios",
                        "args": null
                    }
                ]
            }
        ]
    },
    "operation": {
        "kind": "Operation",
        "name": "pages_indexQuery",
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "scenarios",
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
                                        "name": "name",
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
    },
    "params": {
        "operationKind": "query",
        "name": "pages_indexQuery",
        "id": null,
        "text": "query pages_indexQuery {\n  scenarios {\n    ...ScenarioList_scenarios\n  }\n}\n\nfragment ScenarioList_scenarios on ScenarioConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n",
        "metadata": {}
    }
} as any);
(node as any).hash = 'b6f447c1489c51032d616bef6c0346e0';
export default node;
