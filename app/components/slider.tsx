import Slider from '@mui/material/Slider';

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 75,
      label: '75',
    },
    {
        value: 100,
        label: '100',
      },
  ];

export default function DiscreteSliderMarks() {
    return (
        <Slider
            aria-label="Custom marks"
            defaultValue={20}
            // getAriaValueText={valuetext}
            step={10}
            valueLabelDisplay="auto"
            // className='mt-8'
            marks={marks}
        />
        );
}