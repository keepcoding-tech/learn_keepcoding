import { TextField } from '@mui/material';
import React from 'react';
import style from './MarkdownEditor.module.css';
import MarkdownPreview from './MarkdownPreview';

export interface IMarkdownEditor {
  id: string;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const MarkdownEditor: React.FC<IMarkdownEditor> = (editor) => {
  function updateMarkdown(event: { target: { value: any } }) {
    editor.setMarkdown(event.target.value);
  }

  return (
    <div className={style.editor__wrap}>
      <TextField
        id={editor.id}
        multiline
        minRows={12}
        className={style.editor}
        value={editor.markdown}
        onChange={updateMarkdown}
      />
      <MarkdownPreview>{editor.markdown}</MarkdownPreview>
    </div>
  );
};

export default MarkdownEditor;
