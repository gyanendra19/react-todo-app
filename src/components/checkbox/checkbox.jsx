import * as React from 'react';
import './checkbox.scss';
import { Button, Checkbox } from '@mui/material'

export const Checkboxx = ({
  onClick, checked, onDelete, label, onKeyUp,
}) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <Checkbox
      sx={{padding: '0'}}
        tabIndex="-1"
        checked={checked}
        onChange={onClick}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
    </div>
    <Button sx={{padding: '0px', '&:hover': {backgroundColor: 'darkgray'}, color: 'black', bgcolor:'gray'}} type="button" className="checkbox-delete" onClick={onDelete}>
      x
    </Button>
  </div>
);
