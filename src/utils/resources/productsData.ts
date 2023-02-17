import React from 'react';
import { ITranslations } from '@ts/content.types';

import ODFCollab from '@icons/products/ODFCollab';
import { MantineColor } from '@mantine/core';
import LibreMeet from '@icons/products/LibreMeet';

interface ProductsSectionProps {
  title: string;
  description: string;
  icon: React.FC<{ size: number; fill: string }>;
  color: MantineColor;
  appUrl: string;
  appBtn: string;
  codeUrl: string;
  codeBtn: string;
}

export const getProductsData = (content: ITranslations): ProductsSectionProps[] => [
  {
    title: content.pages.home.products.cards[0].title,
    description: content.pages.home.products.cards[0].description,
    icon: ODFCollab,
    color: 'blue',
    appUrl: 'https://collab.fossly.tech',
    codeUrl: 'https://github.com/fosslytech/odf-collab',
    appBtn: content.pages.home.products.cards[0].appBtn,
    codeBtn: content.pages.home.products.cards[0].codeBtn,
  },
  {
    title: content.pages.home.products.cards[1].title,
    description: content.pages.home.products.cards[1].description,
    icon: LibreMeet,
    color: 'green',
    appUrl: 'https://meet.fossly.tech',
    codeUrl: 'https://github.com/fosslytech/odf-collab',
    appBtn: content.pages.home.products.cards[1].appBtn,
    codeBtn: content.pages.home.products.cards[1].codeBtn,
  },
];
