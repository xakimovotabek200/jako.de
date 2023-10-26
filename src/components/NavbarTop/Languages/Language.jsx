import { Group, Image, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import images1 from '../images/english.png';
import images3 from '../images/german.png';
import images4 from '../images/italian.png';
import classes from './LanguagePicker.module.css';

const data = [
  { label: 'English', image: images1 },
  { label: 'Russian', image: images3 },
  { label: 'Uzbek', image: images4 },
];

export function LanguagePicker() {
  const { t, i18n } = useTranslation();
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      className='border-2 border-solid border-red-600'
      leftSection={<Image src={item.image} width={18} height={18} className={classes.languages_images} />}
      onClick={() => { setSelected(item); i18n.changeLanguage(item.label) }}
      key={item.label}
    >
      <span className={classes.label} style={{ border: "1px solid red" }} >{item.label}</span>
    </Menu.Item >
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
