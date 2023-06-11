import Head from "next/head";

function InternalError() {
  return <>
    <Head>
      <title>500</title>
    </Head>
    <center style={{marginTop: '10%'}}>
      <p style={{fontSize: '200px'}}>500</p>
      <p style={{fontSize: '50px'}}>Internal Error</p>
      <p style={{fontSize: '20px'}}>
        <b>Oops, something went very wrong :(</b>
      </p>
    </center>
  </>;
}

export default InternalError;
