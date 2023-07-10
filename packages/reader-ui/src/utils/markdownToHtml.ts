import { marked } from 'marked';

const renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
  if (!href) return text;

  let target = '';

  if (href.startsWith('http')) {
    target = 'target="_blank"';
  }

  return `<a title="${title}" href="${href}" ${target}>${text}</a>`;
};

export const markdownToHtml = (
  text: string = '',
  mode: 'parse' | 'parseInline' = 'parse'
) => {
  const html = marked[mode](text, {
    renderer,
    mangle: false,
    headerIds: false,
  });

  return html;
};
