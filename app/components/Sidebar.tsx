"use client"

import './App.css'
import SearchBar from '@/app/components/Searchbar';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import YearRangePicker from '@/app/components/date'
import DiscreteSliderMarks from '@/app/components/slider'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React, { useState, useRef } from 'react';
import Divider from '@mui/material/Divider';


// import PeriodSelect from '@/app/components/date';

// import Button from '@mui/material/Button';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const sidebarContainer = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        if (sidebarRef.current && sidebarContainer.current && navRef.current) {
            // Animate width
            sidebarRef.current.style.transition = 'width 0.3s ease-in-out';
            sidebarRef.current.style.width = isOpen ? '0px' : '';
            sidebarContainer.current.style.backgroundColor = isOpen ? 'white' : 'rgb(253,253,253)';
            // sidebarContainer.current.style.borderRight = isOpen ? 'none' : '1px solid grey';
            sidebarRef.current.style.overflow = 'hidden';
            navRef.current.style.width = isOpen ? '240px' : '';
            }
        setIsOpen(!isOpen);
    };


    return(
        <div ref={sidebarContainer} className='sidebar-container pt-4 h-full'>
            <IconButton className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>

            <aside ref={sidebarRef} className="w-64 flex-1">
            <nav ref={navRef} className='mt-4 p-4 overflow-y-scroll'>

                <SearchBar />

                {/* <Divider variant="middle" flexItem /> */}

                <hr className='mt-8' />

                <label className='mt-8 mb-2 block'>Tag 1</label>

                <FormControl fullWidth margin="normal"
                    size='small'
                    sx={{
                        background : 'white',
                        margin : 0
                    }}>
                    <InputLabel> Tag 1 </InputLabel>
                    <Select defaultValue="">
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Value1">Value1</MenuItem>
                        <MenuItem value="Value2">Value2</MenuItem>
                    </Select>
                </FormControl>

                <hr className='mt-8' />

                <label className='mt-8 mb-2 block'>Tag 2</label>

                <FormControl fullWidth margin="normal"
                    size='small'
                    sx={{
                        background : 'white',
                        margin:0
                    }}>
                    <InputLabel> Tag 2</InputLabel>
                    <Select defaultValue="">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Value1">Value1</MenuItem>
                    <MenuItem value="Value2">Value2</MenuItem>
                    </Select>
                </FormControl>

                <hr className='mt-8' />

                <label htmlFor="region-select" className="mt-8 mb-2 block">Region</label>

                {/* FormControl with InputLabel and Select */}
                <FormControl
                    fullWidth
                    margin="normal"
                    size="small"
                    sx={{
                        background: 'white',
                        margin: 0,
                    }}
                >
                <InputLabel id="region-label">Region</InputLabel>
                <Select
                    defaultValue=""
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Region1">Region1</MenuItem>
                    <MenuItem value="Region2">Region2</MenuItem>
                </Select>
                </FormControl>

                <hr className='mt-8' />
                
                <label htmlFor="from-year" className='mt-8 mb-2 block'>Period</label>
                <YearRangePicker />
    {/* 
                <label htmlFor="from-year" className='mt-8 mb-2 block'>Minimum Cluster Size</label>
                <DiscreteSliderMarks /> */}

                
                {/* <div>
                    <input name="From" type="number" min="1900" max="2099" step="1" placeholder="From" />
                    <input name="To" type="number" min="1900" max="2099" step="1" placeholder="To"/>
                </div> */}

                
            </nav>
            </aside>
        </div>
    )
}

export default Sidebar