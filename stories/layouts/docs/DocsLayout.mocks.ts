import { IDocsLayout } from '../../../components/layouts/docs/DocsLayout';

const docs: IDocsLayout = {
  children: 'Hello, World!!',
  status: 'authenticated',
  sidebar: {
    module: 'Fundamentals',
    chapters: [
      'Get started with KCDP',
      'Manage your KCDP projects',
      'Platforms and frameworks',
      'Prototype and test with Emulator Suite',
    ],
    docsIds: [
      ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
      ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
      ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
      ['test-0', 'test-1', 'test-2', 'test-3', 'test-4', 'test-5'],
    ],
  },
};

export const mocksDocsLayoutProps = { docs };
