import React, { forwardRef } from 'react';
import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

export interface Props extends InputProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    return <ChakraInput ref={ref} {...props} />;
  }
);
