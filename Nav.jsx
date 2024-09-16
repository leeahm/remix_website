import { Link } from 'react-router-dom';
import TwoLineHamburger from './ui/TwoLineHamburger';
import { animated, useSpring } from '@react-spring/web';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext, ThemeOptionsContext } from '../App';
import arrowRight from '../assets/arrow-right.png';

// eslint-disable-next-line react/prop-types
export default function Nav() {
  const [springs, api] = useSpring(() => ({
    from: { height: 0 },
  }));
  const [open, setOpen] = useState(false);
  const [theme] = useContext(ThemeContext);
  const [themeOptions] = useContext(ThemeOptionsContext);
  const [technology, setTechnology] = useState(false);

  // function to animate opening/closing drawer
  const animateDrawerOpenClose = () => {
    if (open) {
      const menuContainer = document.querySelector('.menu-container');
      menuContainer.classList.remove('active');
      api.start({
        from: {
          height: 200,
        },
        to: {
          height: 0,
        },
      });
    } else {
      const menuContainer = document.querySelector('.menu-container');
      menuContainer.classList.add('active');
      api.start({
        from: {
          height: 0,
        },
        to: {
          height: 200,
        },
      });
    }
    setOpen(() => !open);
    setTimeout(() => setTechnology(false), 300);
  };

  // animate mobile nav elements on technology click
  const animateTechnologyMobile = () => {
    // fade out current elements
    const currentNavElements = document.querySelectorAll('.mobile-nav-element');
    currentNavElements.forEach((el) => {
      el.classList.add('transition', 'opacity-0', 'duration-300');
    });
    const technologyEl = document.querySelector('#mobile-nav-technology');
    technologyEl.classList.remove('opacity-0', 'duration-300', 'transition');
    const technologyArrow = document.querySelector('#technology-arrow');

    // opening technology
    if (technology === false) {
      technologyEl.classList.add('transition', 'duration-300');
      technologyEl.classList.add('-translate-y-[45px]');
      setTimeout(() => {
        currentNavElements.forEach((el) => el.classList.remove('opacity-0'));
        technologyArrow.classList.remove('hidden');
        setTechnology(true);
      }, 300);
      // closing technology
    } else {
      technologyEl.classList.add('transition', 'duration-300');
      technologyEl.classList.add('translate-y-[45px]');
      technologyArrow.classList.add('hidden');
      setTimeout(() => {
        currentNavElements.forEach((el) => el.classList.remove('opacity-0'));
        setTechnology(false);
      }, 300);
    }
  };

  // allows clicks outside nav to close drawer
  const handleOutsideClick = (e) => {
    const nav = document.querySelector('#nav');
    if (!nav.contains(e.target) && open) animateDrawerOpenClose();
  };

  // func to call on window resize
  let prevSize = undefined;
  const resizeFunc = () => {
    if ((window.innerWidth >= 640 && prevSize < 640) || (window.innerWidth < 640 && prevSize >= 640)) {
      setTechnology(false);
    }
    prevSize = window.innerWidth;
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('resize', resizeFunc);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('resize', resizeFunc);
    };
  });

  const technologyFadeOut = () => {
    // animate software hardware fade-out
    document.querySelector('#software-reg-screen')?.classList.add('opacity-0');
    document.querySelector('#hardware-reg-screen')?.classList.add('opacity-0');

    setTimeout(() => {
      setTechnology(false);
    }, 150);
  };

  return (
    <div
      id="nav"
      className={`transition-colors w-lvw backdrop-blur-2xl duration-500 min-h-[4rem] h-auto z-30 flex flex-col items-center fixed mx-auto top-0 ${
        theme === 'dark' ? 'text-white' : ''
      }`}
    >
      <div className="w-full flex flex-row h-16 mr-2">
        <div
          className={`transition-colors duration-500 -z-10 w-screen absolute h-full opacity-70 ${
            theme === 'dark' ? 'bg-black' : 'background-gray'
          }`}
        />

        <div className="max-w-304 flex flex-row content-center items-center w-full mx-auto">
          <Link
            onClick={() => {
              technologyFadeOut();
              if (open) animateDrawerOpenClose();
            }}
            className="logo-tracking font-normal ml-10 text-lg"
            to="/"
          >
            remix<span className={`${themeOptions.dotColor || 'text-red-600'}`}>.</span>
          </Link>

          {/* desktop nav elements */}
          {technology ? (
            <>
              <button onClick={technologyFadeOut} className="nav-element hidden ml-auto mr-4 sm:block transition">
                <img alt="ui arrow" className={`h-3 rotate-180 ${theme == 'dark' && 'invert'}`} src={arrowRight} />
              </button>
              <Link
                id="software-reg-screen"
                onClick={technologyFadeOut}
                to="/software"
                className="nav-element hidden mr-16 sm:block translate-x-8 transition-[opacity, transform] duration-150"
              >
                Software
              </Link>
              <Link
                id="hardware-reg-screen"
                onClick={technologyFadeOut}
                to="/hardware"
                className="nav-element hidden mr-6 sm:block transition-[opacity, transform] duration-150"
              >
                Hardware
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/product"
                id="product-reg-screen"
                className="nav-element ml-auto hidden mr-8 fade-in-left sm:block"
              >
                Product
              </Link>
              <button
                onClick={() => {
                  const team = document.querySelector('#team-reg-screen');
                  team.classList.add('opacity-0');
                  const technology = document.querySelector('#technology-reg-screen');
                  technology.classList.add('opacity-0');
                  const product = document.querySelector('#product-reg-screen');
                  product.classList.add('opacity-0');
                  setTimeout(() => {
                    setTechnology(true);
                  }, 150);
                }}
                id="technology-reg-screen"
                className="nav-element hidden mr-8  sm:block fade-in-left"
              >
                Technology
              </button>
              <Link to="/team" id="team-reg-screen" className="nav-element hidden mr-12  sm:block fade-in-left">
                Team
              </Link>
            </>
          )}

          {/* mobile nav elements */}

          <TwoLineHamburger
            functionalityOnClick={() => {
              document.querySelector('#technology-arrow').classList.add('hidden');
              animateDrawerOpenClose();
            }}
            open={open}
          />
        </div>
      </div>
      <animated.div
        style={{
          height: 0,
          ...springs,
        }}
        id="nav-dropdown"
        className={`w-screen flex flex-col items-center overflow-hidden sm:hidden`}
      >
        <>
          {!technology && (
            <Link
              to="/product"
              id="mobile-nav-product"
              onClick={() => {
                animateDrawerOpenClose();
              }}
              className="mobile-nav-element mt-6 bounce-down"
            >
              Product
            </Link>
          )}
          <button
            id="mobile-nav-technology"
            onClick={animateTechnologyMobile}
            className={`mobile-nav-element relative ${technology && 'mt-6'}`}
          >
            <img
              className={`-left-8 top-[17.25px] h-3 rotate-180 -pr-32 hidden absolute ${theme == 'dark' && 'invert'}`}
              id="technology-arrow"
              alt="ui arrow"
              src={arrowRight}
            />
            Technology
          </button>
          {!technology && (
            <Link
              to="/team"
              onClick={() => {
                animateDrawerOpenClose();
              }}
              className="mobile-nav-element bounce-up"
            >
              Team
            </Link>
          )}
          {technology && (
            <Link
              id="mobile-nav-software"
              to="/software"
              onClick={() => {
                animateDrawerOpenClose();
              }}
              className="mobile-nav-element bounce-up"
            >
              Software
            </Link>
          )}
          {technology && (
            <Link
              id="mobile-nav-hardware"
              to="/hardware"
              onClick={() => {
                animateDrawerOpenClose();
              }}
              className="mobile-nav-element bounce-up"
            >
              Hardware
            </Link>
          )}
        </>
      </animated.div>
    </div>
  );
}
