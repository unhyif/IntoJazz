import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import styles from './DateRangePicker.module.scss';

const DateRangePicker = ({ range, setRange }) => {
  const onFromChange = from => setRange(range => [from, range[1]]);
  const onToChange = to => setRange(range => [range[0], to]);

  useEffect(() => {
    if (range[0] > range[1]) {
      onToChange(range[0]);
    }
  }, [range]);

  return (
    <div className={styles.picker}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="From"
          value={range[0]}
          onChange={onFromChange}
          renderInput={params => <TextField {...params} />}
        />
        <MobileDatePicker
          label="To"
          value={range[1]}
          onChange={onToChange}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateRangePicker;
