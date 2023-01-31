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
import React from 'react';
import MarkdownPreview from '../../markdown/MarkdownPreview';

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
  return (
    <Paper
      sx={{
        backgroundColor: 'var(--cards-color)',
        color: 'var(--secondary-font-color)',
        padding: '1px',
      }}
    >
      <Edit onClick={() => Router.push('/docs/edit?id=' + page.id)} />
      <Grid container rowSpacing={2}>
        <Grid item xs={6}>
          <Typography
            sx={{
              marginLeft: '24px',
            }}
          >
            Module &gt; Chapter &gt; Doc
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              float: 'right',
            }}
          >
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
        <Grid item xs={8} sx={{ marginLeft: 5 }}>
          <h2>{page.title}</h2>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              float: 'right',
            }}
          >
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
