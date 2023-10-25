import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Input, Flex, Space } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";
import './ModalSerach.css'

function Modalsearch() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        zIndex={9999}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Space fullScreen />
        <Flex direction={{ base: "column", sm: "row" }} gap="sm" align="center">
          <Input
            icon={<IconSearch size={18} style={{ cursor: 'pointer' }}/>}
            placeholder="Search"  
            radius="xl"
          />
        </Flex>
      </Modal>
      <IconSearch onClick={open} className='search' />
      <Input
        icon={<IconSearch size={18} style={{ cursor: 'pointer' }} />}
        placeholder="Search"
        radius="xl"
        className='media_search'
        onClick={open}
      />
    </>
  );
}

export default Modalsearch