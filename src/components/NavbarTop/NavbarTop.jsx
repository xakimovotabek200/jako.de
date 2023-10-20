import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import fan1 from "./fan4.jpg"
import classes from './NavbarTop.module.css';
import { Link } from 'react-router-dom';

const links = [
  {
    linka: "/men",
    label: 'Men',
    links: [
      { link: '/docs', label: 'HIGHLIGHTS' },
      { link: '/resources', label: 'New hits' },
      { link: '/community', label: 'Bestseller' },
      { link: '/blog', label: 'Blog' },
    ],
    linkss: [
      { link: '/docs', labels: 'dscbdsk' },
      { link: '/resources', labels: 'New hits' },
      { link: '/community', labels: 'Bestseller' },
      { link: '/blog', labels: 'Blog' },
    ],
  },
  {
    linka: '/women',
    label: 'Women',
    links: [
      {link: '/docs', label: 'HIGHLIGHTS' },
      {link: '/resources', label: 'New hits' },
      { link: '/community', label: 'Bestseller' },
      { link: '/blog', label: 'Blog' },
    ],
    linkss: [
      { link: '/docs', labels: 'dscbdsk' },
      { link: '/resources', labels: 'New hits' },
      { link: '/community', labels: 'Bestseller' },
      { link: '/blog', labels: 'Blog' },
    ],
  },
  {
    linka: "/kids",
    label: 'Kids',
    links: [
      { link: '/docs', label: 'HIGHLIGHTS' },
      { link: '/resources', label: 'New hits' },
      { link: '/community', label: 'Bestseller' },
      { link: '/blog', label: 'Blog' },
    ],
    linkss: [
      { link: '/docs', labels: 'dscbdsk' },
      { link: '/resources', labels: 'New hits' },
      { link: '/community', labels: 'Bestseller' },
      { link: '/blog', labels: 'Blog' },
    ],
  },
  {
    linka: '#4',
    label: 'Equipment',
    links: [
      { link: '/docs', label: 'HIGHLIGHTS' },
      { link: '/resources', label: 'New hits' },
      { link: '/community', label: 'Bestseller' },
      { link: '/blog', label: 'Blog' },
    ],
    linkss: [
      { link: '/docs', labels: 'dscbdsk' },
      { link: '/resources', labels: 'New hits' },
      { link: '/community', labels: 'Bestseller' },
      { link: '/blog', labels: 'Blog' },
    ],
  },
  {
    linka: '#5',
    label: 'Fan shops',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
  {
    linka: '/sale',
    label: 'Sale',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export default function NavbarTop() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));
    const menuItemss = link.linkss?.map((item) => (
      <Menu.Item key={item.link}>{item.labels}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <Link to={link.linka}> <span className={classes.linkLabel}>{link.label}</span></Link>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
        <a
          key={link.label}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
        <Link to={link.linka}>{link.label}</Link>
        </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Link to="/"><img className={classes.images} src="https://cdn.jako.de/userdata/images/Basics/logo-blue.svg" alt="" /></Link>
          <Group gap={30} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}