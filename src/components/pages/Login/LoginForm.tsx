import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import { RouteConfig } from '@/config';

import { DtoLoginForm } from '@/domain/dto';

import { Box, Button, Flex, Heading, Input } from '@/components/atoms';

import { useAuth, useLoginMutation } from '@/hooks';

export const LoginForm = (): JSX.Element => {
  const { accessToken, userId, handleAuth, set } = useAuth();
  const { mutateAsync: login } = useLoginMutation();
  const { handleSubmit, register } = useForm<DtoLoginForm>({
    resolver: classValidatorResolver(DtoLoginForm),
  });
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const { token } = await login(data);
    handleAuth(token);
  });

  useEffect(() => {
    if (accessToken && userId) {
      set((S) => ({
        ...S,
        isAuthenticated: true,
      }));
      navigate(RouteConfig.educations);
    }
  }, [accessToken, navigate, set, userId]);

  return (
    <Flex
      as="section"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg="#EBEBEB"
    >
      <Box
        bg="white"
        borderRadius={20}
        minW={400}
        px={8}
        py={10}
        boxShadow="lg"
      >
        <Box textAlign="center" mb={7}>
          <Heading>Please log-in</Heading>
        </Box>
        <form onSubmit={onSubmit}>
          <Box mb={4}>
            <Input type="email" {...register(`email`)} />
          </Box>
          <Box mb={7}>
            <Input type="password" {...register(`password`)} />
          </Box>
          <Box>
            <Button type="submit" w="100%">
              Log-in
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};
