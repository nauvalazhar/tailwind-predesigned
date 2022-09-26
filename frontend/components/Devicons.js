import PropTypes from 'prop-types';
import CSS from '../svgs/devicons/css.svg';
import HTML from '../svgs/devicons/html.svg';
import JavaScript from '../svgs/devicons/javascript.svg';
import JSON from '../svgs/devicons/json.svg';
import NPM from '../svgs/devicons/npm.svg';
import React from '../svgs/devicons/react.svg';
import Vue from '../svgs/devicons/vue.svg';
import Laravel from '../svgs/devicons/laravel.svg';
import Tailwind from '../svgs/devicons/tailwind.svg';
import PHP from '../svgs/devicons/php.svg';
import YML from '../svgs/devicons/yml.svg';
import SVG from '../svgs/devicons/svg.svg';
import Image from '../svgs/devicons/image.svg';
import EditorConfig from '../svgs/devicons/editorconfig.svg';
import Babel from '../svgs/devicons/babel.svg';
import Info from '../svgs/devicons/info.svg';
import Markdown from '../svgs/devicons/markdown.svg';
import Yarn from '../svgs/devicons/yarn.svg';
import ESlint from '../svgs/devicons/eslint.svg';
import GitIgnore from '../svgs/devicons/git_ignore.svg';
import Folder from '../svgs/devicons/folder.svg';
import Code from '../svgs/devicons/code.svg';

const icons = {
  css: CSS,
  html: HTML,
  javascript: JavaScript,
  json: JSON,
  npm: NPM,
  react: React,
  vue: Vue,
  laravel: Laravel,
  tailwind: Tailwind,
  php: PHP,
  yml: YML,
  svg: SVG,
  image: Image,
  editorconfig: EditorConfig,
  babel: Babel,
  info: Info,
  markdown: Markdown,
  yarn: Yarn,
  eslint: ESlint,
  gitignore: GitIgnore,
  folder: Folder,
  code: Code,
};

function Devicons({ name, ...props }) {
  let selectedName = name;
  if (!(name in icons)) selectedName = 'code';

  const Icon = icons[selectedName];
  return <Icon {...props} />;
}

Devicons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Devicons;
