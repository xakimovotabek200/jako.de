import React, { useState } from 'react';
import { useDisclosure } from "@mantine/hooks";
import { Modal, Input, Flex, Space } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import axios from 'axios';

function Modalsearch() {
  const [opened, { open, close }] = useDisclosure(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const search = async () => {
    const options = {
      method: 'GET',
      url: `https://api.abdullajonov.uz/legend-backend-api/api/search?q=${searchQuery}`,
      headers: { Accept: 'application/json' }
    };

    try {
      const response = await axios.request(options);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <Space fullScreen />
        <Flex direction={{ base: "column", sm: "row" }} gap="sm" align="center">
          <Input
            className="mx-auto w-[500px]"
            type="search"
            icon={<IconSearch size={18} style={{ cursor: "pointer" }} />}
            placeholder="Search"
            radius="xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                search();
              }
            }}
          />
        </Flex>
        {searchResults.map((result, index) => (
          <div key={index}>{result.name}</div>
        ))}
      </Modal>
      <IconSearch onClick={open} className="search cursor-pointer" />
    </>
  );
}

export default Modalsearch;
