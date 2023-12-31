import { HoverCard, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Button, Form } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Modalsearch = () => {
  const searchModal = useRef();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  async function handleSearch(value) {
    setLoading(true);
    try {
      let response = await axios.get(
        `https://api.abdullajonov.uz/legend-backend-api/api/search?query=${value?.q}`
      );
      setProducts(response?.data?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return;
    }
  }

  return (
    <div className="mt-12 md:container mx-auto">
      <dialog ref={searchModal} className="w-screen p-3 rounded-lg">
        <Form onFinish={handleSearch}>
          <h2>Mahsulorlarni izlash:</h2>
          <Form.Item name="q" required>
            <Input type="text" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="bg-blue-500"
              htmlType="submit"
              loading={loading}
              icon={<span className="fa-solid fa-search" />}
            >
              Izlash
            </Button>
          </Form.Item>
        </Form>
      </dialog>
      <Form onFinish={handleSearch}>
        <h2>Mahsulorlarni izlash:</h2>
        <Form.Item name="q" required>
          <Input type="text" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="bg-blue-500"
            htmlType="submit"
            loading={loading}
            icon={<span className="fa-solid fa-search" />}
          >
            Izlash
          </Button>
        </Form.Item>
      </Form>
      <div className="md:flex flex-wrap justify-around items-center ">
        {Array.isArray(products) &&
          products.map((item) => (
            <Link key={item.id} to={`/higtlightsId/${item.slug}`}>
              <HoverCard shadow="md" closeDelay={300}>
                <div className="">
                  <div key={item.id}>
                    <div className="flex justify-center items-center flex-wrap gap-6 p-8">
                      <div className="h-[500px] w-[300px] flex flex-col justify-between rounded-md overflow-hidden shadow-sm relative">
                        <img
                          src={`https://api.abdullajonov.uz/legend-backend-api/public/storage/images/${item.image}`}
                          alt="product-image"
                          className="h-[65%] w-[80%] object-cover mt-4 mr-auto ml-auto bg-slate-100 rounded-md"
                        />
                        <div className="p-5">
                          <div className="flex justify between">
                            <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
                              {item.category} &bull; {item.slug}
                            </div>
                            <h3 className="text-xl mb-2 mt-2">{item.title}</h3>
                            <p className="font-medium mb-2 text-sm text-gray-700">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-gray-800">
                                ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Modalsearch;
