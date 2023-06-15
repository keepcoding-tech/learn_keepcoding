import { SetStateAction, SyntheticEvent } from 'react';
import { ICreateChapterTemplate } from '../../../components/templates/create-chapter/CreateChapterTemplate';

const defaultCreateChapter: ICreateChapterTemplate = {
  id: '',
  setId: function (_value: SetStateAction<string>): void {},
  title: '',
  setTitle: function (_value: SetStateAction<string>): void {},
  documents: [],
  setDocuments: function (_value: SetStateAction<{ id: string }[]>): void {},
  alert: { status: undefined, message: '' },
  submitData: function (_e: SyntheticEvent<Element, Event>): Promise<void> {
    throw new Error('Function not implemented.');
  },
  submitButton: 'create',
};

const editCreateChapter: ICreateChapterTemplate = {
  id: 'storybook-chapter',
  setId: function (_value: SetStateAction<string>): void {},
  title: 'StoryBook Chapter',
  setTitle: function (_value: SetStateAction<string>): void {},
  documents: [
    { id: 'storybook-1' },
    { id: 'storybook-2' },
    { id: 'storybook-3' },
  ],
  setDocuments: function (_value: SetStateAction<{ id: string }[]>): void {},
  alert: { status: 'success', message: 'Chapter updated succesfully!' },
  submitData: function (_e: SyntheticEvent<Element, Event>): Promise<void> {
    throw new Error('Function not implemented.');
  },
  submitButton: 'update',
};

export const mocksCreateChapterTemplateProps = {
  defaultCreateChapter,
  editCreateChapter,
};
