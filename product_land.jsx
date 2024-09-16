import { useContext, useEffect, useRef } from 'react';
import { ThemeContext, ThemeOptionsContext } from '../App';
import arrow from '../assets/arrow-right.png';
import teleporterTopDown from '../assets/teleporter-topdown-cropped.jpg';
import ButtonPlusArrow from '../components/ui/ButtonPlusArrow';
import CarouselBleed from '../components/ui/CarouselBleed.jsx';
import step1 from '../assets/step1.mp4';
import step1LowQ from '../assets/step1-low-quality.mp4';
import step2 from '../assets/step2.mp4';
import step2LowQ from '../assets/step2-low-quality.mp4';
import step3 from '../assets/step3.mp4';
import step3LowQ from '../assets/step3-low-quality.mp4';
import step3LowQTrim from '../assets/step3-low-quality-trimmed.mp4';
import text1 from '../assets/text-1.png';
import text2 from '../assets/text-2.png';
import text3 from '../assets/text-3.png';
import beatles from '../assets/beatles.jpg';
import beatlesLowQ from '../assets/beatles-low-quality.jpg';
import wifi from '../assets/wifi.jpg';
import wifiLowQ from '../assets/wifi-low-quality.jpg';
import security from '../assets/security.jpg';
import securityLowQ from '../assets/security-low-quality.jpg';
import { useWindowSize } from '@uidotdev/usehooks';
import heroVideo from '../assets/hero-video.mp4';
import ResizableGraphicPlusText from '../components/ResizableGraphicPlusText.jsx';
import lottie from 'lottie-web';
import animation from '../assets/spatial_calling.mp4';
import headset from '../assets/headset-resized.jpg'
import keynoteThumbnail from '../assets/keynote-thumbnail.jpeg';
import xButton from '../assets/x-button.png'
import { useLocation, useNavigate } from "react-router-dom";

import lottieBlur from '../assets/lotties/blur.json';
import lottieLine from '../assets/lotties/line.json';
import modals from '../modals.jsx';
import remixUITab from '../assets/remix-ui-tab.mp4';
import remixUITabLowQ from '../assets/remix-ui-tab-low-quality.mp4';
import ButtonPlusSignLightTheme from '../components/ui/ButtonPlusSignLightTheme.jsx';
import sharePhysicalEnviornments from '../assets/share-physical-enviornments.mp4';
import sharePhysicalEnviornmentsLowQ from '../assets/share-physical-enviornments-low-quality.mp4';
import engage from '../assets/engage.mp4';
import engageLowQ from '../assets/engage-low-quality.mp4';
import morph from '../assets/morph-low-quality.mp4';
import { Img } from 'react-image';
import teleporterImage from '../assets/teleporter.jpg';
import teleporterImageFallback from '../assets/teleporter-fallback.jpg';

