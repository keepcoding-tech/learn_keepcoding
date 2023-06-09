import { Paper } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { SyntheticEvent } from 'react';
import MarkdownEditor from '../../markdown/editor/MarkdownEditor';
import MarkdownPreview from '../../markdown/preview/MarkdownPreview';
import TextInput from '../../utils/text-input/TextInput';
import { styles } from './CreateDocumentTemplateStyles';

export interface ICreateDocumentTemplate {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  alert: string | null;
  submitData: (_e: SyntheticEvent<Element, Event>) => Promise<void>;
  submitButton: string;
  author: {
    name: string;
    email: string;
  };
}

const CreateDocumentTemplate: React.FC<ICreateDocumentTemplate> = (props) => {
  return (
    <>
      {props.alert ? <Alert severity="error">{props.alert}</Alert> : null}
      <br />
      <Box component="form">
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextInput
              id="id"
              value={props.id}
              label="ID"
              setInput={props.setId}
              required={true}
              fullWidth={true}
              multiline={false}
              minRow={0}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInput
              id="title"
              value={props.title}
              label="TITLE"
              setInput={props.setTitle}
              required={true}
              fullWidth={true}
              multiline={false}
              minRow={0}
            />
          </Grid>
          <Grid item xs={12}>
            <MarkdownEditor
              id="content"
              markdown={props.content}
              setMarkdown={props.setContent}
            />
          </Grid>
        <Grid item xs={12}>
          <Paper sx={styles.paperBox}>
            <h2>{props.title}</h2>
            <br />
            <MarkdownPreview>
              {props.content}
            </MarkdownPreview>
          </Paper>
        </Grid>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Button
              sx={styles.createButton}
              id={props.submitButton}
              variant="contained"
              disabled={!props.id || !props.title}
              fullWidth
              onClick={props.submitData}
            >
              {props.submitButton}
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
    </>
  );
};

export default CreateDocumentTemplate;
