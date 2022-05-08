import { useMutation } from 'react-query';

import { useVertuozaClient } from '@/clients';

export const useLoginMutation = () => {
  const client = useVertuozaClient();

  return useMutation(client.auth.login);
};
