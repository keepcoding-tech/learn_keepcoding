import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { styles } from './SelectInputStyles';

export interface ISelectInput {
  id: string;
  value: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  menuItems: string[];
}

const SelectInput: React.FC<ISelectInput> = (props) => {
  return (
    <>
      <Select
        id={props.id}
        value={props.value}
        fullWidth
        onChange={(e) => {
          props.setSelect(String(e.target.value));
        }}
        sx={styles.select}
        inputProps={styles.selectMenu}
      >
        {props.menuItems.map((item) => (
          <MenuItem value={item} key={item}>
            {item.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectInput;
