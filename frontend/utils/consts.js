export const sizes = [
  {
    name: 'initial',
    displayName: 'I',
    breakpoint: -1,
  },
  {
    name: 'all',
    displayName: 'All',
    breakpoint: 380,
  },
  {
    name: 'small',
    displayName: 'SM',
    breakpoint: 640,
  },
  {
    name: 'medium',
    displayName: 'MD',
    breakpoint: 768,
  },
  {
    name: 'large',
    displayName: 'lg',
    breakpoint: 1024,
  },
  {
    name: 'extra-large',
    displayName: 'XL',
    breakpoint: 1280,
  },
  {
    name: 'extra-extra-large',
    displayName: '2XL',
    breakpoint: 1536,
  },
];

export const techs = [
  {
    name: 'html',
    displayName: 'HTML',
    icon: 'html',
  },
  {
    name: 'react',
    displayName: 'React',
    icon: 'react',
  },
  {
    name: 'vue',
    displayName: 'Vue',
    icon: 'vue',
  },
  {
    name: 'laravel',
    displayName: 'Laravel',
    icon: 'laravel',
  },
];

export const MODE_PREVIEW = 'PREVIEW';
export const MODE_CODES = 'CODES';
export const MODE_DOCS = 'DOCS';
export const MODE_DOWNLOAD = 'DOWNLOAD';

export const modes = [
  {
    name: MODE_PREVIEW,
    displayName: 'Preview',
  },
  {
    name: MODE_CODES,
    displayName: 'Codes',
  },
  {
    name: MODE_DOCS,
    displayName: 'Docs',
  },
  {
    name: MODE_DOWNLOAD,
    displayName: 'Download',
    display: false,
  },
];
