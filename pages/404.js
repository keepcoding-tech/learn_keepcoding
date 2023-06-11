import Head from "next/head";

function PageNotFound() {
  return <>
    <Head>
      <title>404</title>
    </Head>
    <center style={{marginTop: '10%'}}>
      <p style={{fontSize: '200px'}}>404</p>
      <p style={{fontSize: '50px'}}>OOPS!</p>
      <p style={{fontSize: '20px'}}>
        <b>We can&apos;t find the page you&apos;re looking for :(</b>
      </p>
    </center>
  </>;
}

export default PageNotFound;
