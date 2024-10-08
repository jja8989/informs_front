import './App.css'
import Image from 'next/image'
import gsds_logo from './gsds_logo.png'
import viba_logo from './viba_logo2.png'
import Link from 'next/link';


const Header = () => {
 return(
    <header className="header">
        <div className="flex items-center justify-between px-4 m-4">
        {/* <a href="https://gsds.snu.ac.kr" target="_blank" rel="noopener noreferrer">
        <Image src = {gsds_logo} className='logos w-40' alt='Graduate School of Data Science' title = "Graduate School of Data Science" />
        </a> */}

        <a href="/">
        <h1 className='text-xs sm:text-xs md:text-lg lg:text-xl xl:text-2xl'>Mapping the Past to Build the Future</h1>
        </a>
        
        {/* <a href="https://vibalab.org" target="_blank" rel="noopener noreferrer">
        <Image src = {viba_logo} className='logo w-40' alt='ViBA : Visualization and Business Analytics' title = "ViBA : Visualization and Business Analytics" />
        </a> */}
        </div>
        

    </header>
 ) 
}

export default Header