import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import { AccordionSummary, Box, Fab, InputBase, Paper } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import SidebarState from './SidebarState';

export interface ISidebar {
  module: string;
  chapters: string[];
  docsIds: string[][];
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
  border: 0,
  '&:before': {
    display: 'none',
  },
  // borderBottom: '1px solid',
  // borderColor: 'var(--hr-border-color)',
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({}));

const Sidebar: React.FC<ISidebar> = (props) => {
  const { open, setOpen } = useContext(SidebarState);

  const toggleDrawer = (state: boolean) => {
    if (state) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: 270,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 270,
              boxSizing: 'border-box',
              backgroundColor: 'var(--cards-color)',
              color: 'var(--secondary-font-color)',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader />
          <Paper
            elevation={0}
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              margin: '24px 24px',
              width: 220,
              height: 30,
              backgroundColor: 'var(--text-field-color)',
            }}
          >
            <FilterListIcon sx={{ color: 'var(--primary-font-color)' }} />
            <InputBase
              placeholder="Filter"
              sx={{
                marginLeft: 3,
                color: 'var(--primary-font-color)',
              }}
            />
          </Paper>
          <hr className="divider" />
          <span
            style={{
              margin: '12px 24px',
              fontSize: '14px',
            }}
          >
            {props.module}
          </span>
          <hr className="divider" />
          <div>
            {props.chapters.map((chapter, index) => (
              <>
                <Accordion
                  key={index}
                  sx={{
                    backgroundColor: 'var(--cards-color)',
                    color: 'var(--secondary-font-color)',
                  }}
                >
                  <AccordionSummary
                    sx={{
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(90deg)',
                      },
                    }}
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: 'var(--secondary-font-color)',
                        }}
                      />
                    }
                  >
                    <span
                      style={{
                        fontSize: '14px',
                        overflowWrap: 'break-word',
                      }}
                    >
                      <b>{chapter}</b>
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {props.docsIds[0].map((doc, index) => (
                        <div
                          key={index}
                          style={{
                            marginBottom: '12px',
                            fontSize: '14px',
                          }}
                        >
                          {doc}
                        </div>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <hr className="divider" />
              </>
            ))}
          </div>
          <Fab
            onClick={() => toggleDrawer(false)}
            size="small"
            sx={{
              backgroundColor: 'var(--background-color)',
              color: 'var(--primary-font-color)',
              margin: 0,
              top: 'auto',
              right: 'auto',
              bottom: 20,
              left: 200,
              position: 'fixed',
              '&:hover': {
                backgroundColor: 'var(--background-color)',
              },
            }}
          >
            <ChevronLeftIcon fontSize="small" />
          </Fab>
        </Drawer>
        <DrawerHeader />
        {!open ? (
          <Fab
            onClick={() => toggleDrawer(true)}
            size="small"
            sx={{
              backgroundColor: 'var(--background-color)',
              color: 'var(--primary-font-color)',
              margin: 0,
              top: 'auto',
              right: 'auto',
              bottom: 20,
              left: 20,
              position: 'fixed',
              '&:hover': {
                backgroundColor: 'var(--background-color)',
              },
            }}
          >
            <ChevronRightIcon fontSize="small" />
          </Fab>
        ) : null}
      </Box>
    </>
  );
};

export default Sidebar;
