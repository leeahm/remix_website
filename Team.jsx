import ButtonPlusArrow from '../components/ui/ButtonPlusArrow';
import TeamProfile from '../components/ui/TeamProfile';
import { useContext } from 'react';
import { ThemeContext, ThemeOptionsContext } from '../App';
import { useEffect } from 'react';

import brandonY from '../assets/team/brandon-y.png';
import calPoly from '../assets/team/cal-poly.png';
import kalebT from '../assets/team/kaleb-t.png';
import stanford from '../assets/team/stanford.png';
import aaronG from '../assets/team/aaron-g.png';
import meta from '../assets/team/meta.png';
import brandonT from '../assets/team/brandon-t.png';
import samG from '../assets/team/sam-g.png';
import sjState from '../assets/team/sj-state.png';
import yuanG from '../assets/team/yuan-g.png';
import techStars from '../assets/team/tech-stars.png';
import { Link } from 'react-router-dom';

function Team() {
  // eslint-disable-next-line no-unused-vars
  const [, setTheme] = useContext(ThemeContext);
  const [, setThemeOptions] = useContext(ThemeOptionsContext);

  useEffect(() => {
    setThemeOptions((prev) => ({
      ...prev,
      dotColor: 'text-blue-500',
    }));
    setTheme('light');
  }, []);

  const brandonYBio = (
    <>
      Before founding Remix, Brandon specialized in data science and industrial engineering, focusing on reinforcement
      learning applications, stochastic modeling, and metaheuristics. He has published research on operations and supply
      chain engineering, and worked in operations optimization for the third-largest medical equipment manufacturer in
      the US. He holds a degree in Industrial Engineering from Cal Poly, San Luis Obispo.
    </>
  );
  const kalebTBio = (
    <>
      Kaleb brings expertise in deep learning and software engineering. He holds a Master{'\u2019'}s in Computer Science
      with an AI focus from Stanford University, where he graduated with honors. He incorporates insights from his
      graduate research in computer vision, data analysis, and neurobiology at Stanford into Remix{'\u2019'}s AI and
      computer vision technologies.
    </>
  );
  const aaronGBio = (
    <>
      Aaron, previously a Facebook AI resident and currently a PhD student at Cornell University, is a distinguished
      research scientist in AI. With a master{'\u2019'}s and undergrad from Brown University, he was instrumental in the
      creation of OpenGPT-2 and work focusing on large-scale data-driven language technology, semantic dataset creation,
      real-time 6DoF video synthesis, and neural rendering. His research has received accolades at prestigious
      conferences like NeurIPS and ICCV.
    </>
  );
  const brandonTBio = (
    <>
      Brandon brings experience in business development, law, and marketing from the Wolper Organization at Warner
      Brothers and Morrison Foerster. He has been responsible for the strategies & execution of media projects in the
      United States, South Korea, and Europe. He holds a degree in Political Science from Cal Poly, San Luis Obispo.{' '}
    </>
  );
  const samGBio = (
    <>
      Sam brings expertise in computational physics, optics, and hardware engineering. He has experience training and
      optimizing PyTorch & TensorFlow models for real-world deployment, electrical/optical engineering, as well as Unity
      and Apple Platform Development. He holds a degree in Physics from San Jose State University.
    </>
  );
  const yuanGBio = (
    <>
      Yuan brings a background in software engineering and research, with experience at Stanford Artificial Intelligence
      Laboratory and Amazon. His research spans natural language processing, neural rendering and machine learning, with
      a focus on vision-language models and deep learning for computer vision. Yuan has contributed to developing Python
      packages for automating PDE solvers, and dynamic 4D reconstruction. He holds a Bachelor{'\u2019'}s degree from UC
      San Diego and is currently pursuing his Master{'\u2019'}s at Stanford.
    </>
  );

  return (
    <div className="h-m-nav max-w-[90rem] flex flex-col lg:self-start">
      <h1 className="font-normal text-4xl md:text-6xl">Hello, we{'\u2019'}re Remix.</h1>
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = 'mailto:brandon@remix.ing';
          e.preventDefault();
        }}
      >
        <ButtonPlusArrow style={'w-32'} text="Contact us" />
      </Link>
      <div className="flex flex-col lg:flex-row">
        <div className="mt-10 grid gap-x-8 mr-auto lg:grid-cols-2">
          <TeamProfile
            bio={brandonYBio}
            experience={calPoly}
            photo={brandonY}
            title="Chief Executive Officer"
            name="Brandon Yowakim"
          />
          <TeamProfile
            bio={kalebTBio}
            experience={stanford}
            photo={kalebT}
            title="Chief Software Officer "
            name="Kaleb Tsegay"
          />
          <TeamProfile
            bio={aaronGBio}
            experience={meta}
            photo={aaronG}
            title="Research Scientist"
            name="Aaron Gokaslan"
          />
          <TeamProfile
            bio={brandonTBio}
            experience={calPoly}
            photo={brandonT}
            title="Chief Growth Officer"
            name="Brandon Tsouanatos"
          />
          <TeamProfile
            experience={sjState}
            photo={samG}
            bio={samGBio}
            title="Chief Hardware Officer"
            name="Samuel Gerber"
          />
          <TeamProfile
            bio={yuanGBio}
            experience={stanford}
            photo={yuanG}
            title="Computer Vision Lead"
            name="Yuan Gao"
          />
        </div>
        <div className="mx-auto mt-20 lg:ml-20 lg:-mt-16 mb-8 lg:mb-0 flex lg:w-1/3 flex-col justify-center items-center object-contain">
          <p className="secondary-font-gray text-3xl mb-3 mr-2">Backed by</p>
          <div className="mx-14 lg:mx-4 max-w-[27rem]">
            <img alt="Techstars logo" className="w-full h-full object-cover" src={techStars} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
