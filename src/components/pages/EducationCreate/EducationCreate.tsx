import React from 'react';

import { Box, Button, Flex, Heading } from '@/components/atoms';
import { Layout } from '@/components/layouts';

export const EducationCreate = (): JSX.Element => {
  return (
    <Layout>
      <Flex bg="#EBEBEB" h="100vh" justifyContent="center" alignItems="center">
        <Box
          bg="white"
          borderRadius={20}
          minW={900}
          px={8}
          py={10}
          boxShadow="lg"
        >
          <Flex mb={3} alignItems="center">
            <Box>
              <Heading size="lg">Add new record</Heading>
            </Box>
            <Box ml="auto">
              <Button>Create</Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};
