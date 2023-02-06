import React from 'react';

const SidebarState = {
  open: true,
  setOpen: (_state: boolean) => {},
};

export default React.createContext(SidebarState);
