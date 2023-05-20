import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { FC } from 'react';

import { TextUnderline } from '@/components/TextUnderline';
import { HeroComponents } from '@/components/HomepageSections/HeroComponents';

interface HeroProps {
  categoriesCount: number;
  templatesCount?: number;
}

const Feature: FC = ({ children, ...rest }) => {
  return (
    <Stack direction={'row'} align={'center'} {...rest}>
      <Icon as={IoCheckmarkSharp} color={'green.400'} w={5} h={5} />
      <Text color={'gray.500'} fontWeight={600}>
        {children}
      </Text>
    </Stack>
  );
};

export const Hero = ({ categoriesCount, templatesCount }: HeroProps) => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      css={{
        backgroundAttachment: 'fixed',
      }}>
      <Stack
        as={Container}
        maxW={'7xl'}
        h={{ base: '100%', lg: '100vh' }}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={'center'}>
        <Stack spacing={12} mb={{ base: 12, lg: 0 }} flex={2}>
          <Heading
            as={'h2'}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            maxW={'2xl'}>
            <TextUnderline>Presidential Initiative</TextUnderline> for Artificial Intelligence & Computing (PIAIC)
          </Heading>
          <Stack spacing={5}>
            <Text color={'gray.500'} fontSize={{ md: 'lg' }} maxW={'2xl'}>
              The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
            </Text>
          </Stack>
        </Stack>
        <HeroComponents />
      </Stack>
    </Box>
  );
};
