import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FocusEvent,
} from 'react';

export default (
  backendValue: string,
  saveValue: (value: string) => void | Promise<void>,
) => {
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

  const handleFieldChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setRawValue(ev.target.value);
    },
    [setRawValue],
  );

  const [saving, setSaving] = useState(false);

  const handleFieldBlur = useCallback(
    async (ev: FocusEvent<HTMLInputElement>) => {
      if (backendValue === rawValue) return;

      try {
        setSaving(true);
        await saveValue(rawValue);
      } finally {
        setSaving(false);
      }
    },
    [saveValue, rawValue, backendValue, setSaving],
  );

  return [
    {
      onChange: handleFieldChange,
      onBlur: handleFieldBlur,
      value: rawValue,
    },
    {
      justUpdated,
      saving,
    },
  ];
};
