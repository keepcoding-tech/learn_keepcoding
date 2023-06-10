import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import React, { useContext } from 'react';
import SidebarState from '../../sidebar/SidebarState';
import { styles } from './PrimaryFooterStyles';

export interface IPrimaryFooter {
  /* nothing here yet */
}

const PrimaryFooter: React.FC<IPrimaryFooter> = () => {
  const { open } = useContext(SidebarState);
  const screenWidth = useMediaQuery('(max-width: 600px)');

  const FooterBox = styled('footer')(() => ({
    ...(open && {
      '@media (min-width: 901px)': {
        marginLeft: '280px',
      },
    }),
  }));

  return (
    <>
      <FooterBox sx={styles.footer}>
        <Grid
          container
          className="grid"
          direction={screenWidth ? 'column' : 'row'}
        >
          <Grid item xs={4}>
            <h5>Learn</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link
                  className="link"
                  href="/docs/fundamentals/get-started/why-keepcoding"
                >
                  Guides
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="https://github.com/Daniel-Tanase">
                  GitHub
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid item xs={4}>
            <h5>Stay connected</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link
                  className="link"
                  href="https://www.facebook.com/profile.php?id=100006885674660"
                >
                  Facebook
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link
                  className="link"
                  href="https://www.linkedin.com/in/daniel-tanase-758975200/"
                >
                  LinkedIn
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid item xs={4}>
            <h5>Support</h5>
            <br />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link
                  className="link"
                  href="https://stackoverflow.com/questions/tagged/keepcoding"
                >
                  Stack Overflow
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link
                  className="link"
                  href="https://groups.google.com/g/keepcoding"
                >
                  Google group
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link className="link" href="/about/releases">
                  Release notes
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr className="long-divider" />
        <Grid
          container
          className="grid"
          spacing={5}
          direction={screenWidth ? 'column' : 'row'}
        >
          <Grid item>
            <h5>KeepCoding Developers</h5>
          </Grid>
          <Grid item>
            <Link
              className="link"
              href="https://github.com/Daniel-Tanase/keepcoding"
            >
              Repository
            </Link>
          </Grid>
        </Grid>
        <hr className="long-divider" />
        <Grid container className="grid">
          <Grid item>
            <Link className="link" href="/about/terms">
              Terms
            </Link>
          </Grid>
          <Grid item>&nbsp;|&nbsp;</Grid>
          <Grid item>
            <Link className="link" href="/about/privacy">
              Privacy
            </Link>
          </Grid>
        </Grid>
      </FooterBox>
    </>
  );
};

export default PrimaryFooter;
