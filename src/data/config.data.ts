import { IConfigData } from '@/src/entities';

export const configData: IConfigData = {
  title: 'DiceRoll',
  description: '언제 어디서든 편하게 주사위를 굴리세요.',
  keywords: 'Dice,주사위,DND,roll dice',
  author: {
    name: 'NIHILncunia',
    url: 'https://github.com/NIHILncunia',
  },
  type: 'website',
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://diceroll.nihilapps.dev',
  image: {
    link: '/opengraph-image.png',
    alt: 'site image',
  },
  version: 'v0.0.0',
};
