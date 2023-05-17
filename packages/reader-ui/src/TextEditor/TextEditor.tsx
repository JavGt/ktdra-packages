import React from 'react';
import { Button, Stack } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export type TextEditorProps = {
	value?: string;
	onChange?: (value: string) => void;
};

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
	const editorRef = useRef({}) as any;
	const [editorLoaded, setEditorLoaded] = useState(false);
	const { CKEditor, Editor } = editorRef.current || {};

	useEffect(() => {
		editorRef.current = {
			CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
			Editor: require('@ktdra/text-editor'),
		};
		setEditorLoaded(true);
	}, []);

	const handleSave = () => {};
	return (
		<Stack direction='column' gap={2}>
			{editorLoaded && (
				<CKEditor
					editor={Editor}
					data={value}
					onChange={(event: any, editor: any) => {
						const data = editor.getData();
						onChange && onChange(data);
					}}
				/>
			)}
			<Button variant='contained' color='primary' onClick={handleSave} disabled={!value}>
				Enviar
			</Button>
		</Stack>
	);
};

export default TextEditor;
