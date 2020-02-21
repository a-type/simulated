/* tslint:disable */
/* eslint-disable */
/* @relayHash e3bbb2e58c559e71d01a1cb98b86c39f */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MappingIdQueryVariables = {
    scenarioId: string;
    stateId: string;
    mappingId: string;
};
export type MappingIdQueryResponse = {
    readonly viewer: {
        readonly scenario: {
            readonly " $fragmentRefs": FragmentRefs<"ScenarioLink_scenario" | "StateLink_scenario" | "MappingLink_scenario">;
        } | null;
        readonly state: {
            readonly " $fragmentRefs": FragmentRefs<"StateLink_state" | "MappingLink_state">;
        } | null;
        readonly mapping: {
            readonly " $fragmentRefs": FragmentRefs<"MappingLink_mapping" | "MappingEditor_mapping">;
        } | null;
    };
};
export type MappingIdQuery = {
    readonly response: MappingIdQueryResponse;
    readonly variables: MappingIdQueryVariables;
};



/*
query MappingIdQuery(
  $scenarioId: ID!
  $stateId: ID!
  $mappingId: ID!
) {
  viewer {
    scenario(id: $scenarioId) {
      ...ScenarioLink_scenario
      ...StateLink_scenario
      ...MappingLink_scenario
      id
    }
    state(id: $stateId) {
      ...StateLink_state
      ...MappingLink_state
      id
    }
    mapping(id: $mappingId) {
      ...MappingLink_mapping
      ...MappingEditor_mapping
      id
    }
    id
  }
}

fragment MappingEditor_mapping on Mapping {
  id
  pathMatcher {
    __typename
    kind
    ... on LiteralMatcher {
      value
    }
  }
  response {
    body {
      __typename
      kind
      ... on TemplateResponseBody {
        value
      }
    }
  }
  trigger {
    targetState {
      name
      id
    }
  }
  priority
  createdAt
  updatedAt
}

fragment MappingLink_mapping on Mapping {
  id
}

fragment MappingLink_scenario on Scenario {
  id
}

fragment MappingLink_state on State {
  id
  name
}

fragment ScenarioLink_scenario on Scenario {
  id
  name
}

fragment StateLink_scenario on Scenario {
  id
}

fragment StateLink_state on State {
  id
  name
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "scenarioId",
            "type": "ID!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "stateId",
            "type": "ID!",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "mappingId",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "scenarioId"
        } as any)
    ], v2 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "stateId"
        } as any)
    ], v3 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "mappingId"
        } as any)
    ], v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v6 = [
        (v4 /*: any*/),
        (v5 /*: any*/)
    ], v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "kind",
        "args": null,
        "storageKey": null
    } as any), v9 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "value",
            "args": null,
            "storageKey": null
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "MappingIdQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "viewer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "scenario",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "ScenarioLink_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateLink_scenario",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "MappingLink_scenario",
                                    "args": null
                                }
                            ]
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "State",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "StateLink_state",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "MappingLink_state",
                                    "args": null
                                }
                            ]
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "mapping",
                            "storageKey": null,
                            "args": (v3 /*: any*/),
                            "concreteType": "Mapping",
                            "plural": false,
                            "selections": [
                                {
                                    "kind": "FragmentSpread",
                                    "name": "MappingLink_mapping",
                                    "args": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "MappingEditor_mapping",
                                    "args": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "MappingIdQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "viewer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Viewer",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "scenario",
                            "storageKey": null,
                            "args": (v1 /*: any*/),
                            "concreteType": "Scenario",
                            "plural": false,
                            "selections": (v6 /*: any*/)
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "state",
                            "storageKey": null,
                            "args": (v2 /*: any*/),
                            "concreteType": "State",
                            "plural": false,
                            "selections": (v6 /*: any*/)
                        },
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "mapping",
                            "storageKey": null,
                            "args": (v3 /*: any*/),
                            "concreteType": "Mapping",
                            "plural": false,
                            "selections": [
                                (v4 /*: any*/),
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "pathMatcher",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": null,
                                    "plural": false,
                                    "selections": [
                                        (v7 /*: any*/),
                                        (v8 /*: any*/),
                                        {
                                            "kind": "InlineFragment",
                                            "type": "LiteralMatcher",
                                            "selections": (v9 /*: any*/)
                                        }
                                    ]
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
                                                (v7 /*: any*/),
                                                (v8 /*: any*/),
                                                {
                                                    "kind": "InlineFragment",
                                                    "type": "TemplateResponseBody",
                                                    "selections": (v9 /*: any*/)
                                                }
                                            ]
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
                                                (v5 /*: any*/),
                                                (v4 /*: any*/)
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
                                }
                            ]
                        },
                        (v4 /*: any*/)
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "MappingIdQuery",
            "id": null,
            "text": "query MappingIdQuery(\n  $scenarioId: ID!\n  $stateId: ID!\n  $mappingId: ID!\n) {\n  viewer {\n    scenario(id: $scenarioId) {\n      ...ScenarioLink_scenario\n      ...StateLink_scenario\n      ...MappingLink_scenario\n      id\n    }\n    state(id: $stateId) {\n      ...StateLink_state\n      ...MappingLink_state\n      id\n    }\n    mapping(id: $mappingId) {\n      ...MappingLink_mapping\n      ...MappingEditor_mapping\n      id\n    }\n    id\n  }\n}\n\nfragment MappingEditor_mapping on Mapping {\n  id\n  pathMatcher {\n    __typename\n    kind\n    ... on LiteralMatcher {\n      value\n    }\n  }\n  response {\n    body {\n      __typename\n      kind\n      ... on TemplateResponseBody {\n        value\n      }\n    }\n  }\n  trigger {\n    targetState {\n      name\n      id\n    }\n  }\n  priority\n  createdAt\n  updatedAt\n}\n\nfragment MappingLink_mapping on Mapping {\n  id\n}\n\nfragment MappingLink_scenario on Scenario {\n  id\n}\n\nfragment MappingLink_state on State {\n  id\n  name\n}\n\nfragment ScenarioLink_scenario on Scenario {\n  id\n  name\n}\n\nfragment StateLink_scenario on Scenario {\n  id\n}\n\nfragment StateLink_state on State {\n  id\n  name\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'f323db41c7693c781d6a51c523e18453';
export default node;
