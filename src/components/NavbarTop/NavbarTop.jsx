<<<<<<< HEAD
import React from "react";
import "./NavbarTop.css";
import fan from "./fan.jpg";
import fan1 from "./fan4.jpg";
import fan2 from "./fan2.jpg";
import fan3 from "./fan3.jpg";
import { Link } from "react-router-dom";
const NavbarTop = () => {
  return (
      <div className="navbar-top">
        <div className="navbar-top-logo">
          <img
            className="logo-img"
            src="https://cdn.jako.de/userdata/images/Basics/logo-blue.svg"
            alt=""
          />
          <ul className="navbar-top-ul-collection">
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Men</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">SPORTSWEAR</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Tights</li>
                        <li>Tops</li>
                        <li>Training jackets</li>
                        <li>Training trousers</li>
                        <li>Functional underwear</li>
                        <li>Jerseys</li>
                        <li>Sport shorts</li>
                        <li>Hoodies Sweatshirts</li>
                        <li>Polo shirts</li>
                        <li>Jackets</li>
                        <li>Training suits</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAsics</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Polo shirts</li>
                        <li>Hooded jackets</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Shorts</li>
                        <li>Trousers</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">ACCESSOIRES</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Stirrups</li>
                        <li>Socks</li>
                        <li>Gloves</li>
                        <li>Hats</li>
                        <li>Neckwarmer</li>
                        <li>Caps</li>
                        <li>Flip-flops</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">COLLECTION</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Power</li>
                        <li>Pro Casual</li>
                        <li>Performance</li>
                        <li>Challenge</li>
                        <li>Champ 2.0</li>
                        <li>Base</li>
                        <li>Striker 2.0</li>
                        <li>Classico</li>
                        <li>Premium</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Women</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">SPORTSWEAR</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Tights</li>
                        <li>Tops</li>
                        <li>Training jackets</li>
                        <li>Training trousers</li>
                        <li>Functional underwear</li>
                        <li>Jerseys</li>
                        <li>Sport shorts</li>
                        <li>Hoodies Sweatshirts</li>
                        <li>Polo shirts</li>
                        <li>Jackets</li>
                        <li>Training suits</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAsics</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Polo shirts</li>
                        <li>Hooded jackets</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Shorts</li>
                        <li>Trousers</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">ACCESSOIRES</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Stirrups</li>
                        <li>Socks</li>
                        <li>Gloves</li>
                        <li>Hats</li>
                        <li>Neckwarmer</li>
                        <li>Caps</li>
                        <li>Flip-flops</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">COLLECTION</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Power</li>
                        <li>Pro Casual</li>
                        <li>Performance</li>
                        <li>Challenge</li>
                        <li>Champ 2.0</li>
                        <li>Base</li>
                        <li>Striker 2.0</li>
                        <li>Classico</li>
                        <li>Premium</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary> <Link to="/kids">Kids</Link></summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">SPORTSWEAR</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Training jackets</li>
                        <li>Functional underwear</li>
                        <li>Training suits</li>
                        <li>Training trousers</li>
                        <li>Jerseys</li>
                        <li>Sport shorts</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Polo shirts</li>
                        <li>Jackets</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAsics</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>T-Shirts</li>
                        <li>Polo shirts</li>
                        <li>Hooded jackets</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Shorts</li>
                        <li>Trousers</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">ACCESSOIRES</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Stirrups</li>
                        <li>Socks</li>
                        <li>Gloves</li>
                        <li>Hats</li>
                        <li>Neckwarmer</li>
                        <li>Caps</li>
                        <li>Flip-flops</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">COLLECTION</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Power</li>
                        <li>Performance</li>
                        <li>Challenge</li>
                        <li>Champ 2.0</li>
                        <li>Base</li>
                        <li>Striker 2.0</li>
                        <li>Classico</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Equipment</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <h4 className="dropdown-header">HIGHLIGHTS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>New Hits</li>
                        <li>Bestseller</li>
                        <li>Product of the month</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BAGS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Sport bag</li>
                        <li>Toilet bag</li>
                        <li>Team-kit bag</li>
                        <li>Backpacks</li>
                        <li>Gym bags</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">BALLS</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Footballs</li>
                        <li>Futsal</li>
                        <li>Mini ball</li>
                        <li>Ball accessoires</li>
                      </ul>
                    </div>
                    <div className="dropdown_2">
                      <h4 className="dropdown-header">FURTHER</h4>
                      <hr className="dropdown-line" />
                      <ul className="dropdown-items">
                        <li>Shin guards</li>
                        <li>Goalkeeper gloves</li>
                        <li>Sports shoes</li>
                        <li>Training equipment</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Fan Shops</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <div className="fanshop">
                        <img src={fan} alt="" />
                      </div>
                      <h4 className="dropdown-headers">HIGHLIGHTS</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan1} alt="" />
                      </div>
                      <h4 className="dropdown-headers">BAGS</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan2} alt="" />
                      </div>
                      ``
                      <h4 className="dropdown-headers">BALLS</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan3} alt="" />
                      </div>
                      <h4 className="dropdown-headers">FURTHER</h4>
                      <hr className="dropdown-lines" />
                    </div>
                  </div>
                </details>
              </a>
            </li>
            <li className="navbar-top-item">
              <a className="navbar-top-item-a" href="#">
                <details>
                  <summary>Sale</summary>
                  <div className="dropdown">
                    <div className="dropdown_1">
                      <div className="fanshop">
                        <img src={fan} alt="" />
                      </div>
                      <h4 className="dropdown-headers">VFB Stuttgart</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan1} alt="" />
                      </div>
                      <h4 className="dropdown-headers">Mainz 05</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan2} alt="" />
                      </div>
                      <h4 className="dropdown-headers">Preußen Münster</h4>
                      <hr className="dropdown-lines" />
                    </div>
                    <div className="dropdown_2">
                      <div className="fanshop">
                        <img src={fan3} alt="" />
                      </div>
                      <h4 className="dropdown-headers">Rot-Weiss Essen</h4>
                      <hr className="dropdown-lines" />
                    </div>
                  </div>
                </details>
              </a>
            </li>
          </ul>
=======
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
>>>>>>> 93a5a0ce065959539f83e7bea0ba23092f2d0201
        </div>
        <div className="icons"></div>
      </div>
  );
};

export default NavbarTop;
