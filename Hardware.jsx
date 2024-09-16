import { useContext, useEffect } from 'react';
import { ThemeContext, ThemeOptionsContext } from '../App';
import teleporter from '../assets/teleporter-topdown.jpg';
import ButtonPlusArrow from '../components/ui/ButtonPlusArrow';
import capture from '../assets/capture.mp4';
import couch from '../assets/couch.jpg';
import deviceWithTooltips from '../assets/device-with-tooltips-orange.svg';
import { useWindowSize } from '@uidotdev/usehooks';
import modals from '../modals';
import { useNavigate } from 'react-router-dom';
import teleporter1 from '../assets/scroll/teleporter-1-low-quality.png';
import teleporter2 from '../assets/scroll/teleporter-2-low-quality.png';
import teleporter3 from '../assets/scroll/teleporter-3-low-quality.png';
import teleporter4 from '../assets/scroll/teleporter-4-low-quality.png';
import teleporter5 from '../assets/scroll/teleporter-5-low-quality.png';
import teleporter6 from '../assets/scroll/teleporter-6-low-quality.png';
import teleporter7 from '../assets/scroll/teleporter-7-low-quality.png';
import headset from '../assets/headset-resized.jpg'
import teleporterTopDown from '../assets/teleporter-topdown-cropped.jpg';
import step3LowQTrim from '../assets/step3-low-quality-trimmed.mp4';

