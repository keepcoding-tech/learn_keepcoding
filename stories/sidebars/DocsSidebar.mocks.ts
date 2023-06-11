import { IDocsSidebar } from '../../components/sidebars/docs/DocsSidebar';

const defaultDocsSidebar: IDocsSidebar = {
  module: {
    id: 'test-module',
    title: 'Test Module',
  },
  chapters: [
    {
      id: 'test-chapter',
      title: 'Test Chapter',
      documents: [
        {
          id: 'test-doc-0',
          title: 'test doc 0',
        },
        {
          id: 'test-doc-1',
          title: 'test doc 1',
        },
        {
          id: 'test-doc-2',
          title: 'test doc 2',
        },
      ],
    },
    {
      id: 'test-chapter-1',
      title: 'Test Chapter 1',
      documents: [
        {
          id: 'test-doc-0',
          title: 'test doc 0',
        },
        {
          id: 'test-doc-1',
          title: 'test doc 1',
        },
        {
          id: 'test-doc-2',
          title: 'test doc 2',
        },
      ],
    },
    {
      id: 'test-chapter-2',
      title: 'Test Chapter 2',
      documents: [
        {
          id: 'test-doc-0',
          title: 'test doc 0',
        },
        {
          id: 'test-doc-1',
          title: 'test doc 1',
        },
        {
          id: 'test-doc-2',
          title: 'test doc 2',
        },
      ],
    },
  ],
  currentChapter: 'test-chapter',
};

export const mocksDocsSidebarProps = { defaultDocsSidebar };
