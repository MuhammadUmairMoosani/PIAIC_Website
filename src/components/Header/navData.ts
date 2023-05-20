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
    label: 'How It works',
    children: data.map((category) => ({
      label: category.name,
      subLabel: category.subLabel,
      href: `/${category.id}/${category.children?.[0].id}`,
    })),
  },
  {
    label: 'Apply',
    href: CONTRIBUTE_LINK,
  },
  {
    label: 'Available Programs',
    href: GITHUB_LINK,
  },
  {
    label: 'About',
    href: DISCORD_INVITE_LINK,
  },
    {
    label: 'WIT',
    href: DISCORD_INVITE_LINK,
  },
];
