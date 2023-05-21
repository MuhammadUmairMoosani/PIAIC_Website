import {
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  SimpleGrid,
  Wrap,
  WrapItem,
  Link,
  Tooltip,
  Flex,
  useColorModeValue,
  Box,
  Image,
  useBreakpointValue
} from '@chakra-ui/react';
import NextImage from 'next/image';
import {
  IoStar,
  IoExtensionPuzzle,
  IoMedal,
  IoBookmarks,
} from 'react-icons/io5';
import { AspectRatio } from '@chakra-ui/react'
import SimpleImageSlider from "react-simple-image-slider";
import { CONTRIBUTORS_LINK, GITHUB_LINK } from '../../constants';
import { TextUnderline } from '@/components/TextUnderline';

export interface Contributor {
  login: string;
  name: string;
  avatar_url: string;
  profile: string;
  contributions: string[];
}

export type OpenSourceProps = {
  contributors: Contributor[];
  stargazers: {};
  categoriesCount: number;
  templatesCount?: number;
};

export const OpenSource = ({
  contributors,
  stargazers,
  categoriesCount,
  templatesCount,
}: OpenSourceProps) => {
  const STATS = [
    {
      icon: IoStar,
      label: 'GitHub Stars',
      count: 0,
    },
    {
      icon: IoExtensionPuzzle,
      label: 'Templates',
      count: templatesCount,
    },
    {
      icon: IoMedal,
      label: 'Contributors',
      count: contributors.length,
    },
    {
      icon: IoBookmarks,
      label: 'Categories',
      count: categoriesCount,
    },
  ];

  const images = [
    { url: "/images/slider1.png" },
    { url: "/images/slider2.png" },
    { url: "/images/slider3.png" },
  ];

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      {/* Videos */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={[10, 20]} mt={[10, 20]}>
        <Stack spacing={4}>
          <Heading as={'h3'} mb={2}>
            <TextUnderline>PIAIC</TextUnderline>{" "}
            Offering Free First Quarter Classes Online
          </Heading>
          <Text color={'gray.500'} maxW={'4xl'} fontSize={{ md: 'lg' }}>
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies.
          </Text>
        </Stack>

        <Flex justify={'center'} align={'center'}>
          <Box
            w={isMobile ? 350 : 600}
            h={300}
            borderRadius={10}
            overflow="hidden"
            id="video-box"
          >

            <AspectRatio ratio={1} >
              <iframe
                src="https://www.youtube.com/embed/m4g0zd4E_bo"
                title="PIAIC offering free first quarter classes online"
                style={{ width: isMobile ? 350 : 600, height: 300 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

              </iframe>
            </AspectRatio>
          </Box>
        </Flex>
      </SimpleGrid>
      {/* Images */}
      <Box style={{ marginTop: 100, marginBottom: 20, position: "relative" }}>
        <SimpleImageSlider

          width={"100%"}
          height={isMobile ? 170 : 800}
          images={images}
          showBullets={isMobile ? false : true}
          showNavs={true}
          autoPlay={true}

        />
      </Box>
      <Stack spacing={4}>
        <Box textAlign="center" mb="20">
          <Heading as={'h3'} mb={10} mt="10">
            Strategic Partners
          </Heading>
          <Box display="flex" justifyContent="center">
            <Image
              alt={'Component Placeholder'}
              src={`/images/panacloud.png`}
              width="100"
              height="50"
              mr={[0, 10]}
            />
            <Image
              alt={'Component Placeholder'}
              src={`/images/saylani.png`}
              width="100"
              height="50"
              mr={[0, 10]}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
};
