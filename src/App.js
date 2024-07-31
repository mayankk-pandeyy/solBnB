import './App.css';
import Hero from './components/Hero';
import Invest from './components/Invest';

function App() {
  return (
    <div className='w-[100vw] min-h-screen'>
      <div className='w-[100vw] h-[100vh] flex flex-col justify-center'>
        <Hero/>
      </div>
      <Invest/>
    </div>
  );
}

export default App;
