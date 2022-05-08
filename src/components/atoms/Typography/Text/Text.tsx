import React, { forwardRef } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';

export interface Props extends TextProps {}

export const Text = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    return <ChakraText ref={ref} {...props} />;
  }
);
