import TextField from '@mui/material/TextField';
import React from 'react';
import MarkdownPreview from './MarkdownPreview';

export interface IMarkdownEditor {
  id: string;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const MarkdownEditor: React.FC<IMarkdownEditor> = (props) => {
  function updateMarkdown(event: { target: { value: any } }) {
    props.setMarkdown(event.target.value);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <TextField
        id={props.id}
        multiline
        minRows={12}
        value={props.markdown}
        onChange={updateMarkdown}
        style={{
          width: '100%',
          flexGrow: 1,
          color: 'var(--secondary-font-color)',
          marginBottom: '20px',
          border: 'none',
          outline: 'none',
          appearance: 'none',
          background: 'none',
          resize: 'none',
        }}
      />
      <MarkdownPreview>{props.markdown}</MarkdownPreview>
    </div>
  );
};

export default MarkdownEditor;
