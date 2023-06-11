import { SetStateAction } from 'react';
import { ITextInput } from '../../../../components/utils/inputs/text/TextInput';

const defaultTextInput: ITextInput = {
  id: 'default',
  value: 'Default',
  label: 'DEFAULT',
  setInput: function (_value: SetStateAction<string>): void {},
  required: false,
  fullWidth: true,
  multiline: false,
  minRow: 0,
};

const emptyTextInput: ITextInput = {
  id: 'empty',
  value: '',
  label: 'EMPTY',
  setInput: function (_value: SetStateAction<string>): void {},
  required: false,
  fullWidth: true,
  multiline: false,
  minRow: 0,
};

const areaTextInput: ITextInput = {
  id: 'area',
  value: `
    This is a text input area.
    Contains several lines,
    and is automatically resizable.
  `,
  label: 'AREA TEXT',
  setInput: function (_value: SetStateAction<string>): void {},
  required: true,
  fullWidth: true,
  multiline: true,
  minRow: 2,
};

export const mocksTextInputProps = {
  defaultTextInput,
  emptyTextInput,
  areaTextInput,
};
