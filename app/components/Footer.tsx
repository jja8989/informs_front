import Image from 'next/image'
import gsds_logo from './gsds_logo.png'
import viba_logo from './viba_logo2.png'

const Footer = () => {
    return (
      <footer className="p-4 text-center">

        <div className="flex gap-8 text-[8px] text-gray-500 w-full flex items-center justify-end pr-4">
          {/* <a href="https://gsds.snu.ac.kr" target="_blank" rel="noopener noreferrer">
          <Image src = {gsds_logo} className='logos w-32' alt='Graduate School of Data Science' title = "Graduate School of Data Science" />
          </a> */}
          {/* <div className='flex gap-8 authors bg-gray-300'> */}
            <p> <a href="mailto:yeeun.choi@snu.ac.kr"> Yeeun Choi (yeeun.choi@snu.ac.kr</a>) </p>
            <p> <a href="mailto:jja8989@snu.ac.kr"> Jinwoo Choi (jja8989@snu.ac.kr</a>) </p>
            <p> <a href="mailto:hyunwoopark@snu.ac.kr"> Hyunwoo Park (hyunwoopark@snu.ac.kr</a>)</p>
          {/* </div> */}
          {/* <a href="https://vibalab.org" target="_blank" rel="noopener noreferrer">
            <Image src = {viba_logo} className='logo w-24' alt='ViBA : Visualization and Business Analytics' title = "ViBA : Visualization and Business Analytics" />
          </a> */}
        </div>
      </footer>
    )
  }
  
  export default Footer
  