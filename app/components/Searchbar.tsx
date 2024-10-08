import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


export default function SearchBar() {
    return (
        <div>
        <TextField
            fullWidth
            label="Search"
            size='small'
            slotProps = {{
                input: {
                    endAdornment:<InputAdornment position='end'>
                        <IconButton
                            sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Rectangular background for the icon
                                margin : '0px',
                                height : '100%',
                                padding: '8px 12px', // Adjust padding to make it rectangular
                                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' }, // Darker on hover
                                borderRadius : 0,
                                borderTopRightRadius: 2, // Remove circular border radius
                            }}
                            >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            }}
            sx={{
                 backgroundColor : 'white',
                '& .MuiInputBase-root': {
                  padding: '0', // Adjust label size here
                  borderRadius : 0,
                },
              }}
        />
        </div>
    );
}
