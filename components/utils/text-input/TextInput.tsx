import TextField from '@mui/material/TextField';
import React from 'react';
import { styles } from './TextInputStyles';

export interface ITextInput {
  id: string;
  value: string;
  label: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  required: boolean;
  fullWidth: boolean;
  multiline: boolean;
  minRow: number;
}

const TextInput: React.FC<ITextInput> = (props) => {
  return (
    <>
      <TextField
        id={props.id}
        value={props.value}
        placeholder={props.label}
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
        required={props.required}
        fullWidth={props.fullWidth}
        multiline={props.multiline}
        minRows={props.minRow}
        sx={styles.textField}
      />
    </>
  );
};

export default TextInput;
