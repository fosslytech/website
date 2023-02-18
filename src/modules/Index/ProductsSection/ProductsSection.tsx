import { Title, Text, Card, SimpleGrid, Container, Flex, Divider, Button } from '@mantine/core';
import useStyles from './ProductsSection.styles';

import useGlobalCtx from 'src/store/global/use-global-ctx';
import { getProductsData } from '@utils/resources/productsData';
import Link from 'next/link';
import { IconBrandGithub, IconLink } from '@tabler/icons-react';

const ProductsSection = () => {
  const { translate, content } = useGlobalCtx();
  const { classes, theme } = useStyles();

  const features = getProductsData(content).map((feature, i) => (
    <Card key={i} shadow="md" radius="md" className={classes.card} p="xl">
      <Flex align="center">
        <feature.icon size={36} fill={theme.colors[feature.color][6]} />

        <Text size="xl" weight={600} ml="md" c={theme.colors.gray[2]}>
          {translate(feature.title)}
        </Text>
      </Flex>

      <Divider size={2} color={theme.colors[feature.color][6]} w={36} my="md" />

      <Text size="sm" color="dimmed" mt="sm">
        {translate(feature.description)}
      </Text>

      <Flex justify="end" mt="lg" gap="md">
        <Link href={feature.codeUrl} target="_blank">
          <Button variant="default" leftIcon={<IconBrandGithub size={18} />}>
            Code
          </Button>
        </Link>

        <Link href={feature.appUrl} target="_blank">
          <Button leftIcon={<IconLink size={18} />} color={feature.color}>
            Open
          </Button>
        </Link>
      </Flex>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        {translate(content.pages.home.products.title)}
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        {translate(content.pages.home.products.description)}
      </Text>

      <Flex mt={50} gap="md" justify="center" align="center" direction="row" wrap="wrap">
        {features}
      </Flex>
    </Container>
  );
};

export default ProductsSection;
