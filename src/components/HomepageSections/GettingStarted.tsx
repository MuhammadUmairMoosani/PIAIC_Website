import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TextUnderline } from '@/components/TextUnderline';
import MotionBox from '@/components/motion/MotionBox';
import NextLink from 'next/link';
import { useTransform, useViewportScroll } from 'framer-motion';

const STEPS = [
  {
    title: 'Artificial Intelligence',
    text:
      'A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.',
    link: "https://www.piaic.org/artificial-inteligence",
  },
  {
    title: 'Cloud Native and Mobile Web',
    text:
      'A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.',
    link: "https://www.piaic.org/cloud-native",
  },
  {
    title: 'Blockchain',
    text:
      "A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS",
    link: "https://www.piaic.org/block-chain",
  },
  {
    title: 'Internet of Things and AI',
    text:
      "A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF THINGS AND AI",
    link: "https://www.piaic.org/iot",
  },
];

export const GettingStarted = () => {
  const bg1 = useColorModeValue('gray.50', 'gray.900');
  const bg2 = useColorModeValue('white', 'gray.800');
  const color1 = useColorModeValue('gray.700', 'white');
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { scrollYProgress } = useViewportScroll();

  const offsetFirst = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const offsetSecond = useTransform(scrollYProgress, [0.2, 1], [0, -500]);
  const offsetThird = useTransform(scrollYProgress, [0.4, 1], [0, -500]);
  const offsetFourth = useTransform(scrollYProgress, [0.6, 1], [0, -500]);
  const offsets = [offsetFirst, offsetSecond, offsetThird, offsetFourth];
  const widths = [384, 320, 288, 256];
  const cardAnimationVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <Box bg={bg1} mt={[200, 0]}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 20 }}>
        <Heading as={'h3'} textAlign={'center'} mb={{ base: 14, sm: 0 }}>
          Available Programs
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          align={{ base: 'center', md: 'flex-start' }}>
          {STEPS.map((step, index) => (
            <NextLink key={`${index}`} href={step.link} passHref>
              <MotionBox
                w={{ base: '100%', md: 0 }}
                h={295}
                mb={20}
                initial={'initial'}
                animate={'show'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                position={'relative'}
                transition={{ staggerChildren: 0.15 }}>
                {[0].map((i) => (
                  <MotionBox
                    key={i}
                    style={{ translateY: isMobile ? 0 : offsets[i] }}
                    opacity={0}
                    position={["", 'absolute']}
                    bottom={0}
                    mb={[0, -40]}
                    variants={cardAnimationVariants}
                    justify={'center'}
                    align={'center'}
                    flex={1}
                    p={8}
                    bg={bg2}
                    rounded={'3xl'}
                    boxShadow={'xl'}
                    w={{ base: `${100 - i * 10}%`, sm: widths[i] }}
                    zIndex={4 - i}>
                    <Stack
                      textAlign={{ base: 'left', md: 'center' }}
                      align={{ base: 'flex-start', md: 'center' }}
                      spacing={4}
                      key={step.title}
                      maxW={{ base: 'full', md: 'xs' }}
                      mt={{ base: 10, md: 0 }}
                      _first={{
                        mt: 0,
                      }}
                    >
                      <Text
                        fontFamily={'heading'}
                        fontSize={'xl'}
                        color={color1}>
                        {step.title}
                      </Text>
                      <Text color={'gray.500'}>{step.text}</Text>
                    </Stack>
                  </MotionBox>
                ))}
              </MotionBox>
            </NextLink>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
