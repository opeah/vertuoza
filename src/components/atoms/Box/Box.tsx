import React, { forwardRef } from 'react';
import { Box as ChakraBox, BoxProps } from '@chakra-ui/react';

export interface Props extends BoxProps {}

export const Box = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    return <ChakraBox ref={ref} {...props} />;
  }
);
