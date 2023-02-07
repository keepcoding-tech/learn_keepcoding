import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { styles } from './MarkdownEditorStyles';
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
    <Box sx={styles.markdownWrapper}>
      <TextField
        id={props.id}
        multiline
        minRows={12}
        value={props.markdown}
        onChange={updateMarkdown}
        sx={styles.textArea}
      />
      <MarkdownPreview>{props.markdown}</MarkdownPreview>
    </Box>
  );
};

export default MarkdownEditor;
