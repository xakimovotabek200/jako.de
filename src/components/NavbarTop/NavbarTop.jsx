import React, { useEffect, useState } from 'react';
import {
  Box,
  Burger,
  Center,
  Group,
  HoverCard,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconHeart, IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { LanguagePicker } from "./Languages/Language";
import Modalsearch from "./Modalsearch";
import classes from "./NavbarTop.module.css";
import axios from 'axios';
import { toast } from 'react-toastify';

function NavbarTop() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure();
  const theme = useMantineTheme();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.abdullajonov.uz/legend-backend-api/api/parent-category/get');
      const data = response.data.data;
      setData(data);
    } catch (error) {
      toast("error", { type: "error" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/">
            <img
              style={{ width: "160px", height: "50px" }}
              src="https://cdn.jako.de/userdata/images/Basics/logo-blue.svg"
              alt=""
            />
          </Link>
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          {
            data.map((item) => {
              return (
                <Group key={item.id} h="100%" gap={0} visibleFrom="sm">
                  <Link to="/offer" className={classes.link}>
                    <HoverCard
                      width={600}
                      position="bottom"
                      radius="md"
                      shadow="md"
                      withinPortal
                    >
                      <HoverCard.Target>
                        <Link to="/offer" className={classes.link}>
                          <Center inline>
                            <Box component="span" mr={5}>
                              {item.name}
                            </Box>
                            <IconChevronDown
                              style={{ width: rem(16), height: rem(16) }}
                              color={theme.colors.blue[6]}
                            />
                          </Center>
                        </Link>
                      </HoverCard.Target>
                      {
                        item.child_categories.map((child) => {
                          return (
                            <HoverCard.Dropdown key={child.id} style={{ overflow: "hidden" }}>
                              <h1>{child.name}</h1>
                              <div>
                                {
                                  item.child_categories_type.map((cad_type) => {
                                    return (
                                      <h1 key={cad_type.id}>{cad_type.name}</h1>
                                    )
                                  })
                                }
                              </div>
                            </HoverCard.Dropdown>
                          )
                        })
                      }
                    </HoverCard>
                  </Link>
                </Group>

              );
            })
          }
          <div className={classes.navbartop_language}>
            <Modalsearch />
            <LanguagePicker />
            <Link to="/cart">
              <div className="cursor-pointer">
                <IconShoppingCart />
              </div>
            </Link>
            <Link to="/wishes">
              <IconHeart />
            </Link>
          </div>
        </Group>
      </header>
    </Box>
  );
}

export default NavbarTop;
