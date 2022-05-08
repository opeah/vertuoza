import { HttpClient } from '@/clients';

import { DtoLoginForm, DtoRegisterForm, DtoToken } from '@/domain/dto';

export const VertuozaAuthRepository = (client: HttpClient) => {
  return {
    async login({ email, password }: DtoLoginForm): Promise<DtoToken> {
      return await client.post(`/login`, {
        body: {
          email,
          password,
        },
      });
    },
    async register({ email, password }: DtoRegisterForm): Promise<DtoToken> {
      return await client.post(`/users`, {
        body: {
          email,
          password,
        },
      });
    },
    async me(): Promise<any> {
      return await client.get(`/me`);
    },
  };
};
