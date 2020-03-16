import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { graphql, useFragment } from 'react-relay/hooks';
import { MappingResponseEditWidget_mapping$key } from './__generated__/MappingResponseEditWidget_mapping.graphql';
import useMutation from '../hooks/useMutation';

export interface MappingResponseEditWidgetProps {
  mapping: MappingResponseEditWidget_mapping$key;
}

const mappingFragment = graphql`
  fragment MappingResponseEditWidget_mapping on Mapping {
    id
    response {
      body {
        kind
        ... on TemplateResponseBody {
          value
        }
      }
    }
  }
`;

const setResponseMutation = graphql`
  mutation MappingResponseEditWidget_setResponseMutation(
    $input: SetMappingResponseInput!
  ) {
    setMappingResponse(input: $input) {
      mapping {
        response {
          body {
            kind
            ... on TemplateResponseBody {
              value
            }
          }
        }
      }
    }
  }
`;

const MappingResponseEditWidget: FC<MappingResponseEditWidgetProps> = props => {
  const mapping = useFragment(mappingFragment, props.mapping);
  const mappingId = mapping.id;
  const savedResponseType = mapping.response?.body?.kind ?? null;
  const savedBodyValue = mapping.response?.body?.value ?? '';

  const [internalBodyValue, setInternalBodyValue] = useState<string>(
    savedBodyValue,
  );

  const [mutate, loading] = useMutation(setResponseMutation);

  const handleBodyChange = useCallback(
    (ev: ChangeEvent<HTMLTextAreaElement>) => {
      setInternalBodyValue(ev.target.value);
    },
    [setInternalBodyValue],
  );

  const handleBodyBlur = useCallback(() => {
    if (savedBodyValue === internalBodyValue) return;

    mutate({
      variables: {
        input: {
          mappingId,
          // TODO: make adaptable to the response type (there's only 1 right now)
          response: {
            body: {
              template: {
                value: internalBodyValue,
              },
            },
          },
        },
      },
    });
  }, [mutate, internalBodyValue, savedBodyValue, mappingId]);

  return (
    <>
      <TextField
        select
        disabled
        name="response.body.kind"
        label="Response type"
        style={{ minWidth: 200 }}
        variant="outlined"
        margin="normal"
        value={savedResponseType}
      >
        <MenuItem value="template">Template</MenuItem>
      </TextField>
      {/* TODO: configured based on matcher type */}
      <TextField
        multiline
        name="response.body.value"
        label="Response body template"
        fullWidth
        variant="outlined"
        margin="normal"
        disabled={loading}
        onChange={handleBodyChange}
        onBlur={handleBodyBlur}
        value={internalBodyValue}
      />
    </>
  );
};

export default MappingResponseEditWidget;
