import { SetStateAction, SyntheticEvent } from 'react';
import { ICreateDocumentTemplate } from '../../../components/templates/create-document/CreateDocumentTemplate';

const defaultCreateDocument: ICreateDocumentTemplate = {
  id: '',
  setId: function (_value: SetStateAction<string>): void {},
  title: '',
  setTitle: function (_value: SetStateAction<string>): void {},
  content: '',
  setContent: function (_value: SetStateAction<string>): void {},
  alert: { status: undefined, message: '' },
  submitData: function (_e: SyntheticEvent<Element, Event>): Promise<void> {
    throw new Error('Function not implemented.');
  },
  submitButton: 'create',
  author: {
    name: '',
    email: '',
  },
};

const editCreateDocument: ICreateDocumentTemplate = {
  id: 'storybook-document',
  setId: function (_value: SetStateAction<string>): void {},
  title: 'StoryBook',
  setTitle: function (_value: SetStateAction<string>): void {},
  content: `
#### THE LAW OF COFFEE

If you sit down to enjoy a hot cup of coffee,
then your boss will ask you to do something
that will last until the coffee is cold.

> Whoever said that the definition of insanity is doing the same thing over and over again and expecting different results has obviously never had to reboot a computer. — William Petersen

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!";
  return 0;
}
\`\`\`
`,
  setContent: function (_value: SetStateAction<string>): void {},
  alert: { status: 'success', message: 'Document updated succesfully!' },
  submitData: function (_e: SyntheticEvent<Element, Event>): Promise<void> {
    throw new Error('Function not implemented.');
  },
  submitButton: 'update',
  author: {
    name: '',
    email: '',
  },
};

export const mocksCreateDocumentTemplateProps = {
  defaultCreateDocument,
  editCreateDocument,
};
