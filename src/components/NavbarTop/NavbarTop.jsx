import { Burger, Center, Container, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './NavbarTop.module.css';

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
            <Link
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <Link to={link.linka}> <span className={classes.linkLabel}>{link.label}</span></Link>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>

        </Menu>

      );
    }

    return (
      <Link
        key={link.label}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        <Link to={link.linka}>{link.label}</Link>
      </Link>
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
          <Link to={"/cart"}>
            <div className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
            </div></Link>
        </div>
      </Container>
    </header>
  );
}