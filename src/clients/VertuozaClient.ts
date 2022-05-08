import { useMemo } from 'react';

import { useAuth } from '@/hooks';

import { getHttpClient, HttpClient } from './HttpClient';
import {
  VertuozaAuthRepository,
  VertuozaEducationRepository,
} from '../repositories';

const getVertuozaClient = (client: HttpClient) => ({
  auth: VertuozaAuthRepository(client),
  education: VertuozaEducationRepository(client),
});

export const useVertuozaClient = () => {
  const { accessToken } = useAuth();
  const baseUrl = `https://vertuoza-fiber.herokuapp.com`;
  const httpClient = getHttpClient(baseUrl, accessToken);
  return useMemo(() => getVertuozaClient(httpClient), [accessToken]);
};
