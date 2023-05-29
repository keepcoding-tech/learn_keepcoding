import { IDocsLayout } from '../../../components/layouts/docs/DocsLayout';

const defaultDocLayout: IDocsLayout = {
  children: 'Default Docs Layout',
  status: 'authenticated',
  sidebar: {
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
    ],
    currentChapter: 'test-chapter',
  },
};

export const mocksDocsLayoutProps = { defaultDocLayout };
