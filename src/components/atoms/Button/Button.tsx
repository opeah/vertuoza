import React, { forwardRef } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export interface Props extends ButtonProps {}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (props, ref): JSX.Element => {
    return <ChakraButton ref={ref} {...props} />;
  }
);
