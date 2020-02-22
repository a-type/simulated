export type PolymorphicInput = {
  [kind: string]: {} | undefined;
};

export type PolymorphicFormValues = {
  kind: string;
  [other: string]: any;
};

export const toPolymorphicInput = <T extends PolymorphicInput>(
  values: PolymorphicFormValues | null,
): T => {
  if (!values) return null;

  const { kind, ...rest } = values;

  return {
    [(kind as string).toLowerCase()]: rest,
  } as T;
};
