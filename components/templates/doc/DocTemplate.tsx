import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Edit from '@mui/icons-material/Edit';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Router from 'next/router';
import React, { useContext } from 'react';
import MarkdownPreview from '../../markdown/MarkdownPreview';
import SidebarState from '../../sidebar/SidebarState';
import { styles } from './DocTemplateStyles';

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

  const PaperBox = styled(Paper)(() => ({
    ...(open && {
      '@media (min-width: 900px) and (max-width: 1800px)': {
        marginLeft: '280px',
      },
    }),
  }));

  return (
    <PaperBox sx={styles.paperBox}>
      <IconButton
        onClick={() => Router.push('/docs/edit?id=' + page.id)}
        sx={styles.iconButton}
      >
        <Edit sx={styles.icon} />
      </IconButton>
      <hr className="short-divider" />
      <br />
      <Grid container rowSpacing={2}>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <Typography sx={styles.grid}>
            <b>Module &gt; Chapter &gt; {page.id}</b>
          </Typography>
          <div className="expander" />
          <Box>
            Was this helpful?
            <>&nbsp;&nbsp;</>
            <IconButton>
              <ThumbUpIcon fontSize="small" sx={styles.icon} />
            </IconButton>
            <>&nbsp;&nbsp;</>
            <IconButton>
              <ThumbDownIcon fontSize="small" sx={styles.icon} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <div className="expander" />
          <Box>
            <IconButton>
              <BookmarkAddIcon sx={styles.icon} />
            </IconButton>
            <>&nbsp;&nbsp;</>
            <Button variant="outlined" sx={styles.feedbackButton}>
              Send feedback
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={styles.gridItem}>
          <h2>{page.title}</h2>
        </Grid>
        <Grid item xs={12}>
          <MarkdownPreview>{page.content}</MarkdownPreview>
        </Grid>
      </Grid>
      <Typography variant="body2">
        by {page.author?.name || page.author?.email}
      </Typography>
    </PaperBox>
  );
};

export default DocTemplate;
