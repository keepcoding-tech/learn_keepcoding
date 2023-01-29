import { Grid } from '@mui/material';
import React from 'react';
import style from './Footer.module.css';

export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <>
      <footer className={style.footer}>
        <hr className={style.dividerTop} />
        <Grid container className={style.grid}>
          <Grid item xs={4}>
            <h5>Learn</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                Guides
              </Grid>
              <Grid item xs={12}>
                Reference
              </Grid>
              <Grid item xs={12}>
                Samples
              </Grid>
              <Grid item xs={12}>
                Libraries
              </Grid>
              <Grid item xs={12}>
                GitHub
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h5>Stay connected</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                Blog
              </Grid>
              <Grid item xs={12}>
                KeepCoding Summit
              </Grid>
              <Grid item xs={12}>
                Twitter
              </Grid>
              <Grid item xs={12}>
                YouTube
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h5>Support</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                Contact support
              </Grid>
              <Grid item xs={12}>
                Stack Overflow
              </Grid>
              <Grid item xs={12}>
                Slack community
              </Grid>
              <Grid item xs={12}>
                Google group
              </Grid>
              <Grid item xs={12}>
                Release notes
              </Grid>
              <Grid item xs={12}>
                FAQs
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr className={style.divider} />
        <Grid container className={style.grid} spacing={5}>
          <Grid item>
            <h5>KeepCoding Developers</h5>
          </Grid>
          <Grid item>Nextjs</Grid>
          <Grid item>Prisma</Grid>
          <Grid item>Google Cloud Platform</Grid>
          <Grid item>All products</Grid>
        </Grid>
        <hr className={style.divider} />
        <Grid container className={style.grid}>
          <Grid item>Terms</Grid>
          <Grid item>&nbsp;|&nbsp;</Grid>
          <Grid item>Privacy</Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
