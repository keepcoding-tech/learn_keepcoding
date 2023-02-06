import Grid from '@mui/material/Grid';
import Link from 'next/link';
import React, { useContext } from 'react';
import SidebarState from '../sidebar/SidebarState';

export interface IFooter {
  /* nothing here yet */
}

const Footer: React.FC<IFooter> = () => {
  const { open } = useContext(SidebarState);

  return (
    <>
      <footer
        style={{
          ...(open && {
            marginLeft: '260px',
          }),
        }}
      >
        <Grid container className="grid">
          <Grid item xs={4}>
            <h5>Learn</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Guides
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Reference
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Samples
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Libraries
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  GitHub
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h5>Stay connected</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Blog
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  KeepCoding Summit
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Twitter
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  YouTube
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <h5>Support</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Contact support
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Stack Overflow
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Slack community
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Google group
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  Release notes
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/">
                  FAQs
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr
          style={{
            borderColor: 'var(--hr-border-color)',
            marginLeft: '24px',
            marginRight: '24px',
          }}
        />
        <Grid container className="grid" spacing={5}>
          <Grid item>
            <h5>KeepCoding Developers</h5>
          </Grid>
          <Grid item>
            <Link className="link" href="/">
              Nextjs
            </Link>
          </Grid>
          <Grid item>
            <Link className="link" href="/">
              Prisma
            </Link>
          </Grid>
          <Grid item>
            <Link className="link" href="/">
              Google Cloud Platform
            </Link>
          </Grid>
          <Grid item>
            <Link className="link" href="/">
              All products
            </Link>
          </Grid>
        </Grid>
        <hr
          style={{
            borderColor: 'var(--hr-border-color)',
            marginLeft: '24px',
            marginRight: '24px',
          }}
        />
        <Grid container className="grid">
          <Grid item>
            <Link className="link" href="/">
              Terms
            </Link>
          </Grid>
          <Grid item>&nbsp;|&nbsp;</Grid>
          <Grid item>
            <Link className="link" href="/">
              Privacy
            </Link>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
