import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteConfig } from '@/config';

import { toEducationRecord } from '@/domain/mappings/toEducationRecord';

import { Box, Button, Flex, Heading } from '@/components/atoms';
import { EducationRecord } from '@/components/molecules';
import { Layout } from '@/components/layouts';

import { useEducationRecordsQuery } from '@/hooks';

import { useAuthSate } from '@/state';

export const Educations = (): JSX.Element => {
  const [{ userId }] = useAuthSate();
  const { data: educationRecords } = useEducationRecordsQuery(userId || ``);
  const navigate = useNavigate();

  const renderEducations = educationRecords
    ?.map(toEducationRecord)
    .map((educationRecord) => (
      <EducationRecord
        key={educationRecord.id}
        educationRecord={educationRecord}
      />
    ));

  const onClick = () => {
    navigate(RouteConfig.educationCreate);
  };

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
              <Heading size="md">Education records</Heading>
            </Box>
            <Box ml="auto">
              <Button onClick={onClick}>Create</Button>
            </Box>
          </Flex>
          <Box>{renderEducations}</Box>
        </Box>
      </Flex>
    </Layout>
  );
};
