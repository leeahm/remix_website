import { useContext, useEffect } from 'react';
import { ThemeContext, ThemeOptionsContext } from '../App';
import ButtonPlusArrow from '../components/ui/ButtonPlusArrow.jsx';
import morph from '../assets/morph.mp4';
import livingRoom from '../assets/living-room.mp4';
import viewCollection from '../assets/view-collection.png';
import sbt from '../assets/sorry-big-tech.png';
import lock from '../assets/lock.png';
import development from '../assets/development.jpg';
import VideoCarousel from '../components/ui/VideoCarousel.jsx';
import modals from '../modals.jsx';
import BeyondVisualsDivision from '../components/BeyondVisualsDivision.jsx';
import { useWindowSize } from '@uidotdev/usehooks';

function Software() {
  // eslint-disable-next-line no-unused-vars
  const [, setTheme] = useContext(ThemeContext);
  const [, setThemeOptions] = useContext(ThemeOptionsContext);

  useEffect(() => {
    setTheme('dark');
    setThemeOptions((prev) => ({
      ...prev,
      dotColor: 'text-purple-500',
    }));
  }, []);
  const { width } = useWindowSize();

  return (
    <>
      <div className='text-white w-full flex flex-col items-center text-center'>
        <h1 className='mobile-heading-paragraph z-10 lg:text-6xl lg:leading-tight -mb-24 lg:-mb-30 sm:px-8 xl:block'>
          The next leap in communication will come from a deep vision model.
        </h1>
        <div className='w-[210vw] flex justify-center sm:w-screen relative mb-6'>
          <video className='relative' autoPlay playsInline loop muted>
            <source src={morph} />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className='text-5xl sm:mt-48 lg:mt-10'>
          Meet <span className='text-purple-500'>Tele</span>Form
        </h1>
        <p className='med-30 mt-6'>
          The first model that can <span className='text-purple-500'>instantly generate</span> {width > 660 && <br />}
          new camera views from {width < 640 && <br />}
          <span className='text-purple-500'>live data.</span>
        </p>
        <div className='mt-4 flex flex-row justify-center items-center'>
          <ButtonPlusArrow
            onClick={modals.MeetTeleForm}
            text={`${width < 1024 ? 'Learn more' : 'Learn more about the model'}`}
          />
        </div>
        {/* <div className='w-full overflow-x-hidden'> */}
        <VideoCarousel className='w-[100vw] lg:w-48' videos={[livingRoom, livingRoom]} />

        {/* </div> */}
        <p className='med-30 mt-24 mb-4'>
          More than 100,000 bespoke training images.
          {width > 600 ? <br /> : ' '}
          200,000,000 parameters.{<br />} And <span className='text-purple-500'>growing</span>.
        </p>
        <ButtonPlusArrow className={''} onClick={modals.training} text='Learn more about training' />
        <img
          alt='A grid of images displaying various images captured by the teleporter device.'
          className='min-w-[92rem] mt-16 lg:min-w-0 mb-16'
          src={viewCollection}
        />
        <BeyondVisualsDivision />
        
        <div className='block max-w-full mb-28 lg:flex lg:mt-32 lg:items-center'>
          <img
            alt='a developer works on his computer'
            className='hidden rounded-[3rem] lg:block w-1/2'
            src={development}
          />
          <div className='flex flex-col items-center max-w-full px-6'>
            <p className='med-30 mt-36 mb-4 lg:mt-0'>TeleForm is under active development. Come make your mark.</p>
            {/* <p className="hidden reg-20 mx-12 lg:block">
              If you{'\u2019'}re a passionate researcher or engineer, come and build something important.{' '}
            </p> */}
            <ButtonPlusArrow
              onClick={() => modals.wantToBuildTheFuture('dark')}
              style='w-56'
              text='I want to build the future'
            />
            <img
              alt='a developer works on his computer'
              className='mt-16 min-w-[140vw] -ml-10 md:-ml-20 sm:min-w-[120vw] lg:hidden '
              src={development}
            />
            {/* <p className="reg-20 mt-8 mx-12 lg:hidden">
              If you{'\u2019'}re a passionate researcher or engineer, come and build something important.{' '}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Software;
