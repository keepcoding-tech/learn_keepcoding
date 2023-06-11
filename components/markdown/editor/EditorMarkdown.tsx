import Box from '@mui/material/Box';
import React from 'react';
import TextInput from '../../utils/inputs/text/TextInput';
import { styles } from './EditorMarkdownStyles';

export interface IEditorMarkdown {
  id: string;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const EditorMarkdown: React.FC<IEditorMarkdown> = (props) => {
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
    </Box>
  );
};

export default EditorMarkdown;
