import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { styles } from './PageLayoutStyles';

export interface IPageLayout {
  title: string;
  updatedAt: string;
  childrens: any;
}

const PageLayout: React.FC<IPageLayout> = (props) => {
  return (
    <>
      <Head>
        <title>keepcoding</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Box sx={styles.box}>
        <Container sx={styles.container} maxWidth="lg">
          <Paper sx={styles.paper}>
            <center>
              <Typography variant="h4">{props.title.toUpperCase()}</Typography>
            </center>
            <br />
            <div>{props.childrens}</div>
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
              <Link href="/about/privacy">
                KeepCoding Developers Site Policies
              </Link>
              .
            </Typography>
          </center>
        </Container>
      </Box>
    </>
  );
};

export default PageLayout;
