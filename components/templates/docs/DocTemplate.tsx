import { Edit } from '@mui/icons-material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Router from 'next/router';
import React, { useContext } from 'react';
import MarkdownPreview from '../../markdown/MarkdownPreview';
import SidebarState from '../../sidebar/SidebarState';

export interface IDocTemplate {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  authorId: string;
  author: {
    name: string;
    email: string;
  };
}

const DocTemplate: React.FC<IDocTemplate> = (page) => {
  const { open } = useContext(SidebarState);

  return (
    <Paper
      sx={{
        backgroundColor: 'var(--cards-color)',
        color: 'var(--secondary-font-color)',
        padding: '24px',
        ...(open && {
          '@media (max-width: 1700px)': {
            marginLeft: '260px',
          },
        }),
      }}
    >
      <IconButton
        onClick={() => Router.push('/docs/edit?id=' + page.id)}
        sx={{
          marginBottom: '24px',
        }}
      >
        <Edit
          sx={{
            color: 'var(--primary-font-color)',
          }}
        />
      </IconButton>
      <hr className="divider" />
      <br />
      <Grid container rowSpacing={2}>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <Typography
            sx={{
              marginLeft: '24px',
            }}
          >
            <b>Module &gt; Chapter &gt; {page.id}</b>
          </Typography>
          <div className="expander" />
          <Box>
            Was this helpful?
            <>&nbsp;&nbsp;</>
            <IconButton>
              <ThumbUpIcon
                fontSize="small"
                sx={{
                  color: 'var(--primary-font-color)',
                }}
              />
            </IconButton>
            <>&nbsp;&nbsp;</>
            <IconButton>
              <ThumbDownIcon
                fontSize="small"
                sx={{
                  color: 'var(--primary-font-color)',
                }}
              />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <div className="expander" />
          <Box>
            <IconButton>
              <BookmarkAddIcon
                sx={{
                  color: 'var(--primary-font-color)',
                }}
              />
            </IconButton>
            <>&nbsp;&nbsp;</>
            <Button
              variant="outlined"
              sx={{
                color: 'var(--primary-font-color)',
                borderColor: 'var(--primary-font-color)',
              }}
            >
              Send feedback
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: 5 }}>
          <h2>{page.title}</h2>
        </Grid>
        <Grid item xs={12}>
          <MarkdownPreview>{page.content}</MarkdownPreview>
        </Grid>
      </Grid>
      <Typography variant="body2">
        by {page.author?.name || page.author?.email}
      </Typography>
    </Paper>
  );
};

export default DocTemplate;
