import { CardContent, Typography } from '@mui/material';
import Router from 'next/router';
import React from 'react';
import MarkdownPreview from '../../markdown/MarkdownPreview';

export interface IPageTemplate {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
}

const PageTemplate: React.FC<IPageTemplate> = (page) => {
  return (
    <CardContent onClick={() => Router.push('/page/[id]', `/page/${page.id}`)}>
      <Typography variant="h3">{page.title}</Typography>
      <Typography variant="body2">
        by {page.author?.name || page.author?.email}
      </Typography>
      <br />
      <MarkdownPreview>{page.content}</MarkdownPreview>
    </CardContent>
  );
};

export default PageTemplate;
