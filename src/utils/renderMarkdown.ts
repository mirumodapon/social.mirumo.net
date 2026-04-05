import { createMarkdownProcessor } from '@astrojs/markdown-remark';

const markdownProcessor = createMarkdownProcessor({
  shikiConfig: {
    theme: 'github-dark',
  },
});

export async function renderMarkdown(content: string) {
  const processor = await markdownProcessor;
  const { code } = await processor.render(content);
  return code;
}
