import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import images1 from '../images/english.png';
import images2 from '../images/french.png';
import images3 from '../images/german.png';
import images4 from '../images/italian.png';
import images5 from '../images/polish.png';
import classes from './LanguagePicker.module.css';

const data = [
  { label: 'English', image: images1 },
  { label: 'German', image: images2 },
  { label: 'Italian', image: images3 },
  { label: 'French', image: images4 },
  { label: 'Polish', image: images5 },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={18} height={18} className={classes.languages_images} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      <span className={classes.label}>{item.label}</span>
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs" className='language'>
            <Image src={selected.image} className={classes.images} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
