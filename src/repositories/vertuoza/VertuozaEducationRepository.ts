import { HttpClient } from '@/clients';

import { DbEducationRecord } from '@/domain/db';
import { DtoToken, DtoUserQuery } from '@/domain/dto';

export const VertuozaEducationRepository = (client: HttpClient) => {
  return {
    async find({ userId }: DtoUserQuery): Promise<DbEducationRecord[]> {
      return await client.get(`/users/${userId}/education`);
    },
    async create({ userId, ...body }: DtoUserQuery): Promise<DtoToken> {
      return await client.post(`/users/${userId}/education`, {
        body,
      });
    },
  };
};
