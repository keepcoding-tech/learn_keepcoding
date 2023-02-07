const appBar = {
  bgcolor: 'var(--header-footer-color)',
  zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
};

const image = {
  width: '150px',
  height: '50px',
};

export const styles = {
  appBar,
  image,
};
