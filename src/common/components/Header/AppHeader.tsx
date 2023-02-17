import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Header,
  Button,
  Text,
  Flex,
  useMantineTheme,
  useMantineColorScheme,
  Badge,
  MediaQuery,
  Burger,
} from '@mantine/core';

import { IconSettings } from '@tabler/icons-react';

import Logo from '@icons/Logo';

import useGlobalCtx from 'src/store/global/use-global-ctx';

import packageJson from '../../../../package.json';
import { Dispatch } from 'react';
import LanguageSelect from './LanguageSelect/LanguageSelect';

interface Props {
  opened: boolean;
  setOpened: Dispatch<boolean>;
}

const AppHeader: React.FC<Props> = ({ opened, setOpened }) => {
  const { translate, content } = useGlobalCtx();
  const theme = useMantineTheme();
  const colorScheme = useMantineColorScheme();
  const router = useRouter();

  const logoColor = colorScheme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[7];

  return (
    <Header height={{ base: 60, md: 70 }} p="md" px="xl">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/* <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="md"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery> */}

        <Flex align="center" onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <Logo width={38} />

          <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
            <Text ml={12} fw={700} size={20} color={logoColor}>
              {translate(content.header.appName)}
            </Text>
          </MediaQuery>
        </Flex>

        <div style={{ flex: 1 }}></div>

        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <LanguageSelect />
        </MediaQuery>
      </div>
    </Header>
  );
};

export default AppHeader;
