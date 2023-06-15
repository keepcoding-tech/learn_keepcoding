import { SetStateAction, SyntheticEvent } from 'react';
import { ICreateModuleTemplate } from '../../../components/templates/create-module/CreateModuleTemplate';

const defaultCreateModule: ICreateModuleTemplate = {
  id: '',
  setId: function (_value: SetStateAction<string>): void {},
  title: '',
  setTitle: function (_value: SetStateAction<string>): void {},
  chapters: [],
  setChapters: function (_value: SetStateAction<{ id: string }[]>): void {},
  alert: { status: undefined, message: '' },
  submitData: function (_e: SyntheticEvent<Element, Event>): Promise<void> {
    throw new Error('Function not implemented.');
  },
  submitButton: 'create',
};

const editCreateModule: ICreateModuleTemplate = {
  id: 'storybook-module',
  setId: function (_value: SetStateAction<string>): void {},
  title: 'StoryBook Module',
  setTitle: function (_value: SetStateAction<string>): void {},
  chapters: [
    { id: 'storybook-1' },
    { id: 'storybook-2' },
    { id: 'storybook-3' },
  ],
  setChapters: function (_value: SetStateAction<{ id: string }[]>): void {},
  alert: { status: 'success', message: 'Module updated succesfully!' },
  submitData: function (_e: SyntheticEvent<Element, Event>): Promise<void> {
    throw new Error('Function not implemented.');
  },
  submitButton: 'update',
};

export const mocksCreateModuleTemplateProps = {
  defaultCreateModule,
  editCreateModule,
};
