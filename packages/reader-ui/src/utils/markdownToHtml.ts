import { marked } from 'marked';

export const markdownToHtml = (text: string) =>
	marked.parseInline(text || '', {
		mangle: false,
		headerIds: false,
	});
