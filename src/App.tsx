import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { RouteConfig } from '@/config';

import { EducationCreate, Educations, Home, Login } from '@/components/pages';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route path={RouteConfig.home} element={<Home />} />
            <Route path={RouteConfig.login} element={<Login />} />
            <Route path={RouteConfig.educations} element={<Educations />} />
            <Route
              path={RouteConfig.educationCreate}
              element={<EducationCreate />}
            />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);
