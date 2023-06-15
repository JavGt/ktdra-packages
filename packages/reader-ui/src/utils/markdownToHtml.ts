import { marked } from 'marked';

const renderer = new marked.Renderer();

// renderer.list = (body, ordered, start) => {
// 	let type = ordered ? 'ol' : 'ul';
// 	let tagOpen = `<${type}>`;
// 	let tagClose = `</${type}>`;

// 	if (!ordered && start !== null && start !== 1) {
// 		let lowercaseStart = String.fromCharCode(96 + start); // Convertir número a letra minúscula
// 		tagOpen = `<${type} type="a" start="${lowercaseStart}">`;
// 	}

// 	return tagOpen + body + tagClose;
// };

renderer.link = (href, title, text) => {
	if (!href) return text;

	let target = '';
	if (href.startsWith('http')) {
		target = 'target="_blank"';
	}

	return `<a title="${title}" href="${href}" ${target}>${text}</a>`;
};

export const markdownToHtml = (text: string) => {
	const html = marked.parse(text, {
		renderer,
		mangle: false,
		headerIds: false,
	});

	return html;
};
