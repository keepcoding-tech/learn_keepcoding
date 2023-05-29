import Box from '@mui/material/Box';
import React from 'react';
import TextInput from '../../utils/text-input/TextInput';
import MarkdownPreview from '../preview/MarkdownPreview';
import { styles } from './MarkdownEditorStyles';

export interface IMarkdownEditor {
  id: string;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const MarkdownEditor: React.FC<IMarkdownEditor> = (props) => {
  return (
    <Box sx={styles.markdownWrapper}>
      <TextInput
        id={props.id}
        value={props.markdown}
        label={'Nothing here yet'}
        setInput={props.setMarkdown}
        required={false}
        fullWidth={true}
        multiline={true}
        minRow={12}
      />
      <MarkdownPreview>{props.markdown}</MarkdownPreview>
    </Box>
  );
};

export default MarkdownEditor;
