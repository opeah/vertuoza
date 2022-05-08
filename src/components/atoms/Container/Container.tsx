import React, { forwardRef } from 'react';
import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react';

export interface Props extends ContainerProps {}

export const Container = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    return <ChakraContainer ref={ref} {...props} />;
  }
);
