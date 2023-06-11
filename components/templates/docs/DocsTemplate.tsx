import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React, { useContext } from 'react';
import PreviewMarkdown from '../../markdown/preview/PreviewMarkdown';
import SidebarState from '../../sidebars/docs/DocsSidebarState';
import { styles } from './DocsTemplateStyles';

export interface IDocsTemplate {
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

const DocsTemplate: React.FC<IDocsTemplate> = (props) => {
  const { open } = useContext(SidebarState);

  const Box = styled('div')(() => ({
    ...(open && {
      '@media (min-width: 901px) and (max-width: 1800px)': {
        marginLeft: '280px',
      },
    }),
  }));

  return (
    <>
      <Box>
        <Paper sx={styles.paperBox}>
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
              <h2>{props.title}</h2>
            </Grid>
            <br />
            <Grid item xs={12}>
              <PreviewMarkdown>{props.content}</PreviewMarkdown>
            </Grid>
          </Grid>
          <br />
          <Typography variant="body2">
            Last updated {props.updatedAt.substring(0, 10)} UTC.
          </Typography>
        </Paper>
        <center>
          <Typography variant="body2" sx={styles.copyrightDoc}>
            Unless otherwise specified, the content on this page is licensed
            under the{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 License
            </a>
            . Code samples are licensed under the{' '}
            <a href="https://www.apache.org/licenses/LICENSE-2.0">
              Apache 2.0 License
            </a>
            . For more information, please refer to the{' '}
            <Link href="/about/terms#Licensing">
              KeepCoding Developers Site Policies
            </Link>
            .
          </Typography>
        </center>
      </Box>
    </>
  );
};

export default DocsTemplate;
