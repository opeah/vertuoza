import React, { forwardRef } from 'react';
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react';

export interface Props extends HeadingProps {}

export const Heading = forwardRef<HTMLDivElement, Props>(
  (props, ref): JSX.Element => {
    return <ChakraHeading ref={ref} {...props} />;
  }
);
