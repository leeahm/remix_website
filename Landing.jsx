import teleporterImage from '../assets/teleporter.jpg';
import teleporterImageFallback from '../assets/teleporter-fallback.jpg';
import ButtonPlusArrow from '../components/ui/ButtonPlusArrow';
import keynoteThumbnail from '../assets/keynote-thumbnail.jpeg';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeContext, ThemeOptionsContext } from '../App';
import { Img } from 'react-image';

function Landing() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useContext(ThemeContext);
  const [, setThemeOptions] = useContext(ThemeOptionsContext);

  useEffect(() => {
    setThemeOptions((prev) => ({
      ...prev,
      dotColor: 'text-red-500',
    }));
    setTheme('light');
  }, []);

  const navigate = useNavigate();
  return (
    <div className="h-m-nav flex items-center justify-center">
      <div className="flex items-center flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center lg:-mt-20 lg:mr-14 lg:block">
          <h2 className="max-w-96 text-6xl font-medium text-center lg:tracking-tight lg:text-left lg:text-6xl xl:text-7xl lg:-ml-2">
            Teleporter
          </h2>
          <p className="text-[#9B9DA2] leading-6 xl:leading-[1.85rem] font-light mt-10 lg:mt-4 text-2xl xl:text-2xl tracking-wide text-center lg:text-left">
            A new category of
            <br />
            communication tool.
          </p>
          {/* show promoted film box here on large screen */}
        </div>
        <div className="max-w-[700px] lg:max-w-[776px] mt-24 mx-auto lg:ml-0 lg:w-auto lg:mt-36">
          <Img alt="A chrome and black disk-shaped device with small cameras surrounding the perimeter." className="w-full h-full object-cover" src={[teleporterImage, teleporterImageFallback]} />
        </div>
        {/* show promoted film box here on small screen */}
        <div onClick={() => navigate('/keynote')} className="flex hover:cursor-pointer mt-10 items-center lg:hidden">
          <div className="bordered-div w-28 h-12 px-2">
            <img alt="ui play button and techstars logo" className="w-full h-full object-contain" src={keynoteThumbnail} />
          </div>
          <p className="secondary-font-gray ml-4 font-normal text-sm">Watch the Keynote</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
