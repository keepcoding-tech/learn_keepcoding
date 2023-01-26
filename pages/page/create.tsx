import { Alert, Box, Button, Grid, TextField } from '@mui/material';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import React, { useState } from 'react';
import MarkdownEditor from '../../components/markdown/MarkdownEditor';
import PermissionProvider from '../../components/permission-provider/PermissionProvider';

const Create: NextPage = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState(null);
  const [page, setPage] = useState({
    pageId: '',
    title: '',
    content: '',
  });

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();
    fetch('/api/page/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(page),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert(response.error);
        }
        await Router.push('/page/drafts');
      });
  }

  function handleChange(event: any) {
    const value = event.target.value;
    setPage({
      ...page,
      [event.target.id]: value,
    });
  }

  return (
    <>
      <PermissionProvider session={session}>
        {alert ? <Alert severity="error">{alert}</Alert> : null}
        <Box component="form">
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField id="pageId" onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="title" onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <MarkdownEditor id="content" />
            </Grid>
            <Grid item xs={1}>
              <Button
                id="create"
                variant="contained"
                disabled={!page.pageId || !page.title || !page.content}
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
      </PermissionProvider>
    </>
  );
};

export default Create;
