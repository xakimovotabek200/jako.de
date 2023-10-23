import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Input, Flex, Space } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";

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
        <Space h="md" />
        <Flex direction={{ base: "column", sm: "row" }} gap="sm" align="center">
          <Input
            icon={<IconSearch size={18} />}
            placeholder="Search"
            radius="xl"
          />
        </Flex>
      </Modal>
      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

export default Modalsearch