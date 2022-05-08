import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteConfig } from '@/config';

import { Box } from '@/components/atoms';
import { TopBar } from '@/components/molecules';

import { useAuth } from '@/hooks';

export interface Props {
  children: ReactNode;
}

export const Layout = (props: Props): JSX.Element => {
  const { isAuthenticated, checkAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(RouteConfig.login);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <Box as="section">
      <TopBar />
      <Box as="main">{props.children}</Box>
    </Box>
  );
};
