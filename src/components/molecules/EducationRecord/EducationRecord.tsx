import React from 'react';

import { _EducationRecord } from '@/domain/entities';

import { Box, Flex, Heading, Text } from '@/components/atoms';

export interface Props {
  educationRecord: _EducationRecord;
}

export const EducationRecord = (props: Props): JSX.Element => {
  return (
    <Flex
      as="article"
      py={4}
      borderBottomStyle="solid"
      borderBottomColor="gray.300"
      borderBottomWidth={2}
      pb={10}
      mb={4}
      _last={{ mb: 0 }}
    >
      <Box mr={8}>image</Box>
      <Box>
        <Heading size="md" mb={3}>
          {props.educationRecord.name}
        </Heading>
        <Text>{props.educationRecord.school}</Text>
        <Text>{props.educationRecord.place}</Text>
        <Text>{props.educationRecord.period}</Text>
      </Box>
    </Flex>
  );
};
