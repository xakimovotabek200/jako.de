import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  Modal,
  ScrollArea,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconHeart,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LanguagePicker from "./Languages/Language";
import Legend from "./Legend.png";
import classes from "./NavbarTop.module.css";
import Modalsearch from "./Modalsearch";

function NavbarTop() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure();
  const [modalOpened, { toggle: toggleModal, close: closeModal }] =
    useDisclosure();

  const theme = useMantineTheme();
  const [data, setData] = useState([]);
  const [childData, setChildData] = useState([]);

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { products } = useSelector((state) => state.orebiReducer);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.abdullajonov.uz/legend-backend-api/api/parent-category/get"
      );
      const data = response.data.data;
      setData(data);
    } catch (error) {
      toast.error("Error", { type: "error" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios.get(
          "https://api.abdullajonov.uz/legend-backend-api/api/child-category/get"
        );
        const data = response.data.data;
        setChildData(data);
      } catch (error) {
        toast.error("salom");
      }
    };
    fetchDatas();
  }, []);

  return (
    <Box pb={20} className="">
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
                {/* Removed unnecessary Link */}
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
                        <Box component="" mr={5}>
                          {item.name}
                          <HoverCard.Dropdown>
                            <div className="capitalize">
                              {item.child_categories_type.map((child) => (
                                <div key={child.id}>
                                  <Link
                                    to={`products/${item.slug}`}
                                    className="text-center font-semibold capitalize"
                                  >
                                    <h1>{child.name}</h1>
                                  </Link>
                                  <hr />
                                  {Array.isArray(childData) &&
                                    childData.map((item) => {
                                      return (
                                        <Link
                                          key={item.id}
                                          to={`products/${item.slug}`}
                                        >
                                          <p className="capitalize">
                                            {item.name}
                                          </p>
                                          <br />
                                        </Link>
                                      );
                                    })}
                                </div>
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
              </Group>
            ))}
          <div className={`-ml-[10px] md:salom ${classes.navbartop_language}`}>
            <LanguagePicker />
            <Modal
              size="calc(100vw - 3rem)"
              opened={modalOpened}
              onClose={closeModal}
              padding="md"
            >
              <Modalsearch />
            </Modal>
            <Button onClick={toggleModal} className="text-black">
              <IconSearch />
            </Button>
            <Link to="/cart">
              <div className="cursor-pointer flex">
                <IconShoppingCart />
                <p
                  className={`md:absolute font-titleFont top-3 right-14 text-xs w-4 h-4 flex items-center justify-center rounded-full ${products.length > 0 ? "bg-[#008ac9]" : ""
                    } text-white`}
                >
                  {products.length > 0 && products.length}
                </p>
              </div>
            </Link>
            <div className="">
              <Link className="md:block" to="/wishes">
                <IconHeart />
              </Link>
            </div>
          </div>
        </Group>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>
              <div className="w-[100px]">
                <img src={Legend} alt="" />
              </div>{" "}
            </Drawer.Title>
            <Drawer.CloseButton className="mr-5" />
          </Drawer.Header>
          <Drawer.Body>
            {data.length > 0 &&
              data.map((item) => (
                <Group key={item.id} h="100%" gap={0} visibleFrom="">
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
                            <Box component="" mr={5}>
                              {item.name}
                              <HoverCard.Dropdown>
                                <div className="capitalize">
                                  {item.child_categories_type.map((child) => (
                                    <div key={child.id}>
                                      <Link
                                        to={`products/${item.slug}`}
                                        className="text-center font-semibold capitalize"
                                      >
                                        <h1>{child.name}</h1>
                                      </Link>
                                      <hr />
                                      {Array.isArray(childData) &&
                                        childData.map((item) => {
                                          return (
                                            <Link
                                              key={item.id}
                                              to={`products/${item.slug}`}
                                            >
                                              <p className="capitalize">
                                                {item.name}
                                              </p>
                                              <br />
                                            </Link>
                                          );
                                        })}
                                    </div>
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
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
    </Box>
  );
}

export default NavbarTop;
