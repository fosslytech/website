import { useState } from 'react';
import { UnstyledButton, Menu, Group, Text } from '@mantine/core';
import useStyles from './Select.styles';

import { ITranslations } from '@ts/content.types';
import useGlobalCtx from 'src/store/global/use-global-ctx';
import { useRouter } from 'next/router';

import { USFlag, FlagProps } from 'mantine-flagpack';

import { IconChevronDown } from '@tabler/icons-react';

interface ILangData {
  label: string;
  value: string;
  icon: React.FC<FlagProps>;
}

const getLangData = (content: ITranslations): ILangData[] => [
  { label: content.header.selectLangOptions.en, value: 'en', icon: USFlag },
];

const LanguageSelect = () => {
  const router = useRouter();

  const { content, translate } = useGlobalCtx();

  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles({ opened });

  const changeLanguage = (newLocal: string) => {
    router.push(router.pathname, router.pathname, { locale: newLocal });
  };

  const data = getLangData(content);

  const selected = data.find((l) => l.value === router.locale);

  const items = data.map((item) => (
    <Menu.Item
      icon={<item.icon w={22} radius="xs" />}
      onClick={() => changeLanguage(item.value)}
      key={item.value}
      pt={10}
      pb={10}
    >
      {translate(item.label)}
    </Menu.Item>
  ));

  return (
    <Menu onOpen={() => setOpened(true)} onClose={() => setOpened(false)} radius="md" width="target">
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <selected.icon w={22} radius="xs" />

            <div className={classes.label}>{translate(selected.label)}</div>
          </Group>

          <IconChevronDown size={14} className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LanguageSelect;
