const appBar = {
  bgcolor: 'var(--secondary-background-color)',
  zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
};

export const styles = {
  appBar,
};
