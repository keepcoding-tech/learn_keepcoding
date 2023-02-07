import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import PageLayout from '../../components/layouts/page/PageLayout';
import MarkdownEditor from '../../components/markdown/MarkdownEditor';
import PagePermissionProvider from '../../components/permission-provider/page/PagePermissionProvider';

const Create: NextPage = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState(null);
  const [content, setContent] = useState('');
  const [doc, setDoc] = useState({
    docId: '',
    title: '',
    category: '',
  });

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();

    // store the new document into the database
    fetch('/api/docs/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ doc: doc, content: content }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert(response.error);
        }
      });
  }

  function handleChange(event: any) {
    const value = event.target.value;
    setDoc({
      ...doc,
      [event.target.id]: value,
    });
  }

  return (
    <>
      <PagePermissionProvider session={session}>
        <PageLayout>
          {alert ? <Alert severity="error">{alert}</Alert> : null}
          <Box component="form">
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={5}>
                <TextField id="docId" onChange={handleChange} fullWidth />
              </Grid>
              <Grid item xs={5}>
                <TextField id="title" onChange={handleChange} fullWidth />
              </Grid>
              <Grid item xs={2}>
                <Select
                  id="category"
                  value={doc.category}
                  onChange={(event) => {
                    console.log(doc.category);
                    setDoc({
                      ...doc,
                      category: String(event.target.value),
                    });
                  }}
                  fullWidth
                >
                  <MenuItem value="MODULE">MODULE</MenuItem>
                  <MenuItem value="CHAPTER">CHAPTER</MenuItem>
                  <MenuItem value="DOC">DOC</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <MarkdownEditor
                  id="content"
                  markdown={content}
                  setMarkdown={setContent}
                />
              </Grid>
              <Grid item xs={1}>
                <Button
                  id="create"
                  variant="contained"
                  disabled={!doc.docId || !doc.title}
                  onClick={submitData}
                >
                  Create
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  id="cancel"
                  variant="contained"
                  onClick={() => {
                    setAlert(null);
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </PageLayout>
      </PagePermissionProvider>
    </>
  );
};

export default Create;
