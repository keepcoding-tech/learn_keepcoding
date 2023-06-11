import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { SyntheticEvent, useState } from 'react';
import TextInput from '../../utils/inputs/text/TextInput';
import { styles } from './CreateChapterTemplateStyles';

export interface ICreateChapterTemplate {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  documents: { id: string }[];
  setDocuments: React.Dispatch<React.SetStateAction<{ id: string }[]>>;
  alert: string | null;
  submitData: (_e: SyntheticEvent<Element, Event>) => Promise<void>;
  submitButton: string;
}

const CreateChapterTemplate: React.FC<ICreateChapterTemplate> = (props) => {
  const [currentChapter, setCurrentChapter] = useState('');

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
          <Grid item xs={10}>
            <TextInput
              id="subdocuments"
              value={currentChapter}
              label="ADD SUBDOCUMENTS"
              setInput={setCurrentChapter}
              required={false}
              fullWidth={true}
              multiline={false}
              minRow={0}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              id="add"
              variant="contained"
              disabled={!currentChapter}
              fullWidth
              onClick={() => {
                props.setDocuments((prevArray) => [
                  ...prevArray,
                  { id: currentChapter },
                ]);
                setCurrentChapter('');
              }}
              sx={{ height: '100%' }}
            >
              ADD
            </Button>
          </Grid>
          <Grid item xs={12}>
            {props.documents.map((doc, index) => (
              <div key={index}>{doc.id}</div>
            ))}
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

export default CreateChapterTemplate;
