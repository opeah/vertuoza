import React, { forwardRef } from 'react';
import { Flex as ChakraFlex, FlexProps } from '@chakra-ui/react';

export interface Props extends FlexProps {}

export const Flex = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    return <ChakraFlex ref={ref} {...props} />;
  }
);
