import React from 'react';

import { Box, BoxProps, Flex, Heading, Text } from '@/components/atoms';

import { useAuth } from '@/hooks';

export interface Props extends BoxProps {}

export const TopBar = (props: Props): JSX.Element => {
  const { userId } = useAuth();

  return (
    <Box bg="white" position="sticky" top={0} {...props}>
      <Flex py={8} px={5}>
        <Box>
          <Heading size="md">My education</Heading>
        </Box>
        <Box ml="auto">
          <Text>Logged in as {userId}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
