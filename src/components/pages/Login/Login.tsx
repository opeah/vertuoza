import React from 'react';

import { Box } from '@/components/atoms';

import { LoginForm } from './LoginForm';

export interface Props {}

export const Login = (): JSX.Element => {
  return (
    <Box as="section">
      <LoginForm />
    </Box>
  );
};
