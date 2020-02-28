import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FocusEvent,
  useRef,
} from 'react';

export default <T extends string | boolean>(
  backendValue: T,
  saveValue: (value: T) => void | Promise<void>,
) => {
  const isCheckbox = typeof backendValue === 'boolean';

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

  const handleFieldChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (isCheckbox) {
        setRawValue(ev.target.checked as T);
      } else {
        setRawValue(ev.target.value as T);
      }
    },
    [setRawValue, isCheckbox],
  );

  const [saving, setSaving] = useState(false);

  const handleFieldBlur = useCallback(
    async (ev: FocusEvent<HTMLInputElement>) => {
      if (backendValue === rawValue) return;

      try {
        setSaving(true);
        await saveValueRef.current(rawValue);
      } finally {
        setSaving(false);
      }
    },
    [saveValueRef, rawValue, backendValue, setSaving],
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
