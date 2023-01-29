import { Edit } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
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
    <Paper>
      <Edit
        onClick={() => {
          Router.push('/docs/edit?id=' + page.id);
        }}
      />
      <Typography variant="h3">{page.title}</Typography>
      <Typography variant="body2">
        by {page.author?.name || page.author?.email}
      </Typography>
      <br />
      <MarkdownPreview>{page.content}</MarkdownPreview>
    </Paper>
  );
};

export default PageTemplate;
