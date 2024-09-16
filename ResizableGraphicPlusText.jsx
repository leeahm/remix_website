import { useNavigate } from 'react-router-dom';
import ButtonPlusSignLightTheme from './ui/ButtonPlusSignLightTheme';

// eslint-disable-next-line react/prop-types
export default function ResizableGraphicPlusText({ src, style, width, text, button = false, textStyle, videoStyle }) {
  const navigate = useNavigate();

  return (
    <div className={`flex items-center md:my-12 md:w-full ${style || ''}`}>
      <div className="w-screen overflow-hidden md:w-[663px] md:h-[290px] lg:h-[390px] md:rounded-[2rem] will-change-transform">
        <video
          src={src + '#t=0.001'}
          muted
          preload="metadata"
          playsInline
          className={`spacial-calling-selector h-[450px] sm:h-full w-full object-cover ${videoStyle || ''}`}
        />
        {width < 768 && <p className="mt-4 mb-12 font-medium text-lg">{text}</p>}
      </div>

      {width >= 768 && (
        <div className="relative flex flex-col items-right mx-8 w-96 text-center">
          <p className={`text-[1.872em] ${textStyle}`}>{text}</p>
          {button && (
            <ButtonPlusSignLightTheme
              style="w-85 top-[100px] self-center"
              onClick={() => {
                navigate('/software');
                window.scrollTo(0, 0);
              }}
              text={<>Read about Remix{'\u2019'}s technology</>}
            />
          )}
        </div>
      )}
    </div>
  );
}
