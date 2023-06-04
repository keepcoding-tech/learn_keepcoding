import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import MarkdownPreview from '../../markdown/preview/MarkdownPreview';
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
      '@media (min-width: 901px) and (max-width: 1800px)': {
        marginLeft: '280px',
      },
    }),
  }));

  return (
    <PaperBox sx={styles.paperBox}>
      <Grid container rowSpacing={2}>
        <div className="expander" />
        <Grid item>
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
        <br />
        <Grid item xs={12}>
          <MarkdownPreview>{page.content}</MarkdownPreview>
        </Grid>
      </Grid>
      <br />
      <Typography variant="body2">
        by {page.author?.name || page.author?.email}
      </Typography>
    </PaperBox>
  );
};

export default DocTemplate;
