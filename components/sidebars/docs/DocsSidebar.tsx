import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React, { useContext } from 'react';
import SidebarState from './DocsSidebarState';
import { styles } from './DocsSidebarStyles';

export interface IDocsSidebar {
  module: {
    id: string;
    title: string;
  };
  chapters: {
    id: string;
    title: string;
    documents: {
      id: string;
      title: string;
    }[];
  }[];
  currentChapter: string;
}

const DocsSidebar: React.FC<IDocsSidebar> = (props) => {
  const { open, setOpen } = useContext(SidebarState);

  const DrawerHeader = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} {...props} />
  ))(() => ({}));

  const AccordionDetails = styled(MuiAccordionDetails)(() => ({}));

  return (
    <>
      <Drawer variant="persistent" anchor="left" open={open} sx={styles.drawer}>
        <DrawerHeader sx={styles.drawerHeader} />
        <Paper elevation={0} sx={styles.paper}>
          <FilterListIcon sx={styles.icon} />
          <InputBase placeholder="Filter" sx={styles.inputBase} />
        </Paper>
        <hr className="short-divider" />
        <span style={styles.moduleText}>
          <b>{props.module.title.toUpperCase()}</b>
        </span>
        <hr className="short-divider" />
        <div>
          {props.chapters.map((chapter) => (
            <div key={chapter.id}>
              <Accordion
                defaultExpanded={chapter.id === props.currentChapter}
                sx={styles.accordion}
              >
                <AccordionSummary
                  sx={styles.accordionSummary}
                  expandIcon={<ExpandMoreIcon sx={styles.icon} />}
                >
                  <span style={styles.chapterText}>
                    <b>{chapter.title.toUpperCase()}</b>
                  </span>
                </AccordionSummary>
                <AccordionDetails>
                  {chapter.documents.map((doc) => (
                    <div key={doc.id} style={styles.doc}>
                      <Link
                        className="link"
                        href={`/docs/${props.module.id}/${chapter.id}/${doc.id}`}
                      >
                        {doc.title}
                      </Link>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
              <hr className="short-divider" />
            </div>
          ))}
        </div>
        <Fab onClick={() => setOpen(false)} size="small" sx={styles.fabIn}>
          <ChevronLeftIcon fontSize="small" />
        </Fab>
      </Drawer>
      <DrawerHeader />
      {!open ? (
        <Fab onClick={() => setOpen(true)} size="small" sx={styles.fabOut}>
          <ChevronRightIcon fontSize="small" />
        </Fab>
      ) : null}
    </>
  );
};

export default DocsSidebar;
