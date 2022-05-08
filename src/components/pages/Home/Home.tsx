import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteConfig } from '@/config';

import { Box } from '@/components/atoms';

import { useAuth } from '@/hooks';

export const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const { checkAuth, isAuthenticated } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(RouteConfig.educations);
    } else {
      navigate(RouteConfig.login);
    }
  }, [isAuthenticated, navigate]);

  return <Box as="section"></Box>;
};
