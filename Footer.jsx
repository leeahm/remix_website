import ButtonPlusArrow from './ui/ButtonPlusArrow';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import modals from '../modals';

export default function Footer() {
  const [theme] = useContext(ThemeContext);
  return (
    <div
      id="footer"
      className={`relative items-center w-full h-[120px] sm:h-[110px] px-4 sm:px-8 ${
        theme == 'light' ? 'text-[#505050] bg-[#F5F5F7]' : 'text-white bg-[#1D1D1F]'
      }`}
    >
      <div className='relative h-[120px] sm:h-[110px] w-full max-w-304 mx-auto'>
      <div className="flex flex-col items-center sm:items-start">
        <p className="text-center sm:text-left text-sm sm:text-base -mb-4 ml-1 mt-3 md:mt-6">
          Don{'\u2019'}t miss out. Be the first to get Remix{'\u2019'}s latest.
        </p>
        <ButtonPlusArrow
          style="text-[.7rem] h-7 px-3"
          onClick={() => modals.newsletter(theme)}
          text="Sign up for priority updates"
          imgStyle='h-[8px] mt-[1px] ml-0'
          textStyle='mb-[2px] mr-0'
        />
      </div>
      <div className="absolute w-full justify-center sm:justify-end flex bottom-[6px] sm:bottom-2 right-[6px] sm:right-3 font-light text-[.65rem] sm:text-xs">
        <div className='hover:cursor-pointer' onClick={() => modals.disclaimer(theme)}>
          <p className='mr-4 underline'>Disclaimer</p>
        </div>
        <p>
          Copyright © Remix Inc. 2024. All rights reserved.
        </p>
      </div>
      </div>
    </div>
  );
}

// old footer
// return (
//   <div className="w-full h-10 px-8">
//     <hr />
//     <div className="flex mt-1">
//       <p className="footer-el ml-2">Remix Inc.</p>
//       <Link className="footer-el mr-6 ml-auto">About Us</Link>
//       <Link to="mailto:brandon@remix.ing" className="footer-el mr-2">
//         Contact
//       </Link>
//     </div>
//   </div>
// );
