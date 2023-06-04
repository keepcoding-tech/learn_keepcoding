const appBar = {
  bgcolor: 'var(--primary-background-color)',
  zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
};

export const styles = {
  appBar,
};
