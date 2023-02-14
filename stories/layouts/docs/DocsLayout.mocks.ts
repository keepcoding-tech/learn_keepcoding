import { IDocsLayout } from '../../../components/layouts/docs/DocsLayout';

const docs: IDocsLayout = {
  children: 'Hello, World!!',
  status: 'authenticated',
  sidebar: {
    module: {
      id: 'fundamentals',
      title: 'Fundamentals',
    },
    chapters: [
      {
        id: 'get-started',
        title: 'Get started with KCDP',
        docChapter: [
          {
            document: {
              id: 'test-0',
              title: 'test 0',
            },
          },
          {
            document: {
              id: 'test-1',
              title: 'test 1',
            },
          },
          {
            document: {
              id: 'test-2',
              title: 'test 2',
            },
          },
        ],
      },
    ],
    currentChapter: 'get-started',
  },
};

export const mocksDocsLayoutProps = { docs };
