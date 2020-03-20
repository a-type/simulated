import { useState, useEffect, useCallback, ChangeEvent, useRef } from 'react';

type FieldValueKind = 'string' | 'checkbox' | 'array';

type PossibleFieldValue = string | boolean | string[] | readonly string[];

type NonReadOnly<T extends PossibleFieldValue> = T extends readonly string[]
  ? string[]
  : T;

const nonReadOnly = <T extends PossibleFieldValue>(val: T): NonReadOnly<T> =>
  val as NonReadOnly<T>;

export default <T extends PossibleFieldValue>(
  backendValue: T,
  saveValue: (value: NonReadOnly<T>) => void | Promise<void>,
  options: { checkboxValue?: string } = {},
): [
  {
    onChange: (ev: any, value?: T) => any;
    onBlur: () => any;
    value?: NonReadOnly<T> | string;
    checked?: boolean;
  },
  {
    justUpdated: boolean;
    saving: boolean;
  },
] => {
  const fieldValueKind: FieldValueKind =
    typeof backendValue === 'boolean'
      ? 'checkbox'
      : backendValue instanceof Array
      ? 'array'
      : 'string';

  const saveValueRef = useRef(saveValue);
  saveValueRef.current = saveValue;

  const [rawValue, setRawValue] = useState(backendValue);

  // synchronize with new backend values
  useEffect(() => {
    setRawValue(backendValue);
  }, [backendValue]);

  const [justUpdated, setJustUpdated] = useState(false);
  // resets just updated after 2 seconds
  useEffect(() => {
    if (justUpdated) {
      const handle = setTimeout(() => setJustUpdated(false), 2000);
      return () => clearTimeout(handle);
    }
  }, [justUpdated]);

  const [saving, setSaving] = useState(false);

  const save = useCallback(
    async (saveValue: T) => {
      if (backendValue === saveValue) return;

      try {
        setSaving(true);
        await saveValueRef.current(nonReadOnly(saveValue));
      } finally {
        setSaving(false);
      }
    },
    [saveValueRef, backendValue, setSaving],
  );

  const handleFieldChange = useCallback(
    (ev: any, newValue?: T) => {
      if (fieldValueKind === 'checkbox') {
        const checked = (ev as ChangeEvent<HTMLInputElement>).target
          .checked as T;
        setRawValue(checked);
        // checkboxes save on change
        save(checked);
      } else if (fieldValueKind === 'array') {
        setRawValue(newValue as T);
      } else {
        setRawValue(ev.target.value as T);
      }
    },
    [setRawValue, fieldValueKind, save],
  );

  const handleFieldBlur = useCallback(() => {
    if (fieldValueKind === 'checkbox') return;
    save(rawValue);
  }, [save, fieldValueKind, rawValue]);

  return [
    {
      onChange: handleFieldChange,
      onBlur: handleFieldBlur,
      value:
        fieldValueKind === 'checkbox'
          ? options.checkboxValue
          : nonReadOnly(rawValue),
      checked:
        fieldValueKind === 'checkbox'
          ? (nonReadOnly(rawValue) as boolean)
          : undefined,
    },
    {
      justUpdated,
      saving,
    },
  ];
};
