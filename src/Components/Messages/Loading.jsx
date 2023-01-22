import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';
import { SpinnerIcon } from '@chakra-ui/icons';

const Loading = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
          <SpinnerIcon boxSize={'50px'} color={'blue.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Loading
          </Heading>
          <Text color={'gray.500'}>
           Please Wait!
          </Text>
        </Box>
      );
}

export default Loading