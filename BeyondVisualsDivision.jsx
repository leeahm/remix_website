import ButtonPlusArrow from './ui/ButtonPlusArrow';
import GridElement from './ui/GridElement';
import ImageCarousel from './ui/ImageCarousel';
import { useEffect, useState } from 'react';
import assemblePlusOverlay from '../assets/beyondVisuals/assemble-plus-overlay.png';
import assembleBlur from '../assets/beyondVisuals/assemble-blur.png';
import remotePlusOverlay from '../assets/beyondVisuals/remote-plus-overlay.png';
import remoteBlur from '../assets/beyondVisuals/remote-blur.png';
import elderOverlay from '../assets/beyondVisuals/elder-overlay.png';
import elderBlur from '../assets/beyondVisuals/elder-blur.png';
import yolo from '../assets/beyondVisuals/yolo.mp4';
import yoloBlur from '../assets/beyondVisuals/yolo-blur.png';

import elderCarousel from '../assets/beyondVisuals/elder-carousel.png';
import { useWindowSize } from '@uidotdev/usehooks';
import modals from '../modals';

export default function BeyondVisualsDivision() {
  // const [selected, setSelected] = useState(null);
  const [gridStyle, setGridStyle] = useState('');
  const { width } = useWindowSize();

  const styleElement = (elementNumber) => {
    if (!gridStyle || 'b-v-resize-' + elementNumber === gridStyle) {
      if (elementNumber === 0) return 'b-v-fade-in-slow';
      return 'b-v-fade-in';
    }
    if (elementNumber === 0) return 'b-v-fade-out-quick';
    return 'b-v-fade-out';
  };

  const handleGridElementClick = (e) => {
    if (gridStyle) {
      setGridStyle('');
      return;
    }
    if (!e.target.classList.contains('grid-clickable')) return;
    const current = e.target.parentNode;
    if (current.classList.contains('select-id-1')) {
      setGridStyle('b-v-resize-1');
    } else if (current.classList.contains('select-id-2')) {
      setGridStyle('b-v-resize-2');
    } else if (current.classList.contains('select-id-3')) {
      setGridStyle('b-v-resize-3');
    } else {
      setGridStyle('b-v-resize-4');
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleGridElementClick);
    return () => document.removeEventListener('click', handleGridElementClick);
  });

  const carouselContent = [
    {
      image: assemblePlusOverlay,
      displayImage: assembleBlur,
      title: 'How do I assemble this?',
      text: (
        <>
          TeleForm uses its object detection and LLM embeddings to assist in tasks that require complex reasoning, and
          visual context. Because TeleForm can generate new camera views, what you{'\u2019'}re referring to doesn
          {'\u2019'}t have to be in direct view.
        </>
      ),
      // imageOverlay: assembleOverlay,
    },
    {
      image: remotePlusOverlay,
      displayImage: remoteBlur,
      title: <>Where{'\u2019'}d I put the remote?</>,
      text: (
        <>
          TeleForm{'\u2019'}s multimodal object detection system lets you find objects in your surroundings. It
          remembers where you left items, even if they{'\u2019'}re no longer in view. It{'\u2019'}s LLM embeddings let
          you access these features using natural language.{' '}
        </>
      ),
    },
    {
      video: yolo,
      displayImage: yoloBlur,
      title: 'How many customers visited the store last week?',
      text: (
        <>
          TeleForm{'\u2019'}s real-time object detection and tracking can help you optimize your store. TeleForm can
          detect suspicious activities and identify known shoplifters in real-time. Optimize layouts by monitoring crowd
          density and flow. TeleForm can even identify when items are low and alert staff to restock.
        </>
      ),
      imageStyle: 'w-1/2',
    },
    {
      image: elderCarousel,
      displayImage: elderBlur,
      title: 'How is Grandpa doing?',
      text: (
        <>
          TeleForm{'\u2019'}s spatial understanding can help you stay on top of the well-being of your elderly loved
          ones. You can customize settings to give an alert if they{'\u2019'}ve fallen, and get updates on important
          things, like if they{'\u2019'}ve eaten that day.{' '}
        </>
      ),
    },
  ];

  return (
    <>
      <div
        className={`mt-24 w-full h-full max-h-screen md:max-h-80 lg:max-h-128 max-w-[92rem] md:grid beyond-visuals-grid gap-6 ${gridStyle}`}
      >
        <div
          className={`px-12 flex flex-col items-center md:px-0 md:items-baseline md:col-span-3 md:row-span-1 overflow-hidden ${styleElement(
            0
          )}`}
        >
          <p className={`med-30 md:text-2xl md:leading-none lg:text-3xl tracking-tight mb-2 md:text-left`}>
            TeleForm goes beyond visuals.{width > 1091 ? <br /> : ' '}It{'\u2019'}s live information.
          </p>
          <ButtonPlusArrow
            onClick={modals.liveInformation}
            style={`md:mt-1 md:h-7 lg:h-auto lg:mt-6 mb-16 md:mb-0 ${''}`}
            text={`${width < 1024 ? 'Learn more' : 'Learn more about information'}`}
          />
        </div>
        <ImageCarousel style="md:hidden -ml-8 md:-ml-14" content={carouselContent} />

        <GridElement
          text={
            <>
              TeleForm{'\u2019'}s real-time object detection and tracking can help you optimize your store. TeleForm can
              detect suspicious activities and identify known shoplifters in real-time. Optimize layouts by monitoring
              crowd density and flow. TeleForm can even identify when items are low and alert staff to restock.
            </>
          }
          title={
            <>
              How many customers visited the store last
              <br />
              week?
            </>
          }
          style={`select-id-1 grid-el col-span-3 row-span-2 hidden md:block rounded-[2rem] ${styleElement(1)}`}
          image={null}
          video={yolo}
          openDrawer={'b-v-resize-1' === gridStyle}
          titleStyle={'text-3xl leading-none lg:text-5xl mb-0 lg:mb-4'}
        />

        <GridElement
          text={
            <>
              TeleForm uses its object detection and LLM embeddings to assist in tasks that require complex reasoning,
              and visual context. Because TeleForm can generate new camera views, what you{'\u2019'}re referring to
              doesn{'\u2019'}t have to be in direct view.
            </>
          }
          title={<>How do I assemble this?</>}
          style={`select-id-2 grid-el col-span-3 row-span-2 hidden md:block rounded-[2rem] ${styleElement(2)}`}
          image={assemblePlusOverlay}
          // imageOverlay={assembleOverlay}
          imageStyle={'mr-0'}
          openDrawer={'b-v-resize-2' === gridStyle}
          titleStyle={'text-3xl lg:text-5xl leading-none mb-4 lg:mb-4 max-w-[130px] lg:max-w-[200px]'}
        />

        <GridElement
          text={
            <>
              TeleForm{'\u2019'}s multimodal object detection system lets you find objects in your surroundings. It
              remembers where you left items, even if they{'\u2019'}re is no longer in view. It{'\u2019'}s LLM
              embeddings let you access these features using natural language.{' '}
            </>
          }
          title={
            <>
              Where{'\u2019'}d I leave{width < 1024 ? <br /> : ' '}the remote?
            </>
          }
          style={`select-id-3 hidden col-span-2 md:block ${styleElement(3)}`}
          titleStyle={'text-xl leading-none lg:text-[2rem] lg:leading-none'}
          image={remotePlusOverlay}
          // imageOverlay={remoteOverlay}
          openDrawer={'b-v-resize-3' === gridStyle}
        />

        <GridElement
          style={`hidden select-id-4 md:block ${styleElement(4)}`}
          text={
            <>
              TeleForm{'\u2019'}s spatial understanding can help you stay on top of the well-being of your elderly loved
              ones. You can customize settings to give an alert if they{'\u2019'}ve fallen, and get updates on important
              things, like if they{'\u2019'}ve eaten that day.{' '}
            </>
          }
          title="How is Grandpa?"
          image={elderOverlay}
          imageOverlay={elderOverlay}
          openDrawer={'b-v-resize-4' === gridStyle}
          titleStyle={'text-base leading-none lg:text-[1.6rem] lg:leading-7'}
        />
      </div>
    </>
  );
}
