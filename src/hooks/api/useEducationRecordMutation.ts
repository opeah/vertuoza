import { useMutation } from 'react-query';

import { useVertuozaClient } from '@/clients';

export const useEducationRecordMutation = () => {
  const client = useVertuozaClient();
  return useMutation(client.education.create);
};
