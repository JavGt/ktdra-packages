import { marked } from 'marked';

export const markdownToHtml = (text: string) =>
	marked.parse(text, {
		mangle: false,
		headerIds: false,
	});
