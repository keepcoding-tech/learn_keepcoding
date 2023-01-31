import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import MarkdownEditor from '../../components/markdown/MarkdownEditor';
import PermissionProviderPage from '../../components/permission-provider/page-provider/PermissionProviderPage';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async (req) => {
  const result = await prisma.document.findUnique({
    where: {
      id: String(req.query.id),
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  const document = JSON.parse(JSON.stringify(result));

  return { props: { doc: document } };
};

type Props = { doc: any };

const Edit: NextPage<Props> = (props) => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState(null);
  const [content, setContent] = useState(props.doc.content);
  const [doc, setDoc] = useState({
    docId: props.doc.id,
    title: props.doc.title,
    category: props.doc.category,
  });

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();

    // store the new document into the database
    fetch('/api/docs/edit', {
      method: 'PUT',
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
      <PermissionProviderPage session={session}>
        {alert ? <Alert severity="error">{alert}</Alert> : null}
        <Box component="form">
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <TextField
                id="docId"
                value={doc.docId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="title"
                value={doc.title}
                onChange={handleChange}
                fullWidth
              />
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
                Save
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
      </PermissionProviderPage>
    </>
  );
};

export default Edit;
