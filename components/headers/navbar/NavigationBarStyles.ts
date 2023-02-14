const appBar = {
  bgcolor: 'var(--header-footer-color)',
  zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
};

export const styles = {
  appBar,
};
