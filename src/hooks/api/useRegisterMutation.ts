import { useMutation } from 'react-query';

import { useVertuozaClient } from '@/clients';

export const useRegisterMutation = () => {
  const client = useVertuozaClient();

  return useMutation(client.auth.register);
};
