import React from 'react';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import { DtoLoginForm } from '@/domain/dto';

import { Box, Button, Flex, Heading, Input } from '@/components/atoms';

export const LoginForm = (): JSX.Element => {
  const { handleSubmit, register } = useForm<DtoLoginForm>({
    resolver: classValidatorResolver(DtoLoginForm),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

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
            <Input {...register(`email`)} />
          </Box>
          <Box mb={7}>
            <Input {...register(`password`)} />
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
