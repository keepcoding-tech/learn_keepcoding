import { Edit } from '@mui/icons-material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import Router from 'next/router';
import React from 'react';
import MarkdownPreview from '../../markdown/MarkdownPreview';

export interface IPageTemplate {
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

const PageTemplate: React.FC<IPageTemplate> = (page) => {
  return (
    <Paper
      sx={{
        bgcolor: 'var(--cards-color)',
        color: 'var(--secondary-font-color)',
        padding: 1,
      }}
    >
      <Edit
        onClick={() => {
          Router.push('/docs/edit?id=' + page.id);
        }}
      />
      <Grid container rowSpacing={2}>
        <Grid item xs={6}>
          <Typography sx={{ marginLeft: 5 }}>
            Module &gt; Chapter &gt; Doc
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ float: 'right', marginRight: 5 }}>
            Was this helpful?
            <>&nbsp;&nbsp;</>
            <IconButton>
              <ThumbUpIcon
                fontSize="small"
                style={{ color: 'var(--secondary-font-color)' }}
              />
            </IconButton>
            <>&nbsp;&nbsp;</>
            <IconButton>
              <ThumbDownIcon
                fontSize="small"
                style={{ color: 'var(--secondary-font-color)' }}
              />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ marginLeft: 5 }}>
          <h2>{page.title}</h2>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ float: 'right' }}>
            <IconButton>
              <BookmarkAddIcon
                style={{ color: 'var(--secondary-font-color)' }}
              />
            </IconButton>
            <>&nbsp;&nbsp;</>
            <Button
              variant="outlined"
              sx={{
                color: 'var(--secondary-font-color)',
                borderColor: 'var(--secondary-font-color)',
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

export default PageTemplate;
