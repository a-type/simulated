type MatcherCreateValues = {
  kind: 'Literal';
  value: string;
};

type ResponseBodyCreateValues = {
  kind: 'Template';
  value: string;
};

export const toMatcherInput = ({ kind, ...rest }: MatcherCreateValues) => {
  if (kind === 'Literal') {
    return {
      literal: rest,
    };
  }

  return null;
};

export const toBodyInput = ({ kind, ...rest }: ResponseBodyCreateValues) => {
  if (kind === 'Template') {
    return {
      template: rest,
    };
  }

  return null;
};
