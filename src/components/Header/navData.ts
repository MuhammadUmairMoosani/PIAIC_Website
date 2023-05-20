import {
  CONTRIBUTE_LINK,
  DISCORD_INVITE_LINK,
  GITHUB_LINK,
} from '../../constants';
import { data } from '../../data';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'How It Works',
    href: "https://www.piaic.org/howitworks",
  },
  {
    label: 'Apply',
    href: "https://portal.piaic.org/signup",
  },
  {
    label: 'Available Programs',
    children: [
      {
        name: 'Artificial Intelligence',
        subLabel: '',
        id: 'page-sections',
        link: "https://www.piaic.org/artificial-inteligence",
      },
      {
        name: 'Cloud Native and Mobile Web Computing',
        subLabel: '',
        id: 'page-sections',
        link: "https://www.piaic.org/cloud-native",
      },
      {
        name: 'Blockchain',
        subLabel: '',
        id: 'page-sections',
        link: "https://www.piaic.org/block-chain",
      },
      {
        name: 'Internet Of Things',
        subLabel: '',
        id: 'page-sections',
        link: "https://www.piaic.org/iot",
      },
      {
        name: " Web 3.0 and Metaverse Developer ",
        subLabel: '',
        id: 'page-sections',
        link: "https://www.panaverse.co/",

      }
    ].map((category) => ({
      label: category.name,
      subLabel: category.subLabel,
      href: category.link,
    })),
  },
  {
    label: 'About',
    children: [
      {
        name: 'The President',
        subLabel: '',
        id: 'page-sections',
      },
    ].map((category) => ({
      label: category.name,
      subLabel: category.subLabel,
      href: `https://www.piaic.org/about`,
    })),
  },
  {
    label: 'WIT',
    href: "https://www.piaic.org/wit",
  },
];