function Product() {
  const [, setTheme] = useContext(ThemeContext);
  const [, setThemeOptions] = useContext(ThemeOptionsContext);
  const { width } = useWindowSize();
  const navigate = useNavigate();

  const spacialCallingVideosRef = useRef(null);
  const messageSlideInCalled = useRef(false);
  const topContentRef = useRef(null);
  const widthRef = useRef(null);
  const uiVideoRef = useRef(null);
  const heroRef = useRef(null);
  const messageSlideInTimeoutIDRef = useRef([]);

  // observer callbacks
  const playPauseVideo = (entries, video, videosToPause) => {
    if (!video) video = entries[0].target;
    if (videosToPause) {
      videosToPause.forEach((video) => video.pause());
    }
    if (video) {
      if (entries[0].isIntersecting) {
        // if (widthRef.current < 640 && !video.classList.contains('carousel-bleed-video-selector')) return;
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    }
  };
  const themeChange = (entries) => {
    if (widthRef.current > 640) {
      if (entries[0].isIntersecting) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  };
  const messageSlideIn = (entries) => {
    const messages = document.querySelectorAll('.text-message-selector');
    if (entries[0].isIntersecting && !messageSlideInCalled.current && messages.length === 3) {
      messageSlideInCalled.current = true;
      messages[0].classList.add('message-slide-in-up');
      messageSlideInTimeoutIDRef.current.push(setTimeout(() => messages[1].classList.add('message-slide-in-up'), 800));
      messageSlideInTimeoutIDRef.current.push(setTimeout(() => messages[2].classList.add('message-slide-in-up'), 1800));
      messages.forEach((msg) => observers.textMessageObserver.unobserve(msg));
    }
  };
  const addOrRemoveColorTheme = (width) => {
    if (width < 640 && widthRef.current >= 640) {
      setTheme('light');
    } else if (width >= 640 && widthRef.current < 640 && window.innerWidth > window.scrollY) {
      setTheme('dark');
    }
  };
  // const addOrRemoveVideoControls = (operation = 'add') => {
  //   const videos = document.querySelectorAll('video');
  //   if (operation == 'add') {
  //     videos.forEach((video) => {
  //       if (video.classList.contains('carousel-bleed-video-selector')) return;
  //       video.setAttribute('controls', 'controls');
  //     });
  //   } else {
  //     videos.forEach((video) => {
  //       video.removeAttribute('controls', 'controls');
  //     });
  //   }
  // };

  const observers = {
    textMessageObserver: new IntersectionObserver(
      (entries) => {
        messageSlideIn(entries);
      },
      { threshold: 0.8 }
    ),
    topContentObserver: new IntersectionObserver(themeChange, { threshold: 0.1 }),
    UiVideoOberver: new IntersectionObserver(
      (entries) => {
        console.log('play/pause ui')
        playPauseVideo(entries, uiVideoRef.current);
      },
      { threshold: 0.1 }
    ),
    carouselObserver: new IntersectionObserver(
      (entries) =>
        playPauseVideo(
          entries,
          document.querySelector('.slick-active video'),
          document.querySelectorAll('.slick-slide video')
        ),
      { threshold: 0.3 }
    ),
    SpacialCallingObserverOne: new IntersectionObserver(
      (entries) => playPauseVideo(entries, spacialCallingVideosRef[0]),
      {
        threshold: 0.9,
      }
    ),
    SpacialCallingObserverTwo: new IntersectionObserver(
      (entries) => playPauseVideo(entries, spacialCallingVideosRef[1]),
      {
        threshold: 0.9,
      }
    ),
    SpacialCallingObserverThree: new IntersectionObserver(
      (entries) => playPauseVideo(entries, spacialCallingVideosRef[2]),
      {
        threshold: 0.9,
      }
    ),
  };

  // activate lottie files on mount
  useEffect(() => {
    const blurAnim = lottie.loadAnimation({
      container: document.querySelector('#lottie-blur'),
      animationData: lottieBlur,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    const lineAnim = lottie.loadAnimation({
      container: document.querySelector('#lottie-line'),
      animationData: lottieLine,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    return () => {
      lineAnim.destroy();
      blurAnim.destroy();
    };
  }, []);

  useEffect(() => {
    // code to run regardless
    spacialCallingVideosRef.current = document.querySelectorAll('.spacial-calling-selector');
    const uiVidFromRef = uiVideoRef.current;
    const topContentFromRef = topContentRef.current;
    const messageSlideInTimeoutIDFromRef = messageSlideInTimeoutIDRef.current;
    setThemeOptions((prev) => ({
      ...prev,
      dotColor: 'text-red-500',
    }));
    addOrRemoveColorTheme(width);

    // text messages observer
    const textMessages = document.querySelectorAll('.text-message-selector');
    const textMessagesObservedArr = [];
    if (textMessages && !messageSlideInCalled.current) {
      textMessages.forEach((message) => {
        textMessagesObservedArr.push(observers.textMessageObserver.observe(message));
      });
    }
    // Carousel observer
    const carousel = document.querySelector('#intersection-observer-position');
    if (carousel) observers.carouselObserver.observe(carousel);

    // run on mobile
    if (width < 640) {
      // addOrRemoveVideoControls('add');
      setTheme('light');
      // if (uiVidFromRef) observers.UiVideoOberver.observe(uiVidFromRef);
    }
    // run on desktop
    // else {
      // addOrRemoveVideoControls('remove');
      // top content observer - handles theme change
      if (topContentFromRef) observers.topContentObserver.observe(topContentFromRef);
      // UI observer
      if (uiVidFromRef) observers.UiVideoOberver.observe(uiVidFromRef);
      // Spacial calling videos observers
      if (spacialCallingVideosRef.current[0])
        observers.SpacialCallingObserverOne.observe(spacialCallingVideosRef.current[0]);
      if (spacialCallingVideosRef.current[1])
        observers.SpacialCallingObserverTwo.observe(spacialCallingVideosRef.current[1]);
      if (spacialCallingVideosRef.current[2])
        observers.SpacialCallingObserverThree.observe(spacialCallingVideosRef.current[2]);
    // }
    widthRef.current = width;
    // clear observers and timeout ID's
    return () => {
      if (messageSlideInTimeoutIDFromRef) messageSlideInTimeoutIDFromRef.forEach((id) => clearTimeout(id));
      if (topContentFromRef) observers.topContentObserver.unobserve(topContentFromRef);
      if (carousel) observers.carouselObserver.unobserve(carousel);
      if (textMessages) textMessages.forEach((msg) => observers.textMessageObserver.unobserve(msg));
      if (spacialCallingVideosRef.current[0])
        observers.SpacialCallingObserverOne.unobserve(spacialCallingVideosRef.current[0]);
      if (spacialCallingVideosRef.current[1])
        observers.SpacialCallingObserverOne.unobserve(spacialCallingVideosRef.current[1]);
      if (spacialCallingVideosRef.current[2])
        observers.SpacialCallingObserverOne.unobserve(spacialCallingVideosRef.current[2]);
      if (uiVidFromRef) observers.UiVideoOberver.unobserve(uiVidFromRef);
    };
  }, [width]);

  const topDownViewsStyle = 'w-[500px] sm:w-[600px] md:w-[700px] lg:scale-110';

  return (
    <div className="h-m-nav w-full font-normal flex flex-col items-center text-center">
      {width < 640 ? (
        // mobile hero display
        <>
          <h1 className="med-50">From here to there instantly. </h1>
          <p
            onClick={() => navigate('/keynote', { state: { linkedProduct: true } })}
            className="text-2xl mt-8 text-[#FF4F01] hover:cursor-pointer"
          >
            Watch the keynote
            <br />
            presentation
            <img alt="ui arrow" className="black-to-orange w-[14px] h-[14px] inline ml-2" src={arrow} />
          </p>
          <img alt="A chrome and black disk-shaped device with small cameras surrounding the perimeter." className="mb-12 mt-40 -ml-[70%] scale-[160%] max-h-96" src={teleporterTopDown} />
        </>
      ) : (
        // desktop hero display
        <>
          <div className="absolute h-[4rem] bg-black top-0 z-10 left-0 right-0" />
          <div id="animation" ref={heroRef.current} className="v-h-m-n relative z-10 w-screen -mt-16">
            <div className="w-screen overflow-hidden h-[100vh] absolute bg-white" />
            <div className="absolute bottom-0 pb-20 flex flex-col justify-center w-full items-center">
              <h1 className="text-7xl tracking-tight text-white z-10">Teleporter</h1>
              <p className="text-xl mt-4 text-white z-10">From here to there, instantly.</p>
              <ButtonPlusArrow
                style="bg-opacity-25 backdrop-blur-xl border-0 bg-white text-white z-10"
                imgStyle="invert"
                text="Watch the keynote"
                onClick={() => navigate('/keynote', { state: { linkedProduct: true } })}
              />
            </div>
            <video
              id="animation"
              className="h-full w-full object-cover brightness-[.77]"
              autoPlay
              muted
              playsInline
              loop
              src={animation}
            />
          </div>
        </>
      )}
      <div ref={topContentRef} id="top-content-selector" className="absolute top-0 left-0 w-1" style={{ height: '20px' }}> </div>

      {/* introducing teleporter */}
<div className="h-m-nav flex flex-col items-center justify-center pt-20">
  <div className="flex flex-col items-center w-full max-w-[1200px] px-4">
    <h2 className="text-5xl lg:text-6xl xl:text-6xl font-medium text-center mb-4">
      Introducing Teleporter
    </h2>
    <div className="flex flex-col items-center">
  <p className="text-[#9B9DA2] leading-6 xl:leading-[1.85rem] font-light mt-10 lg:mt-4 text-2xl xl:text-2xl tracking-wide text-center lg:text-left">
    The world's first
    spatial calling device.
  </p>

  <ButtonPlusSignLightTheme
    style="mt-6 mb-10 lg:mb-0 z-10"
    text={width < 1024 ? 'Read more' : 'Read more about Spatial Calling with Teleporter'}
    onClick={modals.spatialCalling}
  />
</div>
    <div className="w-full max-w-[776px] pt-10">
      <Img 
        alt="A chrome and black disk-shaped device with small cameras surrounding the perimeter." 
        className="w-full h-auto object-cover" 
        src={[teleporterImage, teleporterImageFallback]} 
      />
    </div>
  </div>
</div>
      <p className="med-40 mt-20 lg:text-left lg:self-start z-10">
       Teleporter is your portal to any space.
        <br />
        {/*<span className="secondary-font-gray"> Bridge distance in a click. </span>*/}
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
    
  {/* animation video */}
      {/* <div className="flex flex-col w-full items-center z-10">
        <ResizableGraphicPlusText
          text="Share entire physical environments. In real-time."
          style=""
          width={width}
          src={width < 640 ? sharePhysicalEnviornmentsLowQ : sharePhysicalEnviornments}
        />
        <ResizableGraphicPlusText
          text={
            <>
              Interact with people.{<br />}Engage with objects.{<br />}No interface to speak of.
            </>
          }
          style="flex-row-reverse mr-0"
          textStyle="lg:mr-12"
          width={width}
          src={width < 640 ? engageLowQ : engage}
          videoStyle=""
        />
        <ResizableGraphicPlusText
          text="Five years ahead of anything else in the space"
          style=""
          width={width}
          src={morph}
          button={true}
        />
      </div> */}

      {/* teleporter is a leap section
      <div className="w-full pt-20 flex flex-col items-center lg:items-start pb-20">
        <p className="med-40 mb-4 max-w-208 lg:text-left self-center lg:self-start">
          Teleporter is a leap in what you can accomplish digitally.
        </p>
        <ButtonPlusArrow
          style=""
          text={width < 1024 ? 'Learn more' : 'Learn more about what Teleporter enables'}
          onClick={modals.teleporterEnables}
        />
        <div className="lg:flex lg:items-center">
          <div className="border-[#A1A8AE] border-[5px] lg:border-0 rounded-[2rem] h-[8.25rem] w-[22rem] lg:w-[17rem] flex flex-col items-center justify-center mt-12">
            <p className="med-30">Phone Call</p>
            <p className="med-20 secondary-font-gray mt-1 lg:mt-6">Talk from a{width < 1024 ? ' ' : <br />}distance</p>
            <p className="med-20 font-medium mt-1 lg:mt-6">1D</p>
          </div>
          {width >= 1024 && <div className="bg-[#707070] w-[2px] h-60 mt-12" />}
          <div className="border-[#A1A8AE] border-[5px] lg:border-0 rounded-[2rem] h-[8.25rem] w-[22rem] lg:w-[17rem] flex flex-col items-center justify-center mt-6 lg:mt-12">
            <p className="med-30">Video Call</p>
            <p className="med-20 secondary-font-gray mt-1 lg:mt-6">See from a{width < 1024 ? ' ' : <br />}distance</p>
            <p className="med-20 font-medium mt-1 lg:mt-6">2D</p>
          </div>
          <div className="border-[#A245D6] border-[5px] rounded-[2rem] lg:rounded-[3rem] h-[12.1875rem] lg:h-[16rem] w-[22rem] lg:w-[25rem] flex flex-col items-center justify-center mt-12">
            <p className="med-30">
              Spatial Call
              <br />
              with <span className="text-[#A245D6]">Teleporter</span>
            </p>
            <p className="med-20 secondary-font-gray mt-2">Be there from a distance</p>
            <p className="med-20 font-medium mt-2">3D</p>
          </div>
        </div>
    </div> */}
{/*arrow*/}
<p className="med-40 mt-20 lg:text-left lg:self-start z-10">
  Connect, Create, and Collaborate - 
  <br />
        <span className="secondary-font-gray">Accomplish more </span>
  with spatial call.
</p>
<p className="text-left lg:text-left lg:self-start z-10">
  <ButtonPlusSignLightTheme
          style=""
          text={width < 1024 ? 'Read more' : 'Read more about what Teleporter enables'}
          onClick={modals.teleporterEnables}
        />
        </p>
<div className="w-full max-w-4xl mx-auto mt-20 mb-20">
  <div className="flex flex-col md:flex-row justify-between items-center mb-8">
    <div className="flex flex-col items-center w-1/3">
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10V14M8 6V18M12 3V21M16 6V18M20 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <p className="text-3xl font-medium">Phone Call</p>
    </div>
    <div className="flex flex-col items-center w-1/3">
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <p className="text-3xl font-medium">Video Call</p>
    </div>
    <div className="flex flex-col items-center w-1/3">
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <p className="text-3xl font-medium">Spatial Call</p>
    </div>
  </div>
  <div className="relative">
    <div className="h-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full flex">
      <div className="w-1/3" style={{ borderRightWidth: '8px', borderColor: 'white' }}></div>
      <div className="w-1/3" style={{ borderRightWidth: '8px', borderColor: 'white' }}></div>
      <div className="w-1/3 bg-purple-500"></div>
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
      <span className="text-blue-500 font-semibold text-xl">Here</span>
      <span className="text-purple-500 font-semibold text-xl">There</span>
    </div>
    <div className="absolute top-full left-0 w-full flex justify-between mt-2 text-2xlg text-gray-600">
      <span className="w-1/3 text-center">Voice</span>
      <span className="w-1/3 text-center">Face</span>
      <span className="w-1/3 text-center">Entire Space</span>
    </div>
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[90%]">
      <svg width="75" height="75" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L80 50L0 100V0Z" fill="#a855f7" />
      </svg>
    </div>
    </div>
    {/* <div className="absolute left-0 bottom-full mb-2 text-blue-500 font-semibold text-xl">Here</div>
    <div className="absolute right-0 bottom-full mb-2 text-purple-500 font-semibold text-xl flex items-center">
      There
      </div> */}
  </div>
</div>


{/* setup teleporter steps*/}
<div className="relative w-full z-10">
  <div className="flex flex-col w-full items-center relative z-20">
  <p className="med-40 mx-8 lg:mx-14 xl:mx-0 mt-20 z-10 mb-8 max-w-[50rem] lg:text-left lg:mb-0 lg:self-start">
          If you can count to three, you can setup a Teleporter.
        </p>
    <ResizableGraphicPlusText
      text={(
        <div>
          <div className="med-30">1. Place it in your space</div>
        </div>
      )}
      style=""
      width={width}
      src={width < 640 ? step1LowQ : step1}
    />
    <ResizableGraphicPlusText
      text={(
        <div>
          <div className="med-30">2. Connect to your device</div>
        </div>
      )}
      style="flex-row-reverse mr-0"
      textStyle="lg:mr-12"
      width={width}
      src={width < 640 ? step2LowQ : step2}
      videoStyle=""
    />
    <ResizableGraphicPlusText
      text={(
        <div>
          <div className="med-30">3. Be there in tap</div>
        </div>
      )}
      style=""
      width={width}
      src={width < 640 ? step3LowQ : step3}
      button={true}
    />
  </div>
</div>

    
      {/* setup teleporter
      <div className="w-full flex flex-col items-center relative pb-[5rem] lg:pb-[10rem]">
        <div className="background-gray absolute w-screen h-full my-22" />
        <p className="med-40 mx-8 lg:mx-14 xl:mx-0 mt-20 z-10 mb-8 max-w-[50rem] lg:text-left lg:mb-0 lg:self-start">
          If you can count to three, you can setup a Teleporter.
        </p>
        {width >= 1024 && (
          <ButtonPlusArrow
            onClick={modals.howItWorks}
            style={'self-start mx-8 lg:mx-14 xl:mx-0 z-10'}
            text={'Read more about how it works'}
          />
        )}
        <div className="z-10" id="intersection-observer-position">
          <CarouselBleed
            style="mt-8 lg:mt-0 lg:mt-[3rem]"
            videos={widthRef.current > 640 ? [step1, step2, step3] : [step1LowQ, step2LowQ, step3LowQ]}
          />
        </div>
        {width < 1024 && (
          <ButtonPlusArrow onClick={modals.howItWorks} style={'mt-[3rem] mx-8 z-10 lg:mx-14'} text={'Learn more'} />
        )}
      </div> */}
      {/* connected through the app */}
      {/* <div className="absolute w-full h-full flex justify-center items-center top-0 bg-black">
      <div className='absolute top-3 right-5 w-[50px] h-[50px] hover:cursor-pointer'>
        <img alt="ui X button" className='w-full h-full object-cover' src={xButton} />
      </div>
      <iframe className='video'
        width={`${width < 1300 ? width : width - 200}`}
        height={`${width > 1300 ? height: height - 200}`}
        allow='autoplay'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://www.youtube.com/watch?v=rZHP-Khad-Q&ab_channel=Remix`}>
      </iframe>
    </div> */}
      <div className="pt-16 w-full sm:px-8 flex flex-col items-center pb-10 md:px-12">
        <p className="med-40 mb-4 lg:mb-4 lg:text-left lg:self-start">
          Anywhere there{'\u2019'}s a device. {width > 768 && <br />}
          Connected through Remix{'\u2019'}s {width < 640 && <br />}app.
        </p>
        <ButtonPlusSignLightTheme
          style="lg:self-start mb-6"
          text={width < 1024 ? 'Read more' : <> Read more about the network we{'\u2019'}re building</>}
          onClick={modals.network}
        />
      </div>
      <div className="lg:m-v-h-m-n w-screen sm:w-full lg:w-full sm:rounded-3xl overflow-hidden will-change-transform" style={{ paddingBottom: '56.25%', position: 'relative' }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/rZHP-Khad-Q?si=A5A6ZCBH7lbBVJzB"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
      <p className="med-40 secondary-font-gray max-w-[50rem] mx-12 mt-20 lg:self-start lg:ml-0 lg:text-left">
        Teleporter{'\u2019'}s <span className="text-black">spatial intelligence</span> unleashes new kinds of tools.
      </p>
      {width >= 1024 && (
        <ButtonPlusSignLightTheme
          onClick={modals.ambientIntelligence}
          style="self-start z-10"
          text="Read more about spatial intelligence"
        />
      )}

      {/* text messages */}
      <div className="w-screen px-4 flex flex-col items-center relative">
        <div className="absolute -top-[6rem] lg:-top-[17rem] pointer-events-none">
          <div
            id="lottie-blur"
            style={{ width: width >= 1024 ? 1000 : 800, height: width >= 1024 ? 1000 : 800 }}
            className=""
          />
        </div>
        <div className="text-message-selector opacity-0 relative mt-20 mb-10 sm:mr-[10rem] lg:mr-[20rem]">
          <img alt="text message bubble" className="brightness-95 -z-10" src={text1} />
          <p className="absolute left-8 top-4 reg-20 z-10 text-left">
            Hey Teleporter, help me assemble
            <br />
            this table.
          </p>
        </div>
        <div className="text-message-selector opacity-0 relative mb-4 sm:ml-[10rem] lg:ml-[20rem]">
          <img alt="text message bubble" className="-z-10" src={text2} />
          <p className="text-white opacity-90 absolute left-8 top-3 reg-20 z-10 text-left">
            That looks like a MALM Dressing Table from Ikea.
          </p>
        </div>
        <div className="text-message-selector opacity-0 relative mb-10 sm:ml-[10rem] lg:ml-[20rem]">
          <img alt="text message bubble" className="-z-10" src={text3} />
          <p className="text-white opacity-90 absolute left-8 top-3 reg-20 z-10 text-left">
            Let me know when you{'\u2019'}re ready
            <br />
            for step one.
          </p>
        </div>
      </div>
      {width < 1024 && <ButtonPlusArrow onClick={modals.ambientIntelligence} style="z-10" text="Learn more" />}
      <p className="med-40 mt-40 mb-20 lg:mb-2 max-w-[50rem]">
        What else does a Teleporter do? <span className="secondary-font-gray">More than you{'\u2019'}d expect.</span>
      </p>
      {width >= 1024 && (
        <ButtonPlusSignLightTheme onClick={modals.spatialHub} style="mb-16 -mt-20" text="Read more about the spatial hub" />
      )}

      {/* topdown views */}
      <div className="w-full relative">
        <div className="lg:flex">
          <div className={`-ml-[11rem] lg:-ml-[9rem] ${topDownViewsStyle}`}>
            <img alt="Teleporter device with the UI shown playing the Beatles." className="w-full h-full object-contain" src={width < 640 ? beatlesLowQ : beatles} />
          </div>
          <div className="lg:ps-20 lg:pt-32">
            <p className="med-40 lg:text-left mt-[3rem] lg:mt-24 lg:w-">Hear, there & everywhere.</p>
            <p className="mx-auto light-20 tracking-wide secondary-font-gray mt-4 px-8 lg:px-0 mb-[3rem] lg:mb-28 max-w-160 lg:text-left">
              Listen to music in Spatial Audio that fills your entire space. It also works great for traditional calls.
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:pt-0">
          <div className={`flex items-center justify-center ml-auto -mr-[9rem] ${topDownViewsStyle}`}>
            {/* <div className={`w-full h-full flex items-center justify-center ${topDownViewsStyle}`}> */}
            <div className={`absolute w-[350px] sm:w-[420px] lg:w-2/3  mx-auto pointer-events-none`}>
              <div id="lottie-line" className="" />
            </div>
            <img alt="Teleporter device with the UI shown displaying a wifi symbol." className="w-full h-full object-contain" src={width < 640 ? wifiLowQ : wifi} />
            {/* </div> */}
          </div>
          <div className="lg:pr-20 lg:pl-5 lg:mr-20 flex flex-col items-end">
            <p className="mx-auto med-40 mt-[3rem] lg:mt-32 lg:text-left">
              WiFi 7.
              <br />
              Coming to your space.
            </p>
            <p className="mx-auto lg:ml-0 text-center light-20 tracking-wide secondary-font-gray lg:text-left max-w-96 px-8 lg:px-0 mt-8 mb-[4rem] lg:mb-48">
              <span className="text-[#FF4F01]">Coming Soon.</span> Teleporter functions as a WiFi 7 802.11be modem. It
              enhances performance across all three bands (2.4 GHz, 5 GHz, and 6 GHz) and introduces a 320 MHz
              ultra-wide channel, to provide speeds 5X faster than WiFi 6.
            </p>
          </div>
        </div>

        <div className="lg:flex">
          <div className={`-ml-[11rem] lg:-ml-[9rem] lg:mr-6 ${topDownViewsStyle}`}>
            <img alt='Teleporter device with the UI showning an alert "Teleporter detected a suspicious entry from your back sliding door."' className="w-full h-full object-contain" src={width < 640 ? securityLowQ : security} />
          </div>
          <div className="lg:pl-16 lg:pt-10 lg:text-left">
            <p className="med-40 mt-[3rem] lg:mt-36">
              Advanced Security.
              <br />
              Better Analytics.
            </p>
            <p className="light-20 tracking-wide secondary-font-gray max-w-160 mt-4 px-8 mb-28 lg:px-0 mx-auto">
              Teleporter provides intelligent security and analytics updates on-the-fly. It pings you if it detects
              suspicious activity in your store or home. You can even ask it what{'\u2019'}s happening and it will
              provide a description.
            </p>
          </div>
        </div>
      </div>
      <p className="med-40 mt-60 sm:mx-20 max-w-[25rem]">The magic is in the software</p>
      <ButtonPlusArrow
        onClick={() => {
          navigate('/software');
          window.scrollTo(0, 0);
        }}
        style="mb-60"
        text={width < 1024 ? 'Learn more' : 'Explore our software'}
      />
    </div>
  );
}

export default Product;
