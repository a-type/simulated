import React from 'react';
import { useRelayEnvironment } from 'react-relay/hooks';
import {
  commitMutation,
  Disposable,
  GraphQLTaggedNode,
  MutationConfig,
  MutationParameters,
} from 'relay-runtime';

const { useState, useRef, useCallback, useEffect } = React;

type ExecuteConfig<T extends MutationParameters> = Omit<
  MutationConfig<T>,
  'mutation'
>;

type ExecuteFn<T extends MutationParameters> = (
  config: ExecuteConfig<T>,
) => void;

export default function useMutation<T extends MutationParameters = any>(
  mutation: GraphQLTaggedNode,
  initialConfig?: Partial<ExecuteConfig<T>>,
): [ExecuteFn<T>, boolean] {
  const environment = useRelayEnvironment();
  const [isPending, setPending] = useState(false);
  const requestRef = useRef<Disposable | null>(null);
  const mountedRef = useRef(false);
  const execute = useCallback(
    (config: ExecuteConfig<T>) => {
      if (requestRef.current != null) {
        return;
      }
      const request = commitMutation(environment, {
        ...initialConfig,
        ...config,
        onCompleted: (...args) => {
          if (!mountedRef.current) {
            return;
          }
          requestRef.current = null;
          setPending(false);
          initialConfig?.onCompleted?.(...args);
          config.onCompleted?.(...args);
        },
        onError: error => {
          console.error(error);
          if (!mountedRef.current) {
            return;
          }
          requestRef.current = null;
          setPending(false);
          initialConfig?.onError?.(error);
          config.onError?.(error);
        },
        mutation,
      });
      requestRef.current = request;
      setPending(true);
    },
    [mutation, environment],
  );
  useEffect(() => {
    mountedRef.current = true;
    return () => void (mountedRef.current = false);
  }, []);
  return [execute, isPending];
}
