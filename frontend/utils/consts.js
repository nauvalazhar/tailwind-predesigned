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
export const MODE_SOURCE = 'SOURCE';
export const MODE_DOCS = 'DOCS';
export const MODE_DOWNLOAD = 'DOWNLOAD';

export const modes = [
  {
    name: MODE_PREVIEW,
    displayName: 'Preview',
  },
  {
    name: MODE_SOURCE,
    displayName: 'Source',
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

export const TREE_MODE_DESIGNS = 'DESIGNS';
export const TREE_MODE_FILES = 'FILES';

export const treeModes = [
  {
    name: TREE_MODE_DESIGNS,
    displayName: 'Designs',
  },
  {
    name: TREE_MODE_FILES,
    displayName: 'Files',
  },
];
