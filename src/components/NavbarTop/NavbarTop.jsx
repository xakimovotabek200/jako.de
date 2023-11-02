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
import {
  IconChevronDown,
  IconHeart,
  IconShoppingCart,
} from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LanguagePicker } from "./Languages/Language";
import Legend from "./Legend.png";
import Modalsearch from "./Modalsearch";
import classes from "./NavbarTop.module.css";

const options = {
  method: 'GET',
  url: 'https://api.abdullajonov.uz/legend-backend-api/api/child-category/get',
  headers: { Accept: 'application/json' }
};
const optionss = {
  method: 'GET',
  url: 'https://api.abdullajonov.uz/legend-backend-api/api/child-category/get',
  headers: { Accept: 'application/json' }
};

function NavbarTop() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure();
  const theme = useMantineTheme();
  const [data, setData] = useState([]);
  const [childData, setChildData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.abdullajonov.uz/legend-backend-api/api/parent-category/get"
      );
      const data = response.data.data;
      setData(data);
      console.log(data, "navdata");
    } catch (error) {
      toast.error("Error", { type: "error" });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const { data } = await axios.request(options);
        setChildData(data.data)
      } catch (error) {
        toast.error("salom")
      }
    };
    fetchDatas();
  }, [])

  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/">
            <img
              style={{ width: "160px", height: "50px", objectFit: "contain" }}
              src={Legend}
              alt=""
            />
          </Link>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
          {data.length > 0 &&
            data.map((item) => (
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
                            <HoverCard.Dropdown>
                              <div className="">
                                {item.child_categories_type.map((child) => (
                                  <Link
                                    key={child.id}
                                    to={`/${child.slug}`}
                                  >
                                    <h1>{child.name}</h1>
                                    <hr />
                                  </Link>
                                ))}
                              </div>
                            </HoverCard.Dropdown>
                          </Box>
                          <IconChevronDown
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.blue[6]}
                          />
                        </Center>
                      </Link>
                    </HoverCard.Target>
                  </HoverCard>
                </Link>
              </Group>
            ))}
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
