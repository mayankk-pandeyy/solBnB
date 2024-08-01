import { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import HeroMobile from './components/HeroMobile';
import Invest from './components/Invest';
import Roadmap from './components/Roadmap';
import RoadmapMobile from './components/RoadmapMobile';

function App() {
  const [mobile, setMobile] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=> {
    console.log(windowWidth);
    if(windowWidth < 900){
      setMobile(true)
    }else{
      setMobile(false)
    }
  }, [window.innerWidth])
  
  return (
    <div className='w-[100vw] min-h-screen'>
        {
          !mobile ? (
            <div className='w-[100vw] h-[100vh] flex flex-col justify-center'>
              <Hero/>
            </div>
          ) : (
            <div><HeroMobile/></div>
          )
        }
      <Invest/>
      {
        !mobile ? (<Roadmap/>) : (<RoadmapMobile/>)
      }
    </div>
  );
}

export default App;
