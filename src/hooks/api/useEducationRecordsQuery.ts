import { useQuery } from 'react-query';

import { useVertuozaClient } from '@/clients';

export const useEducationRecordsQuery = (userId: string) => {
  const client = useVertuozaClient();
  return useQuery(`educationRecords`, () => client.education.find({ userId }));
};
