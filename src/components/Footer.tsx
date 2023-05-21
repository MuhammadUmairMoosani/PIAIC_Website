import {
  Container,
  Icon,
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Image,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  FIGMA_LINK,
} from '../constants';
import { Logo } from '@/components/Logo';
import { PhoneIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';

const SOCIAL_LINKS = [
  {
    label: 'Discord Community',
    href: DISCORD_INVITE_LINK,
  },
  {
    label: 'GitHub Repository',
    href: GITHUB_LINK,
  },
  {
    label: 'Twitter Account',
    href: TWITTER_LINK,
  },
  {
    label: 'Figma Design Resources',
    href: FIGMA_LINK,
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};













const navData = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Apply",
    link: "https://portal.piaic.org/signup",
  },
  {
    text: "How it works",
    link: "https://www.piaic.org/howitworks",
  },
  {
    text: "Artificial Intelligence",
    link: "https://www.piaic.org/artificial-inteligence",
  },
  {
    text: "Cloud Native and Mobile Web Computing",
    link: "https://www.piaic.org/cloud-native",
  },
  {
    text: "Blockchain",
    link: "https://www.piaic.org/block-chain",
  },
  {
    text: "Internet of Things and AI",
    link: "https://www.piaic.org/iot",
  },
  {
    text: "About The President",
    link: "https://www.piaic.org/about",
  },
  {
    text: "Management Committee",
    link: "https://www.piaic.org/managementcommittee",
  },
  {
    text: "Women Inclusion in Technology(WIT)",
    link: "https://www.piaic.org/wit",
  }
]

export const Footer = () => {
  return (
    <Box bg={useColorModeValue('green.50', 'gray.800')}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Heading fontSize={20} mb="5">
              Navigation
            </Heading>
            {navData.map(item => <NextLink key={`${item.text}`} href={item.link} passHref>
              <Text fontSize={'sm'} lineHeight="8">
                {item.text}
              </Text>
            </NextLink>
            )}
          </Box>


          <Box>
            <Heading fontSize={20} mb="5">
              Locations
            </Heading>
            <Text fontSize={'sm'} lineHeight="8" fontWeight="bold">
              PIAIC Helpline
            </Text>
            <Text fontSize={'sm'} lineHeight="8">
              <Icon color={'green.400'} w={4} h={4} mr="3" as={PhoneIcon} />
              +92-308-2220203 (WhatsApp as well)
            </Text>
            <Text fontSize={'sm'} lineHeight="8" fontWeight="bold">
              Connect with us
            </Text>
            <Box display="flex" mt="3">
              <NextLink href="https://www.facebook.com/groups/piaic/">
                <Image
                  alt={'Component Placeholder'}
                  src={`/images/facebook.png`}
                  width="10"
                  height="10"
                  mr="3"
                />
              </NextLink>
              <NextLink href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg">
                <Image
                  alt={'Component Placeholder'}
                  src={`/images/youtube.png`}
                  width="100"
                  height="12"
                  ml="3"
                />
              </NextLink>
            </Box>
          </Box>
        </SimpleGrid>














      </Container>
    </Box>
  );
};
