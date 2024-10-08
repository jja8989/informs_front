import React from 'react';
import TextField from '@mui/material/TextField';
// import Grid2 from '@mui/material/Unstable_Grid2'; // Grid2 is the new version

export default function YearRangePicker() {
  return (
    <div className='flex gap-4'>
          <TextField
            id='from-year'
            size='small'
            name="From"
            type="number"
            label="From"
            variant="outlined"
            fullWidth
            className='bg-white'
            defaultValue={1900}  // Set the default year value here
            slotProps={{
              input: {
                inputProps: {
                  min: 1900,
                  max: 2099,
                  step: 1,  // Set step value here
                },
              },
            }}
            placeholder="From"
          />

          <TextField
            size='small'
            name="To"
            type="number"
            label="To"
            variant="outlined"
            className='bg-white'
            fullWidth
            defaultValue={2024}  // Set the default year value here
            slotProps={{
              input: {
                inputProps: {
                  min: 1900,
                  max: 2099,
                  step: 1,  // Set step value here
                },
              },
            }}
            placeholder="To"
          />
    </div>
  );
}
