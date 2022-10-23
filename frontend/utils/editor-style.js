export const editorStyle = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      foreground: '79B8FF',
      token: 'identifier.js',
    },
    {
      foreground: 'F97583',
      token: 'keyword',
    },
    {
      foreground: '9ece69',
      token: 'string',
    },
    {
      foreground: '79B8FF',
      token: 'string.key.json',
    },
    {
      foreground: '9ece69',
      token: 'string.value.json',
    },
    {
      foreground: '85E89D',
      token: 'tag.html',
    },
    {
      foreground: '85E89D',
      token: 'metatag.html',
    },
    {
      foreground: 'B392F0',
      token: 'metatag.content.html',
    },
    {
      foreground: 'B392F0',
      token: 'attribute.name.html',
    },
    {
      foreground: '9ECBFF',
      token: 'attribute.value.html',
    },
  ],
  colors: {
    'editor.background': '#171717',
    'editor.lineHighlightBackground': '#27272760',
    'editor.selectionBackground': '#79B8FF60',
    'editorCursor.foreground': '#ffffff',
    'editorIndentGuide.activeBackground': '#ffffff50',
    'editorIndentGuide.background': '#ffffff10',
  },
};
