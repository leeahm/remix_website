import { useContext } from 'react';
import { ThemeContext } from '../App';
import { useEffect } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import xButton from '../assets/x-button.png'
import { useLocation, useNavigate } from "react-router-dom";


function Keynote() {
  // eslint-disable-next-line no-unused-vars
  const [, setTheme] = useContext(ThemeContext);
  // const [, setThemeOptionsContext] = useContext(ThemeOptionsContext);
  const { width, height } = useWindowSize();
  let navigate = useNavigate()
  
  const location = useLocation()

  useEffect(() => {
    setTheme('none')
    return () => {}
  });


  return (
    <div className="absolute w-full h-full flex justify-center items-center top-0 bg-black">
      <div onClick={() => {
        if (location.state?.linkedProduct) {
          navigate('/product');
        } else {
          navigate('/')
        }
        }} className='absolute top-3 right-5 w-[50px] h-[50px] hover:cursor-pointer'>
        <img alt="ui X button" className='w-full h-full object-cover' src={xButton} />
      </div>
      <iframe className='video'
        width={`${width < 1300 ? width : width - 200}`}
        height={`${width > 1300 ? height: height - 200}`}
        allow='autoplay'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/qMnZMK1k-6o?autoplay=1`}>
      </iframe>
    </div>
  );
}

export default Keynote;
