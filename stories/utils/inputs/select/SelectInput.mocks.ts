import { SetStateAction } from 'react';
import { ISelectInput } from '../../../../components/utils/inputs/select/SelectInput';

const defaultSelectInput: ISelectInput = {
  id: 'default',
  value: 'default',
  setSelect: function (_value: SetStateAction<string>): void {},
  menuItems: ['default', 'empty'],
};

const emptySelectInput: ISelectInput = {
  id: 'empty',
  value: '',
  setSelect: function (_value: SetStateAction<string>): void {},
  menuItems: [],
};

const largeSelectInput: ISelectInput = {
  id: 'large',
  value: '',
  setSelect: function (_value: SetStateAction<string>): void {},
  menuItems: [
    'module',
    'chapter',
    'document',
    'division',
    'box',
    'departament',
    'field',
    'something',
    'new',
  ],
};

export const mocksSelectInputProps = {
  defaultSelectInput,
  emptySelectInput,
  largeSelectInput,
};
