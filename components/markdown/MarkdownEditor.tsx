import { TextField } from '@mui/material';
import React, { useState } from 'react';
import style from './MarkdownEditor.module.css';
import MarkdownPreview from './MarkdownPreview';

export interface IMarkdownEditor {
  id: string;
}

const MarkdownEditor: React.FC<IMarkdownEditor> = (editor) => {
  const [markdown, setMarkdown] = useState('');

  function updateMarkdown(event: { target: { value: any } }) {
    setMarkdown(event.target.value);
  }

  return (
    <div className={style.editor__wrap}>
      <TextField
        id={editor.id}
        multiline
        minRows={12}
        className={style.editor}
        value={markdown}
        onChange={updateMarkdown}
      />
      <MarkdownPreview>{markdown}</MarkdownPreview>
    </div>
  );
};

export default MarkdownEditor;