function Product() {
  const [, setTheme] = useContext(ThemeContext);
  const [, setThemeOptions] = useContext(ThemeOptionsContext);

  useEffect(() => {
    setThemeOptions((prev) => ({
      ...prev,
      dotColor: 'text-green-500',
    }));
    setTheme('light');
  }, []);
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  // Stuck in the mud scroll logic - refactor to use intersection observer API, and a single image with rendered text to increase performance and quality
  let justCalledScrollContent = false;
  const scrollContent = [teleporter1, teleporter2, teleporter3, teleporter4, teleporter5, teleporter6, teleporter7];
  const handleScroll = () => {
    if (justCalledScrollContent || !height || width >= 768) return;
    const content = document.querySelector('#scroll-content');
    const contentImage = document.querySelector('#scroll-content-image');
    const scroll = document.getElementById('scroll');
    const scrollBucketSize = (scroll.offsetHeight - height) / scrollContent.length;
    const { top, bottom } = document.getElementById('scroll').getBoundingClientRect();
    if (top < 0 && 0 < bottom - Math.abs(height) - 32) {
      scroll.classList.add('opacity-0');
      content.classList.remove('hidden');
      const position = Math.floor(-top / scrollBucketSize);
      contentImage.src = scrollContent[position];
    } else {
      content.classList.add('hidden');
      scroll.classList.remove('opacity-0');
    }
    justCalledScrollContent = true;
    setTimeout(() => {
      justCalledScrollContent = false;
    }, 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollImageStyle =
    '-ml-[17rem] iphone12pro:-ml-[15.5rem] iphoneX:-ml-[13rem] lgPhone:-ml-[7rem] sm:-ml-[10rem] w-[60rem] sm:w-[80rem] h-[100mvh] flex items-center mt-20';
  const scrollTextStyle = 'med-40 z-10 mt-24 sm:mt-32 mx-auto -mb-[11rem] sm:text-4xl';

  return (
    <div className="h-m-nav w-full flex flex-col items-center text-center">
      <div className="w-full lg:-mt-12 lg:flex lg:items-center lg:h-[calc(100vh-9rem)]">
        <div className="flex flex-col items-center justify-center text-center my:auto lg:ml-6 lg:mr-10 lg:text-left lg:items-start">
          <h1 className="font-medium text-[5rem] mt-5 lg:mt-0 leading-[85px] lg:text-8xl lg:leading-none">
            Meet
            <br />
            Prototype
          </h1>
          <div className="w-[75px] h-[75px] bg-black flex justify-center items-center rounded-3xl mt-8">
            <p className="text-4xl mb-2 text-white">1.0</p>
          </div>
        </div>
        <div className="w-full sm:w-96 lg:w-128 mt-20 mx-auto">
          <img alt="A chrome and black disk-shaped device with small cameras surrounding the perimeter." className="w-full h-full object-cover" src={teleporter} />
        </div>
      </div>

      <p className="med-40 mt-12">
        Infinitely many views.
        <br /> <span className="text-gray-400">One vantage point.</span>
      </p>
      <ButtonPlusArrow
        onClick={modals.teleporterHardware}
        style="mt-10"
        text={width >= 768 ? 'Learn more about Teleporter hardware' : `Learn more`}
      />

      <div className="md:flex md:mt-20 md:w-screen xl:w-full">
        <div className="overflow-hidden flex-1">
          <div className="overflow-hidden">
            <video
              loop
              autoPlay
              muted
              playsInline
              className="mt-10 min-w-[120vw] md:max-h-256 md:mt-0 md:min-w-full"
              src={capture}
            />
          </div>
          <p className="med-17 mt-4 xl:mx-4">
            Today{'\u2019'}s 3D capture requires many
            <br />
            vantage points.
          </p>
        </div>
        <div className="overflow-hidden mx-auto flex-1">
          <div className="mx-auto overflow-hidden">
            <img alt="The teleporter device sits atop a coffee table surrounded by couches and a fire in the background." className="mt-8 min-w-[100vw] mx-auto md:max-h-256 md:min-w-0 md:mt-0" src={couch} />
          </div>
          <p className="med-17 mt-4">Teleporter requires one.</p>
        </div>
      </div>

      <p className="med-40 mt-20 lg:text-center lg:self-center z-10">
       Teleporter is your
        <br />
        <span className="secondary-font-gray"> portal </span>
        to any space.
      </p>

      {/* <ButtonPlusSignLightTheme
        style="lg:self-start mb-10 lg:mb-0 z-10"
        text={width < 1024 ? 'Learn more' : 'Learn more about Spatial Calling with Teleporter'}
        onClick={modals.spatialCalling}
      /> */}
      
{/* breakdown equation */}
<div className="flex flex-col items-center mb-12 w-full max-w-5xl mx-auto py-20">
  <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8 pt-5">
    <div className="flex flex-col items-center">
      <img src={teleporterTopDown} alt="Teleporter Device" className="w-60 h-60 object-contain" />
      <span className="text-2xl mt-2">Teleporter</span>
    </div>
    <div className="flex items-center">
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="flex flex-col items-center">
      <img src={headset} alt="VR Headset" className="w-60 h-60 object-contain" />
      <span className="text-2xl mt-2">Headset</span>
    </div>
    <div className="flex items-center">
      <svg className="w-18 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9H19M5 15H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="flex flex-col items-center md:ml-9">
      <video 
        src={step3LowQTrim} 
        alt="Spatial Calling" 
        className="w-80 h-60 rounded-2xl object-cover mb-4"
        autoPlay 
        loop 
        muted 
        playsInline
      />
      <span className="text-2xl">Spatial Call</span>
    </div>
  </div>
</div>  

      {width >= 768 && (
        <p className="med-40 z-10 mt-32 mb-auto">
          Engineered{' '}
          <span className="text-gray-400">
            from
            <br />
            the ground up
          </span>{' '}
          by Remix
        </p>
      )}
      {width >= 768 ? (
        <div className="mt-[-100px] w-screen lg:w-full mb-32">
          <img alt="The teleporter device with various tooltips describing its qualities." className="w-full h-full object-contain" src={deviceWithTooltips} />
          {/* {width < 1024 && <img className="ml-[100vw] scale-125 mt-10 mb-20" src={deviceWithTooltips} />} */}
        </div>
      ) : (
        <>
          {/* Stuck in the mud scroll */}
          {/* pre scroll content */}
          <div id="scroll" className={`w-[200vw] overflow-hidden flex flex-col`}>
            <div className="max-w-72 mx-auto z-10 relative">
              <p className={`${scrollTextStyle}`}>
                Engineered{' '}
                <span className="text-gray-400">
                  from
                  <br />
                  the ground up
                </span>{' '}
                by Remix
              </p>
            </div>
            <div className={`${scrollImageStyle} h-screen mb-304`}>
              <img alt="The teleporter device with various tooltips describing its qualities." className="object-cover w-full" src={scrollContent[0]} />
            </div>
            <div className="max-w-72 mx-auto z-10 relative">
              <p className={`${scrollTextStyle}`}>
                Engineered{' '}
                <span className="text-gray-400">
                  from
                  <br />
                  the ground up
                </span>{' '}
                by Remix
              </p>
            </div>

            <div className={`${scrollImageStyle} h-screen`}>
              <img alt="The teleporter device with various tooltips describing its qualities." className="object-cover w-full" src={scrollContent[scrollContent.length - 1]} />
            </div>
            <div />
          </div>
          {/* content when scroll is open */}
          <div id="scroll-content" className="bg-white z-10 top-0 fixed h-[110lvh] hidden">
            <div className="max-w-72 mx-auto z-10 relative">
              <p className={`${scrollTextStyle}`}>
                Engineered{' '}
                <span className="text-gray-400">
                  from
                  <br />
                  the ground up
                </span>{' '}
                by Remix
              </p>
            </div>

            <div className="h-screen w-[200vw] overflow-hidden flex items-center -z-10 relative">
              <div className={`${scrollImageStyle}`}>
                <img alt="The teleporter device with various tooltips describing its qualities." id="scroll-content-image" className="object-cover min-w-full" src={teleporter1} />
              </div>
            </div>
          </div>
        </>
      )}
      <p className="med-40">
        Hardware and software.
        <br />
        Built for each other.
      </p>
      <ButtonPlusArrow onClick={() => navigate('/software')} style="mt-10 mb-20" text="Learn more about software" />
    </div>
  );
}

export default Product;
