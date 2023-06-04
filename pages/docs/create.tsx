import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import PageLayout from '../../components/layouts/page/PageLayout';
import MarkdownEditor from '../../components/markdown/editor/MarkdownEditor';
import PagePermissionProvider from '../../components/permission-provider/page/PagePermissionProvider';
import DocTemplate from '../../components/templates/doc/DocTemplate';
import SelectInput from '../../components/utils/select/SelectInput';
import TextInput from '../../components/utils/text-input/TextInput';

const Create: NextPage = () => {
  const { data: session } = useSession();
  const [alert, setAlert] = useState(null);
  const [content, setContent] = useState('');
  const [currentSubdocument, setCurrentSubdocument] = useState('');
  const [subdocuments, setSubdocuments] = useState(['']);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  async function submitData(e: React.SyntheticEvent) {
    e.preventDefault();

    // store the new document into the database
    fetch('/api/docs/create/' + category, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        doc: { id, title, category },
        content: content,
        subdocs: subdocuments,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        if (response.error) {
          setAlert(response.error);
        }
      });
  }

  return (
    <>
      <PagePermissionProvider session={session}>
        <PageLayout>
          {alert ? <Alert severity="error">{alert}</Alert> : null}
          <br />
          <Box component="form">
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={5}>
                <TextInput
                  id="id"
                  value={id}
                  label="ID"
                  setInput={setId}
                  required={true}
                  fullWidth={true}
                  multiline={false}
                  minRow={0}
                />
              </Grid>
              <Grid item xs={5}>
                <TextInput
                  id="title"
                  value={title}
                  label="TITLE"
                  setInput={setTitle}
                  required={true}
                  fullWidth={true}
                  multiline={false}
                  minRow={0}
                />
              </Grid>
              <Grid item xs={2}>
                <SelectInput
                  id="category"
                  value={category}
                  setSelect={setCategory}
                  menuItems={['module', 'chapter', 'document']}
                ></SelectInput>
              </Grid>
              {category != 'document' ? (
                <>
                  <Grid item xs={8}>
                    <TextInput
                      id="subdocuments"
                      value={currentSubdocument}
                      label="ADD SUBDOCUMENTS"
                      setInput={setCurrentSubdocument}
                      required={false}
                      fullWidth={true}
                      multiline={false}
                      minRow={0}
                    />
                  </Grid>
                  <Grid item xs={1} />
                  <Grid item xs={2}>
                    <Button
                      id="add"
                      variant="contained"
                      disabled={!currentSubdocument}
                      fullWidth
                      onClick={() => {
                        setSubdocuments((prevArray) => [
                          ...prevArray,
                          currentSubdocument,
                        ]);
                      }}
                      sx={{ height: '100%' }}
                    >
                      ADD
                    </Button>
                    <Grid item xs={1} />
                  </Grid>
                  <Grid item xs={12}>
                    {subdocuments.map((doc, index) => (
                      <div key={index}>{doc}</div>
                    ))}
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12}>
                    <MarkdownEditor
                      id="content"
                      markdown={content}
                      setMarkdown={setContent}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <DocTemplate
                      id={id}
                      title={title}
                      content={content}
                      category={category}
                      createdAt={'-'}
                      updatedAt={'-'}
                      published={false}
                      authorId={'-'}
                      author={{
                        name: '',
                        email: '',
                      }}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={2} />
              <Grid item xs={8}>
                <Button
                  sx={{
                    backgroundColor: 'var(--success-button-color)',
                    color: 'var(--primary-background-color)',
                    fontSize: '18px',
                  }}
                  id="create"
                  variant="contained"
                  disabled={!id || !title || !category}
                  fullWidth
                  onClick={submitData}
                >
                  Create
                </Button>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </Box>
        </PageLayout>
      </PagePermissionProvider>
    </>
  );
};

export default Create;
